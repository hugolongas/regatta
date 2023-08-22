<template>
  <v-dialog
    v-model="dialog"
    transition="dialog-bottom-transition"
    width="800"   
  >
    <v-card>      
      <v-card-title>Login</v-card-title>      
      <v-container grid-list-xl fluid>
        <v-layout flex-child wrap>
          <v-flex sm12>
            <v-text-field
          v-model="email"
          class="form-input"
          type="email"
          id="email"
          required
          placeholder="Email"
        ></v-text-field>
        
        <v-text-field
          v-model="password"
          class="form-input"
          type="text"
          id="password"
          placeholder="Password"
        ></v-text-field>
       
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
      error: false,
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
    },
    login() {
      let loginData = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", loginData).then((response) => {
        window.console.log(response);
        if (response == "success") {
          this.$router.push({ name: "ship" });
        } else {
          this.error = response;
        }
      });
    },
  },
};
</script>

