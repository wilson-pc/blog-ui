(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"013f":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{staticClass:"window-height window-width row justify-center items-center"},[e("div",{staticClass:"column q-pa-lg"},[e("div",{staticClass:"row"},[e("q-card",{staticClass:"shadow-24",staticStyle:{width:"300px",height:"485px"},attrs:{square:""}},[e("q-card-section",{staticClass:"bg-deep-purple-7"},[e("h4",{staticClass:"text-h5 text-white q-my-md"},[t._v("Registro")])]),e("q-card-section",[e("q-form",{staticClass:"q-px-sm q-pt-xl q-pb-lg",on:{submit:t.onSubmit}},[e("q-input",{attrs:{square:"",clearable:"",type:"email",label:"Email",rules:[function(t){return null!==t&&""!==t||"Escriba algo"},function(t){return/\S+@\S+\.\S+/.test(t)||"Escriba un email valido"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:t.login.email,callback:function(a){t.$set(t.login,"email",a)},expression:"login.email"}}),e("q-input",{attrs:{square:"",clearable:"",type:"password",label:"Contraseña",rules:[function(t){return t&&t.length>3||"Escrive algo de mas de 3 caracteres"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"lock"}})]},proxy:!0}]),model:{value:t.login.password,callback:function(a){t.$set(t.login,"password",a)},expression:"login.password"}}),e("q-btn",{staticClass:"full-width text-white",attrs:{unelevated:"",type:"submit",size:"lg",color:"purple-4",label:"Sign In"}})],1)],1),e("q-card-actions",{staticClass:"q-px-lg"})],1)],1)])])},s=[],o=(e("e6cf"),e("1f57")),i={mixins:[o["a"]],name:"Login",data(){return{login:{email:"",password:""}}},methods:{async onSubmit(){try{let{login:t}=await this.loginUser(this.login);this.$q.localStorage.set("token",t.token),this.$store.dispatch("auth/loadAuth"),this.$router.push({name:"Home"}),window.location.reload()}catch(t){console.log(t),this.$q.notify({message:"Usuario o contraseña incorrecta",color:"purple",avatar:"https://cdn.quasar.dev/img/boy-avatar.png",position:"top",actions:[{label:"aceptar",color:"white",handler:()=>{}}]})}}}},l=i,r=e("2877"),c=e("9989"),u=e("f09f"),d=e("a370"),p=e("0378"),m=e("27f9"),g=e("0016"),h=e("9c40"),w=e("4b7e"),f=e("eebe"),b=e.n(f),q=Object(r["a"])(l,n,s,!1,null,null,null);a["default"]=q.exports;b()(q,"components",{QPage:c["a"],QCard:u["a"],QCardSection:d["a"],QForm:p["a"],QInput:m["a"],QIcon:g["a"],QBtn:h["a"],QCardActions:w["a"]})},"1f57":function(t,a,e){"use strict";e.d(a,"a",(function(){return r}));e("e6cf");var n=e("9530"),s=e.n(n);let o,i,l=t=>t;const r={data(){return{}},methods:{async saveUser(t){return await this.$apollo.mutate({mutation:s()(o||(o=l`
            mutation($data: UserCreateInput!) {
              createUser(data: $data) {
                id
              }
            }
          `)),variables:{data:t}}).then(({data:t})=>t)},async loginUser(t){return await this.$apollo.mutate({mutation:s()(i||(i=l`
            mutation($login: AuthInput!) {
              login(login: $login) {
                token
              }
            }
          `)),variables:{login:t}}).then(({data:t})=>t)}},computed:{}}}}]);