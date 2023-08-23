<template>
  <v-dialog v-model="dialog" transition="dialog-bottom-transition" width="800">
    <v-card>
      <v-card-title>Registrar-se</v-card-title>
      <v-container grid-list-xl fluid>
        <v-layout flex-child wrap>
          <v-flex sm12>
            <v-text-field v-model="name" class="form-input" type="text" id="name" required
              placeholder="Nom Complert"></v-text-field>

            <v-text-field v-model="email" class="form-input" type="email" id="email" required
              placeholder="Email"></v-text-field>

            <v-text-field v-model="password" class="form-input" type="text" id="password"
              placeholder="Password"></v-text-field>
            <v-select :items="teams" label="Equip" v-model="teamId" item-text="name" item-value="id"></v-select>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-btn class="primary" @click="register">Enregistrar</v-btn>
        <v-spacer></v-spacer>

        <v-btn color="red darken-1" text @click="close">Volver</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "registerDialog",

  data: () => ({
    dialog: false,
    name: "",
    email: "",
    password: "",
    error: false,
    teamId: 0
  }),
  computed: {
    teams() {
      return this.$store.getters.selectTeams;
    }
  },
  methods: {
    show() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    register() {
      this.$http.post("register?name=" + this.name + "&email=" + this.email + "&password=" + this.password + "&teamId=" + this.teamId)
        .then((response) => {
          window.console.log(response);
          if (response.status == 201) {
            this.close();
          } else {
            this.error = response;
          }
        });
    },
  },
};
</script>

