(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],u=0,m=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0255":function(t,e,a){},"0cf0":function(t,e,a){},"19fd":function(t,e,a){},"1b10":function(t,e,a){"use strict";var n=a("0cf0"),s=a.n(n);s.a},4678:function(t,e,a){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(t){var e=o(t);return a(e)}function o(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=o,t.exports=s,s.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],i={name:"app"},r=i,c=a("2877"),l=Object(c["a"])(r,s,o,!1,null,null,null),d=l.exports,u=(a("a4d3"),a("e01a"),a("2f62"));n["a"].use(u["a"]);var m=new u["a"].Store({state:{cities:[],origin:null,destination:null,departDate:null,returnDate:null,perDiem:{dailyRate:0},other:[{item:"",cost:""}],noteToApprover:"",acrdResponse:"",estimate:{accommodation:{selected:!1,amount:0,type:"Hotel"},mealsAndIncidentals:{selected:!1,amount:0,type:""},transportation:{selected:!1,amount:0},groundTransportation:{selected:!1,amount:0},other:{selected:!1,amount:0,description:""}},training:!1,conference:!1,calculatedTotal:"-:--",mealsAndIncidentals:{YT:{breakfast:22.75,lunch:20.9,dinner:60.25,incidentals:17.3},TN:{breakfast:24.15,lunch:29.3,dinner:62.7,incidentals:17.3},NU:{breakfast:27.35,lunch:33.2,dinner:88.45,incidentals:17.3},CAN:{breakfast:20.35,lunch:20.6,dinner:50.55,incidentals:17.3}}},mutations:{updateOrigin:function(t,e){t.origin=e},updateDestination:function(t,e){t.destination=e},updateDepartDate:function(t,e){t.departDate=e},updateReturnDate:function(t,e){t.returnDate=e},updateCity:function(t,e){t.cities=e},updateAcrdResponse:function(t,e){t.acrdResponse=e},updateTraining:function(t,e){t.training=e},updateConference:function(t,e){t.conference=e},updateAccommodationSelected:function(t,e){t.estimate.accommodation.selected=e},updateMealsAndIncidentalsSelected:function(t,e){t.estimate.mealsAndIncidentals.selected=e},updateTransportationSelected:function(t,e){t.estimate.transportation.selected=e},updateGroundTransportationSelected:function(t,e){t.estimate.groundTransportation.selected=e},updateOtherSelected:function(t,e){t.estimate.other.selected=e},updateOtherDescription:function(t,e){t.estimate.other.description=e},updateOtherAmount:function(t,e){t.estimate.other.amount=e},updateAccommodationAmount:function(t,e){t.estimate.accommodation.amount=e},updateMealsAndIncidentalsAmount:function(t,e){t.estimate.mealsAndIncidentals.amount=e},updateTransportationAmount:function(t,e){t.estimate.transportation.amount=e},updateGroundTransportationAmount:function(t,e){t.estimate.groundTransportation.amount=e},updateAccommodationType:function(t,e){t.estimate.accommodation.type=e},updateMealsAndIncidentalsType:function(t,e){t.estimate.mealsAndIncidentals.type=e},updateCalculatedTotal:function(t,e){t.calculatedTotal=e},updateAccommodationTotal:function(t,e){t.accommodationTotal=e}},actions:{}}),p=a("859b"),f=a.n(p),h=(a("d355"),a("95bf")),v=(a("0255"),a("e011"),a("19fd"),a("8c4f")),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("br"),a("h2",[t._v(t._s(t.origin.slice(0,-3))+" to "+t._s(t.destination.slice(0,-3))+", "+t._s(t.moment(t.departDate).format("MMM D"))+" - "+t._s(t.moment(t.returnDate).format("D, YYYY")))]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-8"},[a("div",{staticClass:"card mb-2"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px","align-items":"center"}},[a("div",{staticClass:"col-sm-5"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.accommodationSelected,expression:"accommodationSelected"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.accommodationSelected)?t._i(t.accommodationSelected,null)>-1:t.accommodationSelected},on:{change:function(e){var a=t.accommodationSelected,n=e.target,s=!!n.checked;if(Array.isArray(a)){var o=null,i=t._i(a,o);n.checked?i<0&&(t.accommodationSelected=a.concat([o])):i>-1&&(t.accommodationSelected=a.slice(0,i).concat(a.slice(i+1)))}else t.accommodationSelected=s}}}),a("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Accommodations")])])]),a("div",{staticClass:"col-sm-5"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.accommodationType,expression:"accommodationType"}],staticClass:"form-control",attrs:{id:"inputState"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.accommodationType=e.target.multiple?a:a[0]}}},[a("option",{attrs:{selected:""}},[t._v("Hotel")]),a("option",[t._v("AirBnb")]),a("option",[t._v("Bed & Breakfast")]),a("option",[t._v("Other")])])]),a("div",{staticClass:"col-sm-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.accommodationAmount,expression:"accommodationAmount"}],staticClass:"form-control",domProps:{value:t.accommodationAmount},on:{blur:t.accommodationSelectHandler,input:function(e){e.target.composing||(t.accommodationAmount=e.target.value)}}})])]),a("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px","align-items":"center"}},[a("div",{staticClass:"col-sm-5"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.mealsAndIncidentalsSelected,expression:"mealsAndIncidentalsSelected"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.mealsAndIncidentalsSelected)?t._i(t.mealsAndIncidentalsSelected,null)>-1:t.mealsAndIncidentalsSelected},on:{change:function(e){var a=t.mealsAndIncidentalsSelected,n=e.target,s=!!n.checked;if(Array.isArray(a)){var o=null,i=t._i(a,o);n.checked?i<0&&(t.mealsAndIncidentalsSelected=a.concat([o])):i>-1&&(t.mealsAndIncidentalsSelected=a.slice(0,i).concat(a.slice(i+1)))}else t.mealsAndIncidentalsSelected=s}}}),a("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Meals and Incidentals")])])]),t._m(0),a("div",{staticClass:"col-sm-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.mealsAndIncidentalsAmount,expression:"mealsAndIncidentalsAmount"}],staticClass:"form-control",domProps:{value:t.mealsAndIncidentalsAmount},on:{blur:t.mealsAndIncidentalsSelectHandler,input:function(e){e.target.composing||(t.mealsAndIncidentalsAmount=e.target.value)}}})])]),a("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px","align-items":"center"}},[a("div",{staticClass:"col-sm-5"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.transportationSelected,expression:"transportationSelected"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.transportationSelected)?t._i(t.transportationSelected,null)>-1:t.transportationSelected},on:{change:function(e){var a=t.transportationSelected,n=e.target,s=!!n.checked;if(Array.isArray(a)){var o=null,i=t._i(a,o);n.checked?i<0&&(t.transportationSelected=a.concat([o])):i>-1&&(t.transportationSelected=a.slice(0,i).concat(a.slice(i+1)))}else t.transportationSelected=s}}}),a("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Transportation (Flight, Rail)")])])]),a("div",{staticClass:"col-sm-5"}),a("div",{staticClass:"col-sm-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.transportationAmount,expression:"transportationAmount"}],staticClass:"form-control",domProps:{value:t.transportationAmount},on:{blur:t.transportationSelectHandler,input:function(e){e.target.composing||(t.transportationAmount=e.target.value)}}})])]),a("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px","align-items":"center"}},[a("div",{staticClass:"col-sm-10"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.groundTransportationSelected,expression:"groundTransportationSelected"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.groundTransportationSelected)?t._i(t.groundTransportationSelected,null)>-1:t.groundTransportationSelected},on:{change:function(e){var a=t.groundTransportationSelected,n=e.target,s=!!n.checked;if(Array.isArray(a)){var o=null,i=t._i(a,o);n.checked?i<0&&(t.groundTransportationSelected=a.concat([o])):i>-1&&(t.groundTransportationSelected=a.slice(0,i).concat(a.slice(i+1)))}else t.groundTransportationSelected=s}}}),a("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Ground Transportation (Taxi, Bus, Personal Mileage)")])])]),a("div",{staticClass:"col-sm-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.groundTransportationAmount,expression:"groundTransportationAmount"}],staticClass:"form-control",domProps:{value:t.groundTransportationAmount},on:{blur:t.groundTransportationSelectHandler,input:function(e){e.target.composing||(t.groundTransportationAmount=e.target.value)}}})])]),a("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px","align-items":"center"}},[a("div",{staticClass:"col-sm-5"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.otherSelected,expression:"otherSelected"}],staticClass:"form-check-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.otherSelected)?t._i(t.otherSelected,null)>-1:t.otherSelected},on:{change:function(e){var a=t.otherSelected,n=e.target,s=!!n.checked;if(Array.isArray(a)){var o=null,i=t._i(a,o);n.checked?i<0&&(t.otherSelected=a.concat([o])):i>-1&&(t.otherSelected=a.slice(0,i).concat(a.slice(i+1)))}else t.otherSelected=s}}}),a("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Other")]),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("not included in estimate")])])]),a("div",{staticClass:"col-sm-5"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.otherDescription,expression:"otherDescription"}],staticClass:"form-control",attrs:{placeholder:"Enter description"},domProps:{value:t.otherDescription},on:{input:function(e){e.target.composing||(t.otherDescription=e.target.value)}}})]),a("div",{staticClass:"col-sm-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.otherAmount,expression:"otherAmount"}],staticClass:"form-control",domProps:{value:t.otherAmount},on:{blur:t.otherSelectHandler,input:function(e){e.target.composing||(t.otherAmount=e.target.value)}}})])]),a("hr"),a("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px","align-items":"center"}},[a("div",{staticClass:"col-sm-12"},[a("button",{staticClass:"btn btn-primary",staticStyle:{float:"right"},on:{click:function(e){return t.calculate()}}},[t._v("Calculate")])])]),a("div",{staticClass:"row",staticStyle:{"margin-bottom":"15px","align-items":"center"}},[a("div",{staticClass:"col-sm-12"},[a("p",{staticStyle:{float:"right"}},[t._v("$"+t._s(t.calculatedTotal))])])])])])]),t._m(1)])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-5"},[a("a",{attrs:{href:"#"}},[t._v("Select meals to include")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-4"},[a("h5",[t._v("How did we get these numbers?")]),a("p",[t._v("City rate limits are outlined in the "),a("a",{attrs:{href:"#"}},[t._v("Accommodation and Car Rental Directory")])]),a("p",[t._v("Non-commercial accommodation, meals and incidental allowances are outlined in the "),a("a",{attrs:{href:"#"}},[t._v("National Joint Council Travel Directive - Appendix C")])])])}],j=(a("fb6a"),a("acd8"),a("ac1f"),a("5319"),a("c1df")),A=a.n(j),S={name:"Calculator",mounted:function(){this.setAccommodationTotal(),this.setMealsIncidentalsTotal(),this.accommodationSelectHandler(),this.mealsAndIncidentalsSelectHandler()},data:function(){return{moment:A.a}},methods:{calculate:function(){var t=parseFloat(this.accommodationAmount)+parseFloat(this.mealsAndIncidentalsAmount)+parseFloat(this.transportationAmount)+parseFloat(this.groundTransportationAmount)+parseFloat(this.otherAmount);this.calculatedTotal=t},setAccommodationTotal:function(){var t=this.acrdRate[this.travelMonth],e=A()(this.departDate),a=A()(this.returnDate),n=a.diff(e,"days");this.accommodationAmount=parseFloat(t.replace(/\$/g,""))*n},setMealsIncidentalsTotal:function(){var t=this.destination.slice(-2),e=0,a=0,n=0,s=0;"YT"===t||"TN"===t||"NU"===t?(e=this.mealsAndIncidentals[t].breakfast,a=this.mealsAndIncidentals[t].lunch,n=this.mealsAndIncidentals[t].dinner,s=this.mealsAndIncidentals[t].lunch):(e=this.mealsAndIncidentals["CAN"].breakfast,a=this.mealsAndIncidentals["CAN"].lunch,n=this.mealsAndIncidentals["CAN"].dinner,s=this.mealsAndIncidentals["CAN"].lunch);var o=A()(this.departDate),i=A()(this.returnDate),r=i.diff(o,"days");this.mealsAndIncidentalsAmount=(e+a+n+s)*r},accommodationSelectHandler:function(){this.accommodationAmount>0?this.accommodationSelected=!0:this.accommodationSelected=!1},transportationSelectHandler:function(){this.transportationAmount>0?this.transportationSelected=!0:this.transportationSelected=!1},mealsAndIncidentalsSelectHandler:function(){this.mealsAndIncidentalsAmount>0?this.mealsAndIncidentalsSelected=!0:this.mealsAndIncidentalsSelected=!1},groundTransportationSelectHandler:function(){this.groundTransportationAmount>0?this.groundTransportationSelected=!0:this.groundTransportationSelected=!1},otherSelectHandler:function(){this.otherAmount>0?this.otherSelected=!0:this.otherSelected=!1}},computed:{travelMonth:function(){return A()(this.$store.state.departDate).subtract(1,"month").startOf("month").format("MMMM")},acrdRate:function(){return this.$store.state.acrdResponse},mealsAndIncidentals:function(){return this.$store.state.mealsAndIncidentals},perDiem:function(){return this.$store.state.perDiem},origin:function(){return this.$store.state.origin},destination:function(){return this.$store.state.destination},departDate:function(){return this.$store.state.departDate},returnDate:function(){return this.$store.state.returnDate},acrdResponse:function(){return this.$store.state.acrdResponse},accommodationSelected:{get:function(){return this.$store.state.estimate.accommodation.selected},set:function(t){this.$store.commit("updateAccommodationSelected",t)}},mealsAndIncidentalsSelected:{get:function(){return this.$store.state.estimate.mealsAndIncidentals.selected},set:function(t){this.$store.commit("updateMealsAndIncidentalsSelected",t)}},transportationSelected:{get:function(){return this.$store.state.estimate.transportation.selected},set:function(t){this.$store.commit("updateTransportationSelected",t)}},groundTransportationSelected:{get:function(){return this.$store.state.estimate.groundTransportation.selected},set:function(t){this.$store.commit("updateGroundTransportationSelected",t)}},otherSelected:{get:function(){return this.$store.state.estimate.other.selected},set:function(t){this.$store.commit("updateOtherSelected",t)}},otherDescription:{get:function(){return this.$store.state.estimate.other.description},set:function(t){this.$store.commit("updateOtherDescription",t)}},otherAmount:{get:function(){return this.$store.state.estimate.other.amount},set:function(t){this.$store.commit("updateOtherAmount",t)}},accommodationType:{get:function(){return this.$store.state.estimate.accommodation.type},set:function(t){this.$store.commit("updateAccommodationType",t)}},accommodationAmount:{get:function(){return this.$store.state.estimate.accommodation.amount},set:function(t){this.$store.commit("updateAccommodationAmount",t)}},mealsAndIncidentalsAmount:{get:function(){return this.$store.state.estimate.mealsAndIncidentals.amount},set:function(t){this.$store.commit("updateMealsAndIncidentalsAmount",t)}},transportationAmount:{get:function(){return this.$store.state.estimate.transportation.amount},set:function(t){this.$store.commit("updateTransportationAmount",t)}},groundTransportationAmount:{get:function(){return this.$store.state.estimate.groundTransportation.amount},set:function(t){this.$store.commit("updateGroundTransportationAmount",t)}},calculatedTotal:{get:function(){return this.$store.state.calculatedTotal},set:function(t){this.$store.commit("updateCalculatedTotal",t)}},accommodationTotal:{get:function(){return this.$store.state.accommodationTotal},set:function(t){this.$store.commit("updateAccommodationTotal",t)}}}},y=S,C=Object(c["a"])(y,b,g,!1,null,"75f831e1",null),k=C.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("br"),t.loading?a("div",[a("div",{staticClass:"spinner"}),t._v(" Loading Domestic Cities ")]):a("div",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"originInput"}},[t._v("From")]),a("autocomplete",{attrs:{"aria-label":"Origin",search:t.originSearch,"get-result-value":t.getOriginValue}})],1)]),a("div",{staticClass:"col-sm-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"destinationInput"}},[t._v("To")]),a("autocomplete",{attrs:{"aria-label":"Destination",search:t.destinationSearch,"get-result-value":t.getDestinationValue}})],1)]),a("div",{staticClass:"col-sm-4"})]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"destinationInput"}},[t._v("Departing")]),a("datetime",{attrs:{"input-class":"form-control","value-zone":"local",zone:"local",auto:""},model:{value:t.departDate,callback:function(e){t.departDate=e},expression:"departDate"}})],1)]),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"destinationInput"}},[t._v("Returning")]),a("datetime",{attrs:{"input-class":"form-control","value-zone":"local",zone:"local",auto:""},model:{value:t.returnDate,callback:function(e){t.returnDate=e},expression:"returnDate"}})],1)]),a("div",{staticClass:"col-sm-8"})]),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary",on:{click:t.submitTrip}},[t._v("Create Estimate")])])])])},$=[],_=(a("4de4"),a("d3b7"),a("2ca0"),{name:"TripSelector",data:function(){return{today:A()().format("D/M/YYYY"),cityLookup:{},loading:!1,currentOriginValue:"",currentDestinationValue:""}},created:function(){this.fetchData()},methods:{submitTrip:function(){var t=this,e=this.currentDestinationValue,a=this.currentOriginValue;this.$store.commit("updateOrigin",a),this.$store.commit("updateDestination",e);var n=this.cityLookup[e.slice(0,-3)]||e,s="https://acrd-api.herokuapp.com/".concat(encodeURI(n.replace("/","sss")),"/rules");console.log(s),fetch(s).then((function(t){return t.json()})).then((function(e){t.haveResult=!0,t.$store.commit("updateAcrdResponse",e),t.$router.push({path:"calculate"})}))},fetchData:function(){var t=this;this.error=this.post=null,this.loading=!0,fetch("https://acrd-api.herokuapp.com/cities").then((function(t){return t.json()})).then((function(e){t.loading=!1,t.$store.commit("updateCity",e.citiesList),t.cityLookup=e.suburbCityList}))},originSearch:function(t){return t.length<1?[]:this.cities.filter((function(e){return e.toLowerCase().startsWith(t.toLowerCase())}))},destinationSearch:function(t){return t.length<1?[]:this.cities.filter((function(e){return e.toLowerCase().startsWith(t.toLowerCase())}))},getOriginValue:function(t){return this.currentOriginValue=t,t},getDestinationValue:function(t){return this.currentDestinationValue=t,t}},computed:{training:{get:function(){return this.$store.state.training},set:function(t){this.$store.commit("updateTraining",t)}},conference:{get:function(){return this.$store.state.conference},set:function(t){this.$store.commit("updateConference",t)}},cities:{get:function(){return this.$store.state.cities},set:function(t){this.$store.commit("updateCity",t)}},origin:{get:function(){return this.$store.state.origin},set:function(t){this.$store.commit("updateOrigin",t)}},destination:{get:function(){return this.$store.state.destination},set:function(t){this.$store.commit("updateDestination",t)}},departDate:{get:function(){return this.$store.state.departDate},set:function(t){this.$store.commit("updateDepartDate",t)}},returnDate:{get:function(){return this.$store.state.returnDate},set:function(t){this.$store.commit("updateReturnDate",t)}}}}),D=_,I=(a("1b10"),Object(c["a"])(D,T,$,!1,null,"00c5f828",null)),w=I.exports;n["a"].use(v["a"]),n["a"].use(h["a"]),n["a"].use(f.a),n["a"].use(a("c1df")),n["a"].config.productionTip=!1;var x=new v["a"]({routes:[{path:"/",component:w},{path:"/calculate",component:k}]});new n["a"]({router:x,store:m,render:function(t){return t(d)}}).$mount("#app")},e011:function(t,e,a){}});
//# sourceMappingURL=app.04d46210.js.map