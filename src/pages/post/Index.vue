<template>
  <q-page class="flex">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-btn
        icon="add"
        color="primary"
        label="Nuevo"
        :to="{ name: 'CreatePost' }"
      />
      <q-card
        bordered
        class="my-card"
        v-for="item in datas"
        v-bind:key="item.id"
      >
        <q-card-section>
          <div @click="readBlog(item)" tag="a" class="text-h6">
            {{ item.title }}
          </div>
          <div class="text-subtitle2">por {{ item.author.name }}</div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <div id="content" v-html="item.content"></div>
        </q-card-section>
        <q-card-actions>
          <q-btn v-if="item.published" color="primary" flat>Publicado</q-btn>
          <q-btn v-else flat color="red" @click="publish(item)">Publicar</q-btn>
          <q-btn flat color="green">Editar</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { postService } from "../../services/post.service";

export default {
  name: "PageIndex",
  mixins: [postService],
  data() {
    return {
      datas: [],
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
  methods: {
    async publish(item) {
      try {
        let resp = await this.publishPost(item.id);
        item.published = true;
      } catch (error) {}
    },
    readBlog(post) {
      this.$router.push({ name: "Read", params: { id: post.id } });
    },
    async getPosts() {
      try {
        this.datas = await this.posts({
          where: { authorId: { equals: this.userId } },
          orderBy: { createdAt: "desc" },
        });
      } catch (error) {}
    },
  },
  mounted() {
    this.getPosts();
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
};
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
  #content
    width: 80%
    height: 200px

    overflow: hidden
    text-overflow: ellipsis
</style>