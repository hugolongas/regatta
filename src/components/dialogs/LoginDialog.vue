<template>
  <v-dialog v-model="dialog" persistent transition="dialog-bottom-transition" width="500">
    <v-card :loading="loading">
      <template v-slot:progress>
        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
      </template>
      <v-card-title>Login</v-card-title>
      <v-divider class="mx-4"></v-divider>
      <v-alert v-show="error" border="top" color="red lighten-2" dark>
        {{ this.errorText }}
      </v-alert>
      <v-container grid-list-xl fluid>
        <v-layout flex-child wrap>
          <v-flex sm12><v-form>
              <v-text-field v-model="email" class="form-input" type="email" id="email" required
                placeholder="Email"></v-text-field>

              <v-text-field v-model="password" class="form-input" type="password" id="password"
                placeholder="Password"></v-text-field>

            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn class="primary" @click="login">Login</v-btn>
        <v-spacer></v-spacer>

        <v-btn color="red darken-1" text @click="close">Volver</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "loginDialog",
  data() {
    return {
      dialog: false,
      email: "",
      password: "",
      loading: false,
      error: false,
      errorText: ""
    };
  },
  computed: {
  },
  methods: {
    show() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
      this.errorText = "";
      this.error = false;
      this.email = "";
      this.password = "";
    },
    login() {

      this.loading = true;
      let loginData = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", loginData).then((response) => {
        if (response == "success") {
          this.loading = false;
          this.close();
          this.$router.push({ name: "ship" });
        } else {
          var result = response;
          this.errorText = result;
          this.error = true;
          this.loading = false;
        }
      });
    },
  },
};
</script>

