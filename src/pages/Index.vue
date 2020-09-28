<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card
        bordered
        class="my-card"
        v-for="item in datas"
        v-bind:key="item.id"
      >
        <q-card-section>
          <div @click="readBlog(item)" class="text-h6">{{ item.title }}</div>
          <div class="text-subtitle2">por {{ item.author.name }}</div>
          <timeago :datetime="item.createdAt" :auto-update="5"></timeago>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section>
          <div id="content" v-html="item.content"></div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { postService } from "../services/post.service";

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
    readBlog(post) {
      this.$router.push({ name: "Read", params: { id: post.id } });
    },
    async getPosts() {
      try {
        this.datas = await this.posts({
          where: { published: { equals: true } },
          orderBy: { createdAt: "desc" },
        });
      } catch (error) {}
    },
  },
  mounted() {
    this.getPosts();
    this.$root.$on("new-post", (post) => {
      this.datas.unshift(post);
    });
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