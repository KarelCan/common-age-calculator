"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5671],{5671:(se,v,m)=>{m.r(v),m.d(v,{HomePageModule:()=>re,TimeAgoExtendsPipe:()=>ie});var d=m(6895),a=m(5035),c=m(4006),b=m(4737),f=m(655),y=m(1135),Z=m(4004),O=m(9841),e=m(8274),h=m(4032);let P=(()=>{class n{constructor(t,o,i){this.toastController=t,this.translateService=o,this.modalController=i,this.people=new y.X([]),this.result=new y.X(void 0),this.targetNrOfYears=new y.X(100),this.toasts=[],this.people.next(JSON.parse(localStorage.getItem("people")||"[]")),this.targetNrOfYears.next(JSON.parse(localStorage.getItem("targetNrOfYears")||"100")),this.startResultAdjusting()}getPeopleListener(){return this.people.pipe((0,Z.U)(t=>t.map(o=>(o.dateOfBirth=new Date(o.dateOfBirth),o))),(0,Z.U)(t=>t.sort((o,i)=>o.dateOfBirth.getTime()-i.dateOfBirth.getTime())))}getResultListener(){return this.result.asObservable()}getTargetNrOfYearListener(){return this.targetNrOfYears.asObservable()}addAPerson(t){return(0,f.mG)(this,void 0,void 0,function*(){if(this.people){const o=this.people.getValue();if(o){const i=o;i.push(t),localStorage.setItem("people",JSON.stringify(i)),this.people.next(i),this.modalController.dismiss(),yield this.showAToast("The person was successfully added",!0,"bottom")}}})}editAPerson(t,o){return(0,f.mG)(this,void 0,void 0,function*(){const i=this.people.getValue();if(i){const s=i.filter(l=>l._id!==t._id);s.push(o),localStorage.setItem("people",JSON.stringify(s)),this.people.next(s),yield this.showAToast("XYZ name successfully updated",!0,"bottom",{name:o.name})}})}dismissAllToasts(){this.toasts.forEach(t=>t.dismiss())}showAToast(t,o=!0,i,s){return(0,f.mG)(this,void 0,void 0,function*(){this.dismissAllToasts();const l="bottom"===i?"toast-push-up":"toast-push-down";this.translateService.get(t,{params:s}).subscribe(p=>(0,f.mG)(this,void 0,void 0,function*(){const u=yield this.toastController.create({message:p,duration:2e3,position:i,cssClass:o?l:"",color:"success"});this.toasts.push(u),yield u.present()}))})}removeAPerson(t){const o=this.people.getValue();if(o){const i=o.filter(s=>s._id!==t._id);localStorage.setItem("people",JSON.stringify(i)),this.people.next(i)}}setTargetYear(t){if(t<1)return this.targetNrOfYears.next(0),void this.result.next(void 0);localStorage.setItem("targetNrOfYears",t.toString()),this.targetNrOfYears.next(t)}startResultAdjusting(){(0,O.a)([this.getTargetNrOfYearListener(),this.getPeopleListener()]).subscribe(([t,o])=>(0,f.mG)(this,void 0,void 0,function*(){if(t<1||!o||!o.length)return this.result.next(void 0),void this.dismissAllToasts();o.sort((u,g)=>u.dateOfBirth.getTime()-g.dateOfBirth.getTime());const i=this.getPeopleSortedBasedOnWhenTheyAreBorn(o),s=i.findIndex(u=>u.name===o[0].name);let l=o[0].dateOfBirth.getFullYear(),p=0;i.forEach(u=>{u.currentAge=0});for(let u=s;p!==t;u++){u===i.length&&(u=0,l++);const g=i[u],A=new Date(g.dateOfBirth);A.setFullYear(l);const x=C(g.dateOfBirth,A);if(g.currentAge=x,!(x<0)&&(0===x&&(g.currentAge=0),p=i.reduce((_,T)=>!T.currentAge||T.currentAge<0?_:_+T.currentAge,0),p===t)){const _=new Date(i[u].dateOfBirth);_.setHours(0,0,0,0),_.setFullYear(l),this.result.next(_)}}}))}getPeopleSortedBasedOnWhenTheyAreBorn(t){return t.slice().sort((o,i)=>{const s=new Date(o.dateOfBirth),l=new Date(i.dateOfBirth);return s.setFullYear(0),l.setFullYear(0),s.getTime()-l.getTime()})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(a.yF),e.LFG(h.sK),e.LFG(a.IN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const C=(n,r)=>{const t=new Date(n);let o=r.getFullYear()-t.getFullYear();const i=r.getMonth()-t.getMonth();return(i<0||0===i&&r.getDate()<t.getDate())&&o--,o};function I(n,r){if(1&n&&(e.TgZ(0,"ion-select-option",9),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t),e.xp6(1),e.Oqu(t)}}function S(n,r){if(1&n&&(e.TgZ(0,"ion-select-option",9),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",r.index),e.xp6(1),e.Oqu(e.lcZ(2,2,t))}}function J(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",10),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.cancel())}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"Cancel")))}let L=(()=>{class n{constructor(t,o){this.peopleService=t,this.modalController=o,this.months=["January","February","March","April","May","June","July","August","September","October","November","December"],this.dayOptions=this.createAnArrayFromNrOfDays(31);const i=new c.NI(null,[c.kI.required,c.kI.min(0),c.kI.max(11)]),s=new c.NI(null,[c.kI.required,c.kI.min(1),c.kI.max(5e3)]);(0,O.a)([s.valueChanges,i.valueChanges]).subscribe(([l,p])=>{if(p&&l){const u=this.form.controls.dayOfBirth;u.value>28&&u.setValue(null),this.dayOptions=this.createAnArrayFromNrOfDays(((n,r)=>new Date(n,r+1,0).getDate())(l,p))}else this.dayOptions=this.createAnArrayFromNrOfDays(31)}),this.form=new c.cw({name:new c.NI("",c.kI.required),dayOfBirth:new c.NI(void 0,[c.kI.required,c.kI.min(1),c.kI.max(31)]),monthOfBirth:i,yearOfBirth:s})}ngOnInit(){if(this.person){const t=this.person.dateOfBirth;this.form.setValue({name:this.person.name,dayOfBirth:t.getDate(),monthOfBirth:t.getMonth(),yearOfBirth:t.getFullYear()})}}savePerson(){return(0,f.mG)(this,void 0,void 0,function*(){const{name:t,dayOfBirth:o,monthOfBirth:i,yearOfBirth:s}=this.form.getRawValue(),l=new Date;l.setDate(o),l.setMonth(i),l.setFullYear(s),this.person?yield this.editAPerson(this.person,Object.assign(Object.assign({},this.person),{name:t,dateOfBirth:l})):(this.peopleService.addAPerson({_id:Math.round(58976421341312*Math.random()),name:t,dateOfBirth:l}),this.form.reset())})}editAPerson(t,o){return(0,f.mG)(this,void 0,void 0,function*(){yield this.peopleService.editAPerson(t,o),yield this.modalController.dismiss(void 0,"submit"),this.form.reset()})}cancel(){this.modalController.dismiss(void 0,"cancel")}createAnArrayFromNrOfDays(t){return Array.from({length:t}).map((o,i)=>i+1)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(P),e.Y36(a.IN))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit-person"]],inputs:{person:"person"},decls:32,vars:33,consts:[[3,"formGroup"],["position","stacked"],["formControlName","name",3,"placeholder"],["formControlName","dayOfBirth",3,"placeholder"],[3,"value",4,"ngFor","ngForOf"],["formControlName","monthOfBirth",3,"placeholder"],["min","0","type","number","formControlName","yearOfBirth",3,"max","placeholder"],["expand","full","shape","round",1,"ion-margin-horizontal",3,"disabled","click"],["expand","full","class","ion-margin-horizontal ion-margin-top","color","danger","fill","outline","shape","round",3,"click",4,"ngIf"],[3,"value"],["expand","full","color","danger","fill","outline","shape","round",1,"ion-margin-horizontal","ion-margin-top",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"ion-list")(1,"form",0)(2,"ion-item")(3,"ion-label",1),e._uU(4),e.ALo(5,"translate"),e.qZA(),e._UZ(6,"ion-input",2),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"ion-item")(9,"ion-label",1),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"ion-select",3),e.ALo(13,"translate"),e.YNc(14,I,2,2,"ion-select-option",4),e.qZA()(),e.TgZ(15,"ion-item")(16,"ion-label",1),e._uU(17),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"ion-select",5),e.ALo(20,"translate"),e.YNc(21,S,3,4,"ion-select-option",4),e.qZA()(),e.TgZ(22,"ion-item")(23,"ion-label",1),e._uU(24),e.ALo(25,"translate"),e.qZA(),e._UZ(26,"ion-input",6),e.ALo(27,"translate"),e.qZA(),e.TgZ(28,"ion-button",7),e.NdJ("click",function(){return o.savePerson()}),e._uU(29),e.ALo(30,"translate"),e.qZA(),e.YNc(31,J,3,3,"ion-button",8),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("formGroup",o.form),e.xp6(3),e.Oqu(e.lcZ(5,15,"Name")),e.xp6(2),e.Q6J("placeholder",e.lcZ(7,17,"Your relatives/friends/colleagues name goes here")),e.xp6(4),e.Oqu(e.lcZ(11,19,"Day")),e.xp6(2),e.Q6J("placeholder",e.lcZ(13,21,"What day was this person born")),e.xp6(2),e.Q6J("ngForOf",o.dayOptions),e.xp6(3),e.Oqu(e.lcZ(18,23,"Month")),e.xp6(2),e.Q6J("placeholder",e.lcZ(20,25,"What month was this person born")),e.xp6(2),e.Q6J("ngForOf",o.months),e.xp6(3),e.Oqu(e.lcZ(25,27,"Year")),e.xp6(2),e.Q6J("max",5e3)("placeholder",e.lcZ(27,29,"What year was this person born")),e.xp6(2),e.Q6J("disabled",o.form.invalid),e.xp6(1),e.Oqu(e.lcZ(30,31,o.person?"Save":"Add someones birthday")),e.xp6(2),e.Q6J("ngIf",o.person))},dependencies:[d.sg,d.O5,c._Y,c.JJ,c.JL,a.YG,a.pK,a.Ie,a.Q$,a.q_,a.t9,a.n0,a.as,a.QI,a.j9,c.sg,c.u,h.X$]}),n})(),B=(()=>{class n{constructor(t){this.translateService=t}switchLanguage(t){localStorage.setItem("language",t),this.translateService.use(t)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(h.sK))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function F(n,r){if(1&n&&(e.TgZ(0,"ion-select-option",3),e._uU(1),e.qZA()),2&n){const t=r.$implicit;e.Q6J("value",t.fileName),e.xp6(1),e.Oqu(t.name)}}let w=(()=>{class n{constructor(t,o){this.settingsService=t,this.translateService=o,this.languages=[{name:"\u010ce\u0161tina",fileName:"cz",flag:"\u{1f1e8}\u{1f1ff}"},{name:"English",fileName:"en",flag:"\u{1f1ec}\u{1f1e7}"}],this.currentLang=new c.NI(this.translateService.defaultLang)}ngOnInit(){this.currentLang.valueChanges.subscribe(t=>{t&&this.settingsService.switchLanguage(t)}),this.translateService.onLangChange.subscribe(t=>{this.currentLang.setValue(t.lang)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(B),e.Y36(h.sK))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-language-selector"]],decls:3,vars:2,consts:[[1,"language-selector"],[1,"ion-padding",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"ion-select",1),e.YNc(2,F,2,2,"ion-select-option",2),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("formControl",o.currentLang),e.xp6(1),e.Q6J("ngForOf",o.languages))},dependencies:[d.sg,c.JJ,a.t9,a.n0,a.QI,c.oH],styles:[".language-selector[_ngcontent-%COMP%]{margin:auto;max-width:150px}.language-selector[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:x-small}"]}),n})();function k(n,r){if(1&n&&e._UZ(0,"ion-icon",6),2&n){const t=e.oxw(2);e.Q6J("name",t.message.headerIconName)}}function q(n,r){1&n&&e._UZ(0,"app-language-selector")}function E(n,r){if(1&n&&e._UZ(0,"ion-icon",10),2&n){const t=e.oxw().$implicit;e.Q6J("name",t.iconName)}}function U(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"ion-button",8),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.KtG(s.callback())}),e.ALo(1,"translate"),e.YNc(2,E,1,1,"ion-icon",9),e._uU(3),e.ALo(4,"translate"),e.qZA()}if(2&n){const t=r.$implicit;e.Q6J("title",e.lcZ(1,3,t.actionText)),e.xp6(2),e.Q6J("ngIf",t.iconName),e.xp6(1),e.hij(" ",e.lcZ(4,5,t.actionText)," ")}}function H(n,r){if(1&n&&(e.TgZ(0,"ion-buttons"),e.YNc(1,U,5,7,"ion-button",7),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",t.message.actions)}}function Q(n,r){if(1&n&&(e.TgZ(0,"div",1),e.YNc(1,k,1,1,"ion-icon",2),e.YNc(2,q,1,0,"app-language-selector",3),e.TgZ(3,"ion-text",4)(4,"strong"),e._uU(5),e.ALo(6,"translate"),e.qZA()(),e.TgZ(7,"p",5),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.YNc(10,H,2,1,"ion-buttons",3),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.message.headerIconName),e.xp6(1),e.Q6J("ngIf",t.showLanguageSelector),e.xp6(3),e.Oqu(e.lcZ(6,5,t.message.header)),e.xp6(3),e.hij(" ",e.lcZ(9,7,t.message.text)," "),e.xp6(2),e.Q6J("ngIf",t.message.actions)}}let D=(()=>{class n{constructor(){this.showLanguageSelector=!1}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-error-message"]],inputs:{message:"message",showLanguageSelector:"showLanguageSelector"},decls:1,vars:1,consts:[["class","error-container",4,"ngIf"],[1,"error-container"],["class","header-icon","color","primary",3,"name",4,"ngIf"],[4,"ngIf"],["color","dark"],[1,"ion-padding"],["color","primary",1,"header-icon",3,"name"],["fill","clear","color","primary","strong","true","shape","round",3,"title","click",4,"ngFor","ngForOf"],["fill","clear","color","primary","strong","true","shape","round",3,"title","click"],["slot","start",3,"name",4,"ngIf"],["slot","start",3,"name"]],template:function(t,o){1&t&&e.YNc(0,Q,11,9,"div",0),2&t&&e.Q6J("ngIf",o.message)},dependencies:[d.sg,d.O5,a.YG,a.Sm,a.gu,a.yW,w,h.X$],styles:[".error-container[_ngcontent-%COMP%]{text-align:center;position:absolute;padding:8px;left:0;right:0;top:50%;transform:translateY(-50%)}.error-container[_ngcontent-%COMP%]   ion-icon.header-icon[_ngcontent-%COMP%]{display:block;font-size:85px;width:100%;margin-bottom:20px}.error-container[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]{display:block;align-items:center}.error-container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px}.error-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:30px;color:#8c8c8c;margin:0;max-height:50vh;overflow:auto}.error-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),n})();const G=function(n,r){return{date:n,targetNrOfYears:r}};function j(n,r){if(1&n&&(e.TgZ(0,"ion-item",10),e._uU(1),e.ALo(2,"translate"),e.ALo(3,"date"),e.qZA()),2&n){const t=e.oxw(2);e.xp6(1),e.hij(" ",e.xi3(2,1,t.resultIsBeforeToday?"These people were x on the y":"You will be x on the y",e.WLB(7,G,e.xi3(3,4,t.result,"dd. MM. YYYY"),t.targetNrOfYears))," ")}}const $=function(n){return{years:n}};function R(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"ion-header",4)(1,"ion-toolbar")(2,"div",5)(3,"ion-button",6),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.addToTargetYear(-50))}),e._uU(4,"-"),e.qZA(),e.TgZ(5,"ion-text",7),e._uU(6),e.ALo(7,"translate"),e.qZA(),e.TgZ(8,"ion-button",8),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.addToTargetYear(50))}),e._uU(9,"+"),e.qZA()()(),e.YNc(10,j,4,10,"ion-item",9),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("translucent",!0),e.xp6(6),e.Oqu(e.xi3(7,3,"When are all these people going to be x years old",e.VKq(6,$,t.targetNrOfYears))+"?"),e.xp6(4),e.Q6J("ngIf",t.result)}}function z(n,r){1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"They were not born yet")))}function K(n,r){if(1&n&&(e.TgZ(0,"span"),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&n){const t=e.oxw(2).$implicit,o=e.oxw(2);e.xp6(1),e.Oqu(e.lcZ(2,1,o.resultIsBeforeToday?"This day they were":"This day they will be")+": "+t.ageAtResult)}}function X(n,r){if(1&n&&(e.TgZ(0,"p"),e.YNc(1,z,3,3,"span",13),e.YNc(2,K,3,3,"span",13),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Q6J("ngIf",t.ageAtResult<0),e.xp6(1),e.Q6J("ngIf",t.ageAtResult>=0)}}function W(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"ion-item",12),e.NdJ("click",function(i){const l=e.CHM(t).$implicit,p=e.oxw(2);return e.KtG(p.openEditModal(l,i))}),e.TgZ(1,"ion-label")(2,"h3"),e._uU(3),e.qZA(),e.TgZ(4,"p"),e._uU(5),e.ALo(6,"translate"),e.ALo(7,"date"),e.qZA(),e.YNc(8,X,3,2,"p",13),e.qZA(),e.TgZ(9,"ion-button",14),e.NdJ("click",function(i){const l=e.CHM(t).$implicit,p=e.oxw(2);return e.KtG(p.openEditModal(l,i))}),e._UZ(10,"ion-icon",15),e.qZA(),e.TgZ(11,"ion-button",14),e.NdJ("click",function(i){const l=e.CHM(t).$implicit,p=e.oxw(2);return e.KtG(p.removeAPerson(l,i))}),e._UZ(12,"ion-icon",16),e.qZA()()}if(2&n){const t=r.$implicit;e.xp6(3),e.Oqu(t.name),e.xp6(2),e.hij(" ",e.lcZ(6,3,"Birthday")+": "+e.xi3(7,5,t.dateOfBirth,"dd. MM. YYYY")," "),e.xp6(3),e.Q6J("ngIf",void 0!==t.ageAtResult)}}function V(n,r){if(1&n&&(e.TgZ(0,"ion-list"),e.YNc(1,W,13,8,"ion-item",11),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.people)}}function ee(n,r){if(1&n&&e._UZ(0,"app-error-message",17),2&n){const t=e.oxw();e.Q6J("message",t.message)("showLanguageSelector",!0)}}function te(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"ion-footer",18)(1,"div",19)(2,"ion-button",20),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.openEditModal())}),e._uU(3),e.ALo(4,"translate"),e._UZ(5,"ion-icon",21),e.qZA(),e._UZ(6,"app-language-selector"),e.qZA()()}2&n&&(e.xp6(3),e.hij("",e.lcZ(4,1,"Add someones birthday")," "))}const ne=[{path:"",component:(()=>{class n{constructor(t,o){this.modalController=t,this.peopleService=o,this.targetNrOfYears=100,this.message={text:"Intro",header:"Common birthday calculator",actions:[{callback:()=>(0,f.mG)(this,void 0,void 0,function*(){yield this.openEditModal()}),actionText:"Add someones birthday"}]},this.subscriptions=[]}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}ngOnInit(){this.subscriptions.push((0,O.a)([this.peopleService.getResultListener(),this.peopleService.getTargetNrOfYearListener(),this.peopleService.getPeopleListener()]).subscribe(([t,o,i])=>{this.result=t,this.targetNrOfYears=o,this.people=null==i?void 0:i.map(s=>(t&&(this.resultIsBeforeToday=(n=>{const r=new Date;return r.setHours(0,0,0,0),n.getTime()<r.getTime()})(t),s.ageAtResult=C(s.dateOfBirth,t)),s))}))}openEditModal(t,o){return(0,f.mG)(this,void 0,void 0,function*(){o&&o.stopPropagation(),yield(yield this.modalController.create({component:L,componentProps:{person:t},initialBreakpoint:.75,breakpoints:[.75],backdropDismiss:!0,backdropBreakpoint:.25})).present()})}removeAPerson(t,o){o.stopPropagation(),this.peopleService.removeAPerson(t)}addToTargetYear(t){this.peopleService.setTargetYear(this.targetNrOfYears+t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.IN),e.Y36(P))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:6,vars:4,consts:[[3,"translucent",4,"ngIf"],[4,"ngIf","ngIfElse"],["empty",""],["class","ion-no-margin ion-no-padding",4,"ngIf"],[3,"translucent"],[1,"ion-margin","year-selector-container"],["shape","round","fill","outline",1,"minus",3,"click"],[1,"ion-padding-horizontal"],["shape","round",1,"plus",3,"click"],["color","light",4,"ngIf"],["color","light"],["button","true",3,"click",4,"ngFor","ngForOf"],["button","true",3,"click"],[4,"ngIf"],["fill","outline",3,"click"],["name","pencil"],["name","trash"],[3,"message","showLanguageSelector"],[1,"ion-no-margin","ion-no-padding"],[1,"bottom-panel"],["expand","full","fill","clear",1,"ion-margin",3,"click"],["name","add"]],template:function(t,o){if(1&t&&(e.YNc(0,R,11,8,"ion-header",0),e.TgZ(1,"ion-content"),e.YNc(2,V,2,1,"ion-list",1),e.YNc(3,ee,1,2,"ng-template",null,2,e.W1O),e.qZA(),e.YNc(5,te,7,3,"ion-footer",3)),2&t){const i=e.MAs(4);e.Q6J("ngIf",!(null==o.people||!o.people.length)),e.xp6(2),e.Q6J("ngIf",null==o.people?null:o.people.length)("ngIfElse",i),e.xp6(3),e.Q6J("ngIf",o.result)}},dependencies:[d.sg,d.O5,a.YG,a.W2,a.fr,a.Gu,a.gu,a.Ie,a.Q$,a.q_,a.yW,a.sr,D,w,d.uU,h.X$],styles:[".year-selector-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.year-selector-container[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{display:flex;align-items:center}.bottom-panel[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}"]}),n})()}];let oe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[b.Bz.forChild(ne),b.Bz]}),n})(),N=(()=>{class n{constructor(t,o){this.changeDetectorRef=t,this.ngZone=o}transform(t){this.removeTimer();let o=new Date(t),i=new Date,s=Math.round(Math.abs((i.getTime()-o.getTime())/1e3)),l=Number.isNaN(s)?1e3:1e3*this.getSecondsUntilUpdate(s);this.timer=this.ngZone.runOutsideAngular(()=>typeof window<"u"?window.setTimeout(()=>{this.ngZone.run(()=>this.changeDetectorRef.markForCheck())},l):null);let p=Math.round(Math.abs(s/60)),u=Math.round(Math.abs(p/60)),g=Math.round(Math.abs(u/24)),A=Math.round(Math.abs(g/30.416)),x=Math.round(Math.abs(g/365));return Number.isNaN(s)?"":s<=45?"a few seconds ago":s<=90?"a minute ago":p<=45?p+" minutes ago":p<=90?"an hour ago":u<=22?u+" hours ago":u<=36?"a day ago":g<=25?g+" days ago":g<=45?"a month ago":g<=345?A+" months ago":g<=545?"a year ago":x+" years ago"}ngOnDestroy(){this.removeTimer()}removeTimer(){this.timer&&(window.clearTimeout(this.timer),this.timer=null)}getSecondsUntilUpdate(t){return t<60?2:t<3600?30:t<86400?300:3600}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(e.sBO,16),e.Y36(e.R0b,16))},n.\u0275pipe=e.Yjl({name:"timeAgo",type:n,pure:!1}),n})(),ie=(()=>{class n extends N{}return n.\u0275fac=function(){let r;return function(o){return(r||(r=e.n5z(n)))(o||n)}}(),n.\u0275pipe=e.Yjl({name:"timeAgo",type:n,pure:!1}),n})(),re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[N],imports:[d.ez,c.u5,a.Pc,oe,c.UX,h.aw]}),n})()}}]);