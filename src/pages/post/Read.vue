<template>
  <q-page padding v-if="post != undefined">
    <h1 style="font-size: 48px">{{ post.title }}</h1>
    <q-item clickable v-ripple>
      <q-item-section side>
        <q-avatar rounded size="48px">
          <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
        </q-avatar>
      </q-item-section>
      <q-item-section>
        <q-item-label>{{ post.author.name }}</q-item-label>
        <q-item-label caption>
          <timeago :datetime="post.createdAt" :auto-update="5"></timeago>
        </q-item-label>
      </q-item-section>
    </q-item>
    <div v-html="post.content"></div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn
        v-for="item in post.categories"
        v-bind:key="item.id"
        color="white"
        text-color="black"
        :label="item.name"
      />
    </div>
    <div class="q-pa-md">
      <h4>Comentarios</h4>
      <q-list bordered padding>
        <q-item v-for="item in post.comments" v-bind:key="item.id">
          <q-item-section>
            <q-item-label>{{ item.user.name }}</q-item-label>
            <q-item-label caption lines="2">{{ item.message }}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <timeago :datetime="item.createdAt" :auto-update="5"></timeago>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section>
            <q-input
              rounded
              outlined
              v-model="message"
              label="Escriba un comentario"
              @keyup.enter.native="comment()"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { postService } from "../../services/post.service";
import gql from "graphql-tag";

const SUBSCRIPTION_MESSAGES = gql`
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
`;

export default {
  mixins: [postService],
  data() {
    return {
      message: "",
      post: undefined,
      id: "",
    };
  },
  // name: 'PageName',
  methods: {
    async comment() {
      let data = {
        message: this.message,
        post: { connect: { id: this.id } },
        user: { connect: { id: this.userId } },
      };
      await this.commentPost(data);
      this.message = "";
    },
  },
  async mounted() {
    this.post = await this.getPost({ id: this.id });
  },
  created() {
    this.id = this.$route.params.id;
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
  apollo: {
    // Subscriptions
    $subscribe: {
      // When a user is added
      commenthEvent: {
        query: SUBSCRIPTION_MESSAGES,
        variables() {
          // This works just like regular queries
          // and will re-subscribe with the right variables
          // each time the values change
          return {
            postId: this.id,
          };
        },
        // Result hook
        result({ data }) {
          console.log(data.commenthEvent);
          this.post.comments.unshift(data.commenthEvent);
        },
      },
    },
  },
};
</script>
