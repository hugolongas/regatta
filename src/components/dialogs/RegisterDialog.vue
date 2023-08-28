<template>
  <v-dialog v-model="dialog" persistent transition="dialog-bottom-transition" width="800">
    <v-card :loading="loading">
      <template v-slot:progress>
        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
      </template>
      <v-card-title>Registrar-se</v-card-title>

      <v-alert v-show="error" border="top" color="red lighten-2" dark>
        {{ this.errorText }}
      </v-alert>
      <v-container grid-list-xl fluid>
        <v-layout flex-child wrap>
          <v-flex sm12>
            <v-form>
              <v-text-field v-model="name" class="form-input" type="text" id="name" required
                placeholder="Nom Complert"></v-text-field>

              <v-text-field v-model="email" class="form-input" type="email" id="email" required
                placeholder="Email"></v-text-field>

              <v-text-field v-model="password" class="form-input" type="password" id="password"
                placeholder="Password" required></v-text-field>
              <v-select :items="teams" label="Equip" v-model="teamId"
               item-text="name" item-value="id" required>
                
              </v-select>
            </v-form>
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
    teamId: 0,
    loading: false,
    error: false,
    errorText: ""
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
      this.loading = true;
      this.$http.post("register?name=" + this.name + "&email=" + this.email + "&password=" + this.password + "&teamId=" + this.teamId)
        .then((response) => {
          window.console.log(response);
          if (response.status == 201) {
            this.loading = false;
            this.close();
            this.showSuccess("Usuari Creat");
          } else {
            var result = response.data;
            if (!result.result)
              this.showError(result.data);
            this.loading = false;
          }
        });
    },
  },
};
</script>

