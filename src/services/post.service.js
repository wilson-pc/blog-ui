import gql from "graphql-tag";

export const postService = {
  data() {
    return {};
  },
  methods: {
    async getPost(query) {
      return await this.$apollo
        .query({
          // Query
          query: gql`
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
          `,
          variables: {
            where: query
          }
        })
        .then(({ data }) => {
          return (data = data.post);
        });
    },
    async posts(query) {
      return await this.$apollo
        .query({
          // Query
          query: gql`
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
          `,
          variables: query
        })
        .then(({ data }) => {
          return (data = data.posts);
        });
    },
    async publishEvent() {
      return await this.$apollo
        .subscription({
          // Query
          query: gql`
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
          `
        })
        .then(({ data }) => {
          data.roles.map(r => {
            r.value = r.id;
            r.label = r.name;
          });
          return data.roles;
        });
    },
    async savePost(data) {
      return await this.$apollo
        .mutate({
          // Query
          mutation: gql`
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
    async commentPost(data) {
      return await this.$apollo
        .mutate({
          // Query
          mutation: gql`
            mutation($data: CommentCreateInput!) {
              createComment(data: $data) {
                id
                message
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
    async publishPost(id) {
      return await this.$apollo
        .mutate({
          // Query
          mutation: gql`
            mutation($id: String!) {
              publishPost(id: $id) {
                title
                id
              }
            }
          `,
          // Parameters
          variables: {
            id: id
          }
        })
        .then(({ data }) => {
          return data;
        });
    }
  },
  computed: {}
};
