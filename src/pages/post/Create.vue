<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md row items-start q-gutter-md">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <q-input
          filled
          v-model="post.title"
          label="Titulo del post *"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Por fa vor escriba algo',
          ]"
        />

        <q-select
          filled
          v-model="datas"
          label="Selecciona uno o mas categorias *"
          use-input
          use-chips
          multiple
          input-debounce="0"
          @new-value="createValue"
          :options="filterOptions"
          @filter="filterFn"
          lazy-rules
          :rules="[(val) => (val !== null && val !== '') || 'Selecciona algo']"
        />
        <div class="q-pa-md q-gutter-sm">
          <q-editor
            v-model="post.content"
            :dense="$q.screen.lt.md"
            label="Contenido *"
            lazy-rules
            :rules="[(val) => (val !== null && val !== '') || 'Escriba algo']"
            :toolbar="[
              [
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  list: 'only-icons',
                  options: ['left', 'center', 'right', 'justify'],
                },
              ],
              [
                'bold',
                'italic',
                'strike',
                'underline',
                'subscript',
                'superscript',
              ],
              ['token', 'hr', 'link', 'custom_btn'],
              [
                {
                  label: $q.lang.editor.fontSize,
                  icon: $q.iconSet.editor.fontSize,
                  fixedLabel: true,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'size-1',
                    'size-2',
                    'size-3',
                    'size-4',
                    'size-5',
                    'size-6',
                    'size-7',
                  ],
                },
                ['fullscreen'],
                {
                  label: $q.lang.editor.defaultFont,
                  icon: $q.iconSet.editor.font,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'default_font',
                    'arial',
                    'arial_black',
                    'comic_sans',
                    'courier_new',
                    'impact',
                    'lucida_grande',
                    'times_new_roman',
                    'verdana',
                  ],
                },
                'removeFormat',
              ],
              ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

              ['undo', 'redo'],
            ]"
            :fonts="{
              arial: 'Arial',
              arial_black: 'Arial Black',
              comic_sans: 'Comic Sans MS',
              courier_new: 'Courier New',
              impact: 'Impact',
              lucida_grande: 'Lucida Grande',
              times_new_roman: 'Times New Roman',
              verdana: 'Verdana',
            }"
          ></q-editor>
        </div>
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { postService } from "../../services/post.service";
import { categoryService } from "../../services/category.service";

var categories = [];
export default {
  name: "PageIndex",
  mixins: [postService, categoryService],
  data() {
    return {
      datas: null,
      filterOptions: categories,
      qeditor:
        "<pre>Check out the two different types of dropdowns" +
        ' in each of the "Align" buttons.</pre> ',
      post: {
        title: "",
        content: "",
        author: undefined,
        categories: null,
      },
    };
  },
  methods: {
    async createValue(val, done) {
      let value = val.charAt(0).toUpperCase() + val.slice(1);
      if (value.length > 0) {
        if (!categories.includes(value)) {
          await this.saveCategory({ name: value });
          categories.push(value);
        }
        done(value, "toggle");
      }
    },
    filterFn(val, update) {
      update(() => {
        if (val === "") {
          this.filterOptions = categories;
        } else {
          const needle = val.toLowerCase();
          this.filterOptions = categories.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        }
      });
    },
    async onSubmit() {
      if (this.post.content.length > 4) {
        this.post.author = { connect: { id: this.userId } };
        this.post.categories = {
          connect: this.datas.map((c) => {
            return { name: c };
          }),
        };
        try {
          await this.savePost(this.post);
          this.$router.push({ name: "Posts" });
          this.$q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Post creado con exito",
          });
        } catch (error) {
          console.log(error);
          this.$q.notify({
            color: "red",
            textColor: "white",
            icon: "cloud_done",
            message: "Ocurrio un error durante la creacion",
          });
        }
      } else {
        this.$q.notify({
          color: "red",
          textColor: "white",
          message:
            "El contenido deve tener un tamaño mayor a cuatro caracteres",
        });
      }
    },
  },
  async mounted() {
    const resp = await this.getCategories({});
    categories = resp.categories.map((c) => {
      return c.name;
    });
    this.filterOptions = categories;
    console.log(this.filterOptions);
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
</style>