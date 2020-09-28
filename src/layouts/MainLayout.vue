<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title :to="{ name: 'Home' }"> Multi Topics </q-toolbar-title>
        <q-space />

        <div class="q-pl-md q-gutter-sm row no-wrap items-center">
          <q-btn dense flat no-wrap>
            <q-avatar rounded size="20px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <q-icon name="arrow_drop_down" size="16px" />

            <q-menu auto-close>
              <q-list dense>
                <q-separator />
                <q-item v-if="auth == true" clickable class="GL__menu-link">
                  <q-item-section>Mi Perfil</q-item-section>
                </q-item>
                <q-item
                  v-if="auth == true"
                  clickable
                  class="GL__menu-link"
                  :to="{ name: 'Posts' }"
                >
                  <q-item-section>Mis Posts</q-item-section>
                </q-item>

                <q-separator />

                <q-item
                  v-if="auth == true"
                  clickable
                  class="GL__menu-link"
                  @click="exit()"
                >
                  <q-item-section>Sign out</q-item-section>
                </q-item>
                <q-item
                  v-if="!auth"
                  clickable
                  class="GL__menu-link"
                  :to="{ name: 'Login' }"
                >
                  <q-item-section>Login</q-item-section>
                </q-item>
                <q-item
                  v-if="!auth"
                  clickable
                  class="GL__menu-link"
                  :to="{ name: 'Register' }"
                >
                  <q-item-section>Registrarse</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { postService } from "../services/post.service";
import gql from "graphql-tag";
const SUBSCRIPTION_ONLINE_USERS = gql`
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
`;

const linksData = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

export default {
  name: "MainLayout",
  mixins: [postService],
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
  methods: {
    exit() {
      this.$store.dispatch("auth/exit");
    },
  },
  created() {
    this.$store.dispatch("auth/loadAuth");
  },
  computed: {
    auth: {
      get() {
        return this.$store.state.auth.auth;
      },
    },
    userId: {
      get() {
        return this.$store.state.auth.userId;
      },
    },
  },
  mounted() {},
  apollo: {
    // Subscriptions
    $subscribe: {
      // When a user is added
      publishEvent: {
        query: SUBSCRIPTION_ONLINE_USERS,
        // Result hook
        result({ data }) {
          // Let's update the local data

          this.$root.$emit("new-post", data.publishEvent);
          this.$q.notify({
            message:
              "<strong>Nuevo post</strong>  <span>" +
              data.publishEvent.title +
              "</span>",
            html: true,
            color: "primary",
            position: "top-right",
            multiLine: true,
            actions: [
              {
                label: "aceptar",
                color: "white",
                handler: () => {
                  /* ... */
                },
              },
            ],
          });
        },
      },
    },
  },
};
</script>
