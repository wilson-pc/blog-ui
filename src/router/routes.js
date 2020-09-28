const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", name: "Home", component: () => import("pages/Index.vue") },
      {
        path: "register",
        name: "Register",
        component: () => import("pages/Register.vue")
      },
      {
        path: "login",
        name: "Login",
        component: () => import("pages/Login.vue")
      },
      {
        path: "posts",
        name: "Posts",
        component: () => import("pages/post/Index.vue")
      },
      {
        path: "posts/update/:id",
        name: "UpdatePost",
        component: () => import("pages/post/Update.vue")
      },
      {
        path: "posts/create",
        name: "CreatePost",
        component: () => import("pages/post/Create.vue")
      },
      {
        path: "post/:id",
        name: "Read",
        component: () => import("pages/post/Read.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
