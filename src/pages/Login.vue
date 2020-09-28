
<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width: 300px; height: 485px">
          <q-card-section class="bg-deep-purple-7">
            <h4 class="text-h5 text-white q-my-md">Registro</h4>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl q-pb-lg" @submit="onSubmit">
              <q-input
                square
                clearable
                v-model="login.email"
                type="email"
                label="Email"
                :rules="[
                  (val) => (val !== null && val !== '') || 'Escriba algo',
                  (val) =>
                    /\S+@\S+\.\S+/.test(val) || 'Escriba un email valido',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>

              <q-input
                square
                clearable
                v-model="login.password"
                type="password"
                label="Contraseña"
                :rules="[
                  (val) =>
                    (val && val.length > 3) ||
                    'Escrive algo de mas de 3 caracteres',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <q-btn
                unelevated
                type="submit"
                size="lg"
                color="purple-4"
                class="full-width text-white"
                label="Sign In"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg"> </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { userService } from "../services/user.service";

export default {
  mixins: [userService],
  name: "Login",
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      try {
        let { login } = await this.loginUser(this.login);

        this.$q.localStorage.set("token", login.token);
        this.$store.dispatch("auth/loadAuth");
        this.$router.push({ name: "Home" });
        window.location.reload();
      } catch (error) {
        console.log(error);
        this.$q.notify({
          message: "Usuario o contraseña incorrecta",
          color: "purple",
          avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
          position: "top",
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
      }
    },
  },
};
</script>

<style>
</style>