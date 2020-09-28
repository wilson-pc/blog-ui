(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"49c2":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));a("e6cf");var i=a("9530"),s=a.n(i);let n,r,o,l,c,u,m=t=>t;const d={data(){return{}},methods:{async getPost(t){return await this.$apollo.query({query:s()(n||(n=m`
            query($where: PostWhereUniqueInput!) {
              post(where: $where) {
                content
                title
                createdAt
                id
                author {
                  name
                  email
                  id
                }
                categories {
                  name
                  id
                }
                comments {
                  id
                  message
                  createdAt
                  user {
                    id
                    name
                    email
                  }
                }
              }
            }
          `)),variables:{where:t}}).then(({data:t})=>t.post)},async posts(t){return await this.$apollo.query({query:s()(r||(r=m`
            query($where: PostWhereInput, $orderBy: [PostOrderByInput!]) {
              posts(where: $where, orderBy: $orderBy) {
                content
                title
                published
                createdAt
                id
                author {
                  name
                  email
                  id
                }
                categories {
                  name
                  id
                }
              }
            }
          `)),variables:t}).then(({data:t})=>t.posts)},async publishEvent(){return await this.$apollo.subscription({query:s()(o||(o=m`
            subscription {
              publishEvent {
                content
                title
                createdAt
                id
                author {
                  name
                  email
                  id
                }
                categories {
                  name
                  id
                }
              }
            }
          `))}).then(({data:t})=>(t.roles.map(t=>{t.value=t.id,t.label=t.name}),t.roles))},async savePost(t){return await this.$apollo.mutate({mutation:s()(l||(l=m`
            mutation($data: PostCreateInput!) {
              createPost(data: $data) {
                content
                title
                createdAt
                id
                author {
                  name
                  email
                  id
                }
                categories {
                  name
                  id
                }
              }
            }
          `)),variables:{data:t}}).then(({data:t})=>t)},async commentPost(t){return await this.$apollo.mutate({mutation:s()(c||(c=m`
            mutation($data: CommentCreateInput!) {
              createComment(data: $data) {
                id
                message
              }
            }
          `)),variables:{data:t}}).then(({data:t})=>t)},async publishPost(t){return await this.$apollo.mutate({mutation:s()(u||(u=m`
            mutation($id: String!) {
              publishPost(id: $id) {
                title
                id
              }
            }
          `)),variables:{id:t}}).then(({data:t})=>t)}},computed:{}}},"713b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-toolbar-title",{attrs:{to:{name:"Home"}}},[t._v(" Multi Topics ")]),a("q-space"),a("div",{staticClass:"q-pl-md q-gutter-sm row no-wrap items-center"},[a("q-btn",{attrs:{dense:"",flat:"","no-wrap":""}},[a("q-avatar",{attrs:{rounded:"",size:"20px"}},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})]),a("q-icon",{attrs:{name:"arrow_drop_down",size:"16px"}}),a("q-menu",{attrs:{"auto-close":""}},[a("q-list",{attrs:{dense:""}},[a("q-separator"),1==t.auth?a("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""}},[a("q-item-section",[t._v("Mi Perfil")])],1):t._e(),1==t.auth?a("q-item",{staticClass:"GL__menu-link",attrs:{clickable:"",to:{name:"Posts"}}},[a("q-item-section",[t._v("Mis Posts")])],1):t._e(),a("q-separator"),1==t.auth?a("q-item",{staticClass:"GL__menu-link",attrs:{clickable:""},on:{click:function(e){return t.exit()}}},[a("q-item-section",[t._v("Sign out")])],1):t._e(),t.auth?t._e():a("q-item",{staticClass:"GL__menu-link",attrs:{clickable:"",to:{name:"Login"}}},[a("q-item-section",[t._v("Login")])],1),t.auth?t._e():a("q-item",{staticClass:"GL__menu-link",attrs:{clickable:"",to:{name:"Register"}}},[a("q-item-section",[t._v("Registrarse")])],1)],1)],1)],1)],1)],1)],1),a("q-page-container",[a("router-view")],1)],1)},s=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",tag:"a",target:"_blank",href:t.link}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},r=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},l=o,c=a("2877"),u=a("66e5"),m=a("4074"),d=a("0016"),p=a("0170"),h=a("eebe"),q=a.n(h),b=Object(c["a"])(l,n,r,!1,null,null,null),v=b.exports;q()(b,"components",{QItem:u["a"],QItemSection:m["a"],QIcon:d["a"],QItemLabel:p["a"]});var w=a("49c2"),_=a("9530"),g=a.n(_);let k,y=t=>t;const $=g()(k||(k=y`
  subscription getLastPublish {
    publishEvent {
      content
      title
      createdAt
      id
      author {
        name
        email
        id
      }
      categories {
        name
        id
      }
    }
  }
`)),f=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}];var Q={name:"MainLayout",mixins:[w["a"]],components:{EssentialLink:v},data(){return{leftDrawerOpen:!1,essentialLinks:f}},methods:{exit(){this.$store.dispatch("auth/exit")}},created(){this.$store.dispatch("auth/loadAuth")},computed:{auth:{get(){return this.$store.state.auth.auth}},userId:{get(){return this.$store.state.auth.userId}}},mounted(){},apollo:{$subscribe:{publishEvent:{query:$,result({data:t}){this.$root.$emit("new-post",t.publishEvent),this.$q.notify({message:"<strong>Nuevo post</strong>  <span>"+t.publishEvent.title+"</span>",html:!0,color:"primary",position:"top-right",multiLine:!0,actions:[{label:"aceptar",color:"white",handler:()=>{}}]})}}}}},L=Q,P=a("4d5a"),C=a("e359"),I=a("65c6"),E=a("6ac5"),S=a("2c91"),A=a("9c40"),x=a("cb32"),G=a("4e73"),B=a("1c1c"),M=a("eb85"),T=a("09e3"),F=Object(c["a"])(L,i,s,!1,null,null,null);e["default"]=F.exports;q()(F,"components",{QLayout:P["a"],QHeader:C["a"],QToolbar:I["a"],QToolbarTitle:E["a"],QSpace:S["a"],QBtn:A["a"],QAvatar:x["a"],QIcon:d["a"],QMenu:G["a"],QList:B["a"],QSeparator:M["a"],QItem:u["a"],QItemSection:m["a"],QPageContainer:T["a"]})}}]);