
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
                v-model="user.email"
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
                v-model="user.name"
                type="username"
                label="Nombre de usuario"
                :rules="[
                  (val) =>
                    (val && val.length > 3) ||
                    'Escrive algo de mas de 3 caracteres',
                ]"
              >
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <q-input
                square
                clearable
                v-model="user.password"
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
                label="Registrarse"
              />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg"> </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6">Return to login</p>
          </q-card-section>
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
      user: {
        email: "",
        name: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      await this.saveUser(this.user);
      this.$router.push({ name: "Login" });
      this.$q.notify({
        message: "Registro creado con exito",
        color: "primary",
        avatar: "https://cdn.quasar.dev/img/boy-avatar.png",
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
      try {
      } catch (error) {
        alert("Ocurrio un error durante la creacion");
      }
    },
  },
};
</script>

<style>
</style>