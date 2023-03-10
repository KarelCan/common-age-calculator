import { Injectable } from '@angular/core';
import { Person } from './people.modet';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import {ModalController, ToastController} from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private people = new BehaviorSubject<Person[]>([]);
  private result = new BehaviorSubject<Date | undefined>(undefined);
  private targetNrOfYears = new BehaviorSubject<number>(100);
  private toasts: HTMLIonToastElement[] = [];

  constructor(
    private toastController: ToastController,
    private translateService: TranslateService,
    private modalController: ModalController
  ) {
    this.people.next(JSON.parse(localStorage.getItem('people') || '[]'));
    this.targetNrOfYears.next(
      JSON.parse(localStorage.getItem('targetNrOfYears') || '100')
    );
    this.startResultAdjusting();
  }

  getPeopleListener(): Observable<Person[] | undefined> {
    return this.people.pipe(
      map((peeps) => {
        return peeps.map((p) => {
          p.dateOfBirth = new Date(p.dateOfBirth);
          return p;
        });
      }),
      map((p) => {
        return p.sort(
          (p1, p2) => p1.dateOfBirth.getTime() - p2.dateOfBirth.getTime()
        );
      })
    );
  }

  getResultListener(): Observable<Date | undefined> {
    return this.result.asObservable();
  }

  getTargetNrOfYearListener(): Observable<number> {
    return this.targetNrOfYears.asObservable();
  }

  async addAPerson(person: Person) {
    if (this.people) {
      const people = this.people.getValue();
      if (people) {
        const newPeople = people;
        newPeople.push(person);
        localStorage.setItem('people', JSON.stringify(newPeople));
        this.people.next(newPeople);
        this.modalController.dismiss()
        await this.showAToast(
          'The person was successfully added',
          true,
          'bottom'
        );
      }
    }
  }

  async editAPerson(oldPerson: Person, updatedPerson: Person) {
    const people = this.people.getValue();
    if (people) {
      const newPeople = people.filter((p) => p._id !== oldPerson._id);
      newPeople.push(updatedPerson);
      localStorage.setItem('people', JSON.stringify(newPeople));
      this.people.next(newPeople);
      await this.showAToast('XYZ name successfully updated', true, 'bottom', {
        name: updatedPerson.name,
      });
    }
  }

  private dismissAllToasts() {
    this.toasts.forEach((t) => t.dismiss());
  }

  private async showAToast(
    message: string,
    pushPosition = true,
    position: 'top' | 'bottom' | 'middle',
    params?: { [key: string]: any }
  ) {
    this.dismissAllToasts();
    const cssClass =
      position === 'bottom' ? 'toast-push-up' : 'toast-push-down';
    this.translateService
      .get(message, { params })
      .subscribe(async (translatedMessage) => {
        const toast = await this.toastController.create({
          message: translatedMessage,
          duration: 2000,
          position: position,
          cssClass: pushPosition ? cssClass : '',
          color: 'success',
        });
        this.toasts.push(toast);
        await toast.present();
      });
  }

  removeAPerson(person: Person) {
    const people = this.people.getValue();
    if (people) {
      const newPeople = people.filter((p) => p._id !== person._id);
      localStorage.setItem('people', JSON.stringify(newPeople));
      this.people.next(newPeople);
    }
  }

  setTargetYear(year: number) {
    if (year < 1) {
      this.targetNrOfYears.next(50);
      this.setTargetYear(50)
      return
    }
    localStorage.setItem('targetNrOfYears', year.toString());
    this.targetNrOfYears.next(year);
  }

  private startResultAdjusting() {
    combineLatest([
      this.getTargetNrOfYearListener(),
      this.getPeopleListener(),
    ]).subscribe(async ([targetNrOfYears, people]) => {
      if (targetNrOfYears < 1 || !people || !people.length) {
        this.result.next(undefined);
        this.dismissAllToasts();
        return;
      }
      //sort mutates the original array
      people.sort(
        (p1, p2) => p1.dateOfBirth.getTime() - p2.dateOfBirth.getTime()
      );

      // this.findXYearsFromNow();

      // this.fillInAges();

      const peopleSortedBasedOnDateInTheYear =
        this.getPeopleSortedBasedOnWhenTheyAreBorn(people);

      //We need him/her to know where to start counting from
      const indexOfOldestPeron = peopleSortedBasedOnDateInTheYear.findIndex(
        (p) => p.name === people[0].name
      );

      let currentYear = people[0].dateOfBirth.getFullYear();
      let collectiveAge = 0;
      peopleSortedBasedOnDateInTheYear.forEach((p) => {
        p.currentAge = 0;
      });
      for (let i = indexOfOldestPeron; collectiveAge !== targetNrOfYears; i++) {
        if (i === peopleSortedBasedOnDateInTheYear.length) {
          i = 0;
          currentYear++;
        }

        const currentPerson = peopleSortedBasedOnDateInTheYear[i];
        const currentPersonsBirthdayThisYear = new Date(
          currentPerson.dateOfBirth
        );
        currentPersonsBirthdayThisYear.setFullYear(currentYear);
        const ageOfCurrentPerson = getAge(
          currentPerson.dateOfBirth,
          currentPersonsBirthdayThisYear
        );
        currentPerson.currentAge = ageOfCurrentPerson;

        if (ageOfCurrentPerson < 0) {
          continue;
        } else if (ageOfCurrentPerson === 0) {
          currentPerson.currentAge = 0;
        }
        collectiveAge = peopleSortedBasedOnDateInTheYear.reduce(
          (prev, curr) => {
            if (!curr.currentAge || curr.currentAge < 0) return prev;
            return prev + curr.currentAge;
          },
          0
        );

        if (collectiveAge === targetNrOfYears) {
          const theDay = new Date(
            peopleSortedBasedOnDateInTheYear[i].dateOfBirth
          );
          theDay.setHours(0, 0, 0, 0);
          theDay.setFullYear(currentYear);
          this.result.next(theDay);
        }
      }
    });
  }

  private getPeopleSortedBasedOnWhenTheyAreBorn(people: Person[]) {
    return people.slice().sort((p1, p2) => {
      const date1 = new Date(p1.dateOfBirth);
      const date2 = new Date(p2.dateOfBirth);
      date1.setFullYear(0);
      date2.setFullYear(0);
      return date1.getTime() - date2.getTime();
    });
  }
}

export const getAge = (birthday: Date, today: Date) => {
  const birthDate = new Date(birthday);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const getDaysInAMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

export const isBeforeToday = (date: Date) => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return date.getTime() < today.getTime();
};
