import gql from "graphql-tag";

export const userService = {
  data() {
    return {};
  },
  methods: {
    async saveUser(data) {
      return await this.$apollo
        .mutate({
          // Query
          mutation: gql`
            mutation($data: UserCreateInput!) {
              createUser(data: $data) {
                id
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
    async loginUser(data) {
      return await this.$apollo
        .mutate({
          // Query
          mutation: gql`
            mutation($login: AuthInput!) {
              login(login: $login) {
                token
              }
            }
          `,
          // Parameters
          variables: {
            login: data
          }
        })
        .then(({ data }) => {
          return data;
        });
    }
  },
  computed: {}
};
