"use strict";(self.webpackChunkangular=self.webpackChunkangular||[]).push([[957],{957:(C,p,e)=>{e.r(p),e.d(p,{ComponentAModule:()=>o});var d=e(6895),s=e(646),n=e(1571),u=e(1562),i=e(433);class a{constructor(t){this.dataService=t,this.inputData=""}sendData(){this.dataService.setData(this.inputData),this.inputData=""}childData(t){console.log(t)}send(){console.log(this.inputData)}}a.\u0275fac=function(t){return new(t||a)(n.Y36(u.D))},a.\u0275cmp=n.Xpm({type:a,selectors:[["app-component-a"]],decls:8,vars:1,consts:[[1,"input-div"],[1,"fw-bold","text-light"],["type","text",3,"ngModel","ngModelChange"],[1,"btn","btn-primary",3,"click"]],template:function(t,l){1&t&&(n.TgZ(0,"div",0)(1,"label",1),n._uU(2,"Name:"),n.qZA(),n._UZ(3,"br"),n.TgZ(4,"input",2),n.NdJ("ngModelChange",function(g){return l.inputData=g}),n.qZA(),n._UZ(5,"br"),n.TgZ(6,"button",3),n.NdJ("click",function(){return l.send()})("click",function(){return l.sendData()}),n._uU(7,"send"),n.qZA()()),2&t&&(n.xp6(4),n.Q6J("ngModel",l.inputData))},dependencies:[i.Fj,i.JJ,i.On],styles:["input[_ngcontent-%COMP%]{border-radius:5px}button[_ngcontent-%COMP%]{border:none}.input-div[_ngcontent-%COMP%]{max-width:100%;margin:2rem;padding:1rem;gap:0;border-radius:20px;background-color:#645cbb;display:flex;flex-direction:column;justify-content:center;align-items:center}"]});const m=[{path:"",component:a}];class o{}o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[d.ez,s.Bz.forChild(m),i.u5,s.Bz]})}}]);