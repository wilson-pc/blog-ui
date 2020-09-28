import gql from "graphql-tag";

export const categoryService = {
  data() {
    return {};
  },
  methods: {
    async saveCategory(data) {
      return await this.$apollo
        .mutate({
          // Query
          mutation: gql`
            mutation($data: CategoryCreateInput!) {
              createCategory(data: $data) {
                id
                name
              }
            }
          `,
          // Parameters
          variables: {
            data: data
          }
        })
        .then(({ data }) => {
          return data;
        });
    },
    async getCategories(query) {
      return await this.$apollo
        .query({
          // Query
          query: gql`
            query($where: CategoryWhereInput) {
              categories(where: $where) {
                id
                name
              }
            }
          `,
          // Parameters
          variables: {
            where: query
          }
        })
        .then(({ data }) => {
          return data;
        });
    }
  },
  computed: {}
};
