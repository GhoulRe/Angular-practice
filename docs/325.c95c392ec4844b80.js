"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[325],{325:(f,p,n)=>{n.r(p),n.d(p,{FetchComponentModule:()=>o});var s=n(6895),t=n(1571),d=n(7366);function r(a,e){if(1&a&&(t.TgZ(0,"div",2)(1,"div"),t._UZ(2,"img",3),t.qZA(),t.TgZ(3,"div",4)(4,"h5"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA()()()),2&a){const i=e.$implicit;t.xp6(2),t.s9C("src",i.avatar,t.LSH),t.xp6(3),t.AsE("Name:",i.first_name," ",i.last_name,""),t.xp6(2),t.hij("Email: ",i.email,"")}}class c{constructor(e){this._apiservie=e,this.fetchApiData="apidata"}ngOnInit(){this._apiservie.getfetchdata().subscribe(e=>{this.newFetchData=e})}}c.\u0275fac=function(e){return new(e||c)(t.Y36(d.x))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-fetch-component"]],decls:2,vars:1,consts:[[1,"fetch_container","text-light","fw-bold"],["class","data-fetch-div",4,"ngFor","ngForOf"],[1,"data-fetch-div"],["alt","profile_image",1,"api_profile_image",3,"src"],[1,"api_data"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,r,8,4,"div",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",i.newFetchData.data))},dependencies:[s.sg],styles:[".fetch_container[_ngcontent-%COMP%]{width:99%;background-color:#645cbb;margin:1rem;padding:1rem;border-radius:1rem}.data-fetch-div[_ngcontent-%COMP%]{width:90%;border:1px solid white;margin:10px;padding:10px;display:flex;justify-content:space-evenly;align-items:center}.api_profile_image[_ngcontent-%COMP%]{border-radius:100%;height:100px;width:100px}"]});var m=n(646),h=n(529);const l=[{path:"",component:c}];class o{}o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,m.Bz.forChild(l),h.JF]})}}]);