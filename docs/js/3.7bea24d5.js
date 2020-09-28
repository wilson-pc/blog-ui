(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"49c2":function(t,e,a){"use strict";a.d(e,"a",(function(){return m}));a("e6cf");var o=a("9530"),i=a.n(o);let n,r,s,l,c,u,d=t=>t;const m={data(){return{}},methods:{async getPost(t){return await this.$apollo.query({query:i()(n||(n=d`
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
          `)),variables:{where:t}}).then(({data:t})=>t.post)},async posts(t){return await this.$apollo.query({query:i()(r||(r=d`
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
          `)),variables:t}).then(({data:t})=>t.posts)},async publishEvent(){return await this.$apollo.subscription({query:i()(s||(s=d`
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
          `))}).then(({data:t})=>(t.roles.map(t=>{t.value=t.id,t.label=t.name}),t.roles))},async savePost(t){return await this.$apollo.mutate({mutation:i()(l||(l=d`
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
          `)),variables:{data:t}}).then(({data:t})=>t)},async commentPost(t){return await this.$apollo.mutate({mutation:i()(c||(c=d`
            mutation($data: CommentCreateInput!) {
              createComment(data: $data) {
                id
                message
              }
            }
          `)),variables:{data:t}}).then(({data:t})=>t)},async publishPost(t){return await this.$apollo.mutate({mutation:i()(u||(u=d`
            mutation($id: String!) {
              publishPost(id: $id) {
                title
                id
              }
            }
          `)),variables:{id:t}}).then(({data:t})=>t)}},computed:{}}},"7bad":function(t,e,a){"use strict";var o=a("e302"),i=a.n(o);i.a},bcaf:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"q-pa-md row items-start q-gutter-md"},[a("q-form",{staticClass:"q-gutter-md",on:{submit:t.onSubmit}},[a("q-input",{attrs:{filled:"",label:"Titulo del post *","lazy-rules":"",rules:[function(t){return t&&t.length>0||"Por fa vor escriba algo"}]},model:{value:t.post.title,callback:function(e){t.$set(t.post,"title",e)},expression:"post.title"}}),a("q-select",{attrs:{filled:"",label:"Selecciona uno o mas categorias *","use-input":"","use-chips":"",multiple:"","input-debounce":"0",options:t.filterOptions,"lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Selecciona algo"}]},on:{"new-value":t.createValue,filter:t.filterFn},model:{value:t.datas,callback:function(e){t.datas=e},expression:"datas"}}),a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-editor",{attrs:{dense:t.$q.screen.lt.md,label:"Contenido *","lazy-rules":"",rules:[function(t){return null!==t&&""!==t||"Escriba algo"}],toolbar:[[{label:t.$q.lang.editor.align,icon:t.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],[{label:t.$q.lang.editor.fontSize,icon:t.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},["fullscreen"],{label:t.$q.lang.editor.defaultFont,icon:t.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}})],1),a("div",[a("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}})],1)],1)],1)])},i=[],n=(a("c975"),a("fb6a"),a("e6cf"),a("49c2")),r=a("9530"),s=a.n(r);let l,c,u=t=>t;const d={data(){return{}},methods:{async saveCategory(t){return await this.$apollo.mutate({mutation:s()(l||(l=u`
            mutation($data: CategoryCreateInput!) {
              createCategory(data: $data) {
                id
                name
              }
            }
          `)),variables:{data:t}}).then(({data:t})=>t)},async getCategories(t){return await this.$apollo.query({query:s()(c||(c=u`
            query($where: CategoryWhereInput) {
              categories(where: $where) {
                id
                name
              }
            }
          `)),variables:{where:t}}).then(({data:t})=>t)}},computed:{}};var m=[],p={name:"PageIndex",mixins:[n["a"],d],data(){return{datas:null,filterOptions:m,qeditor:'<pre>Check out the two different types of dropdowns in each of the "Align" buttons.</pre> ',post:{title:"",content:"",author:void 0,categories:null}}},methods:{async createValue(t,e){let a=t.charAt(0).toUpperCase()+t.slice(1);a.length>0&&(m.includes(a)||(await this.saveCategory({name:a}),m.push(a)),e(a,"toggle"))},filterFn(t,e){e(()=>{if(""===t)this.filterOptions=m;else{const e=t.toLowerCase();this.filterOptions=m.filter(t=>t.toLowerCase().indexOf(e)>-1)}})},async onSubmit(){if(this.post.content.length>4){this.post.author={connect:{id:this.userId}},this.post.categories={connect:this.datas.map(t=>({name:t}))};try{await this.savePost(this.post),this.$router.push({name:"Posts"}),this.$q.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"Post creado con exito"})}catch(t){console.log(t),this.$q.notify({color:"red",textColor:"white",icon:"cloud_done",message:"Ocurrio un error durante la creacion"})}}else this.$q.notify({color:"red",textColor:"white",message:"El contenido deve tener un tamaño mayor a cuatro caracteres"})}},async mounted(){const t=await this.getCategories({});m=t.categories.map(t=>t.name),this.filterOptions=m,console.log(this.filterOptions)},computed:{auth:{get(){return this.$store.state.auth.auth}},userId:{get(){return this.$store.state.auth.userId}}}},h=p,f=(a("7bad"),a("2877")),g=a("9989"),b=a("0378"),w=a("27f9"),y=a("ddd8"),$=a("d66b"),q=a("9c40"),v=a("eebe"),C=a.n(v),_=Object(f["a"])(h,o,i,!1,null,"4e887ff6",null);e["default"]=_.exports;C()(_,"components",{QPage:g["a"],QForm:b["a"],QInput:w["a"],QSelect:y["a"],QEditor:$["a"],QBtn:q["a"]})},e302:function(t,e,a){}}]);