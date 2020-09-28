(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"49c2":function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));a("e6cf");var s=a("9530"),i=a.n(s);let n,o,r,d,m,c,u=t=>t;const l={data(){return{}},methods:{async getPost(t){return await this.$apollo.query({query:i()(n||(n=u`
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
          `)),variables:{where:t}}).then(({data:t})=>t.post)},async posts(t){return await this.$apollo.query({query:i()(o||(o=u`
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
          `)),variables:t}).then(({data:t})=>t.posts)},async publishEvent(){return await this.$apollo.subscription({query:i()(r||(r=u`
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
          `))}).then(({data:t})=>(t.roles.map(t=>{t.value=t.id,t.label=t.name}),t.roles))},async savePost(t){return await this.$apollo.mutate({mutation:i()(d||(d=u`
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
          `)),variables:{data:t}}).then(({data:t})=>t)},async commentPost(t){return await this.$apollo.mutate({mutation:i()(m||(m=u`
            mutation($data: CommentCreateInput!) {
              createComment(data: $data) {
                id
                message
              }
            }
          `)),variables:{data:t}}).then(({data:t})=>t)},async publishPost(t){return await this.$apollo.mutate({mutation:i()(c||(c=u`
            mutation($id: String!) {
              publishPost(id: $id) {
                title
                id
              }
            }
          `)),variables:{id:t}}).then(({data:t})=>t)}},computed:{}}},"620b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return void 0!=t.post?a("q-page",{attrs:{padding:""}},[a("h1",{staticStyle:{"font-size":"48px"}},[t._v(t._s(t.post.title))]),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""}},[a("q-item-section",{attrs:{side:""}},[a("q-avatar",{attrs:{rounded:"",size:"48px"}},[a("img",{attrs:{src:"https://cdn.quasar.dev/img/boy-avatar.png"}})])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.post.author.name))]),a("q-item-label",{attrs:{caption:""}},[a("timeago",{attrs:{datetime:t.post.createdAt,"auto-update":5}})],1)],1)],1),a("div",{domProps:{innerHTML:t._s(t.post.content)}}),a("div",{staticClass:"q-pa-md q-gutter-sm"},t._l(t.post.categories,(function(t){return a("q-btn",{key:t.id,attrs:{color:"white","text-color":"black",label:t.name}})})),1),a("div",{staticClass:"q-pa-md"},[a("h4",[t._v("Comentarios")]),a("q-list",{attrs:{bordered:"",padding:""}},[t._l(t.post.comments,(function(e){return a("q-item",{key:e.id},[a("q-item-section",[a("q-item-label",[t._v(t._s(e.user.name))]),a("q-item-label",{attrs:{caption:"",lines:"2"}},[t._v(t._s(e.message))])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("timeago",{attrs:{datetime:e.createdAt,"auto-update":5}})],1)],1)})),a("q-item",[a("q-item-section",[a("q-input",{attrs:{rounded:"",outlined:"",label:"Escriba un comentario"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.comment()}},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1)],2)],1)],1):t._e()},i=[],n=(a("e6cf"),a("49c2")),o=a("9530"),r=a.n(o);let d,m=t=>t;const c=r()(d||(d=m`
  subscription getLastComment($postId: String!) {
    commenthEvent(postId: $postId) {
      createdAt
      id
      message
      user {
        name
        id
        email
      }
    }
  }
`));var u={mixins:[n["a"]],data(){return{message:"",post:void 0,id:""}},methods:{async comment(){let t={message:this.message,post:{connect:{id:this.id}},user:{connect:{id:this.userId}}};await this.commentPost(t),this.message=""}},async mounted(){this.post=await this.getPost({id:this.id})},created(){this.id=this.$route.params.id},computed:{auth:{get(){return this.$store.state.auth.auth}},userId:{get(){return this.$store.state.auth.userId}}},apollo:{$subscribe:{commenthEvent:{query:c,variables(){return{postId:this.id}},result({data:t}){console.log(t.commenthEvent),this.post.comments.unshift(t.commenthEvent)}}}}},l=u,p=a("2877"),h=a("9989"),b=a("66e5"),v=a("4074"),g=a("cb32"),q=a("0170"),y=a("9c40"),$=a("1c1c"),w=a("27f9"),f=a("714f"),I=a("eebe"),_=a.n(I),P=Object(p["a"])(l,s,i,!1,null,null,null);e["default"]=P.exports;_()(P,"components",{QPage:h["a"],QItem:b["a"],QItemSection:v["a"],QAvatar:g["a"],QItemLabel:q["a"],QBtn:y["a"],QList:$["a"],QInput:w["a"]}),_()(P,"directives",{Ripple:f["a"]})}}]);