(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef98f7f2"],{"4bd4":function(e,t,r){"use strict";var a=r("5530"),o=(r("caad"),r("2532"),r("07ac"),r("4de4"),r("159b"),r("7db0"),r("58df")),n=r("7e2b"),i=r("3206");t["a"]=Object(o["a"])(n["a"],Object(i["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,r=function(e){return e.$watch("hasError",(function(r){t.$set(t.errorBag,e._uid,r)}),{immediate:!0})},a={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(e._uid)||(a.valid=r(e)))})):a.valid=r(e),a},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var r=this.watchers.find((function(e){return e._uid===t._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},"9c1c":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ToolbarUsuario"),r("FormUsuario")],1)},o=[],n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-card-text",[r("v-card",[r("v-card-title",[e._v(e._s(e.rol))]),r("v-card-text",[r("v-form",{attrs:{autocomplete:"off"}},[r("v-alert",{attrs:{dense:"",color:e.color,dark:""}},[e._v(e._s(e.programa))]),r("v-text-field",{attrs:{label:"Nombres"},model:{value:e.nombres,callback:function(t){e.nombres=t},expression:"nombres"}}),r("v-text-field",{attrs:{label:"Apellidos"},model:{value:e.apellidos,callback:function(t){e.apellidos=t},expression:"apellidos"}}),r("v-text-field",{attrs:{label:"Documento"},model:{value:e.documento,callback:function(t){e.documento=t},expression:"documento"}}),r("v-text-field",{attrs:{type:"number",label:"Celular"},model:{value:e.celular,callback:function(t){e.celular=t},expression:"celular"}}),r("v-text-field",{attrs:{label:"Dirección"},model:{value:e.direccion,callback:function(t){e.direccion=t},expression:"direccion"}}),e.mostrarHabilidades?r("v-combobox",{attrs:{items:e.habilidades,"item-text":"documento",label:"Habilidades para los estudiantes practicantes","hide-selected":"","small-chips":"",dense:"",outlined:"",multiple:""},model:{value:e.habilidades,callback:function(t){e.habilidades=t},expression:"habilidades"}}):e._e(),r("v-btn",{attrs:{color:"success",block:""},on:{click:e.registrar}},[e._v(" Registrar datos ")])],1)],1)],1)],1)],1)},i=[],s=r("1da1"),c=r("5530"),l=(r("96cf"),r("1fb3")),d=r("3d20"),u=r.n(d),b=r("2f62"),m={name:"FormUsuario",data:function(){return{nombres:"",apellidos:"",documento:"",celular:"",direccion:"",programa:"",rol:"",habilidades:[],mostrarHabilidades:!1}},computed:Object(c["a"])({},Object(b["c"])(["color"])),methods:{registrar:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={nombres:e.nombres,apellidos:e.apellidos,documento:e.documento,celular:e.celular,direccion:e.direccion,habilidades:e.habilidades},t.next=3,Object(l["e"])(r).then((function(e){200===e.status&&u.a.fire("Datos actualizados","Los datos de Coordinador@ de prácticas han sido actualizados","success")}));case 3:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["c"])().then((function(t){if(t.data){e.nombres=t.data.nombres,e.apellidos=t.data.apellidos,e.documento=t.data.documento,e.celular=t.data.celular,e.direccion=t.data.direccion,e.programa=t.data.programa;var r=t.data.rol;e.rol=1===r?"Coordinador@ de prácticas":2===r?"Asesor/@ de Jurídica":"Super Admin",e.habilidades=t.data.habilidades,e.mostrarHabilidades=1===r}}));case 2:case"end":return t.stop()}}),t)})))()}},f=m,h=r("2877"),v=r("6544"),p=r.n(v),k=r("0798"),_=r("8336"),g=r("b0af"),x=r("99d9"),V=r("2b5d"),w=r("a523"),O=r("4bd4"),j=r("8654"),C=Object(h["a"])(f,n,i,!1,null,"e5eb55e0",null),B=C.exports;p()(C,{VAlert:k["a"],VBtn:_["a"],VCard:g["a"],VCardText:x["c"],VCardTitle:x["d"],VCombobox:V["a"],VContainer:w["a"],VForm:O["a"],VTextField:j["a"]});var y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{color:e.color}},[r("v-card-text",[r("router-link",{attrs:{to:"dashboard",custom:""},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.navigate;return[r("v-btn",{attrs:{icon:"",dark:""},on:{click:a}},[r("v-icon",[e._v("mdi-arrow-left")])],1)]}}])}),r("v-alert",{attrs:{dense:"",dark:"",color:e.color}},[r("h1",[e._v("Información del usuario")])])],1),r("v-card-subtitle",[r("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[r("v-btn",e._g(e._b({attrs:{color:"grey lighten-2"}},"v-btn",o,!1),a),[r("span",{staticClass:"mr-2"},[e._v("Color principal")]),r("v-icon",[e._v("mdi-palette")])],1)]}}])},[r("v-list",e._l(e.colores,(function(t,a){return r("v-list-item",{key:a},[r("v-btn",{attrs:{dark:t.dark,block:"",color:t.nombre},on:{click:function(r){return e.cambarColor(t.nombre)}}},[r("v-chip",{attrs:{color:t.nombre}},[e._v(e._s(a+1))])],1)],1)})),1)],1)],1)],1)},$=[],E={name:"ToolbarUsuario",data:function(){return{colores:[{nombre:"orange",dark:!1},{nombre:"red",dark:!0},{nombre:"pink",dark:!0},{nombre:"purple",dark:!0},{nombre:"indigo",dark:!0},{nombre:"blue",dark:!0},{nombre:"cyan",dark:!0},{nombre:"teal",dark:!0},{nombre:"green",dark:!0},{nombre:"grey darken-4",dark:!0}]}},computed:Object(c["a"])({},Object(b["c"])(["color"])),methods:Object(c["a"])({},Object(b["b"])(["cambarColor"]))},T=E,U=r("cc20"),A=r("132d"),z=r("8860"),F=r("da13"),I=r("e449"),R=Object(h["a"])(T,y,$,!1,null,null,null),H=R.exports;p()(R,{VAlert:k["a"],VBtn:_["a"],VCard:g["a"],VCardSubtitle:x["b"],VCardText:x["c"],VChip:U["a"],VIcon:A["a"],VList:z["a"],VListItem:F["a"],VMenu:I["a"]});var S={name:"Usuario",components:{FormUsuario:B,ToolbarUsuario:H}},D=S,J=Object(h["a"])(D,a,o,!1,null,"91ce4226",null);t["default"]=J.exports}}]);
//# sourceMappingURL=chunk-ef98f7f2.dae38b4a.js.map