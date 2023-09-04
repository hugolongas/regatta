<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>REGATA JUGUESQUERA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn-toggle dense>
        <v-btn @click="login" small>
          <v-icon>
            mdi-login
          </v-icon>
          Logar-se
        </v-btn>
        <v-btn @click="register" small>
          <v-icon>
            mdi-register-outline
          </v-icon>
          Registrar-se
        </v-btn>
      </v-btn-toggle>
    </v-toolbar>
    <div>
      <router-view />
    </div>
    <LoginDialog ref="lgnd" />
    <RegisterDialog ref="rgtd" />
  </div>
</template>
<script>
import LoginDialog from "@/components/dialogs/LoginDialog";
import RegisterDialog from "@/components/dialogs/RegisterDialog";
export default {
  components: { LoginDialog, RegisterDialog },
  name: "CeanView",
  methods: {
    login() {
      this.$refs.lgnd.show();
    },
    register() {
      this.$refs.rgtd.show();
    }
  }

}
</script>
<style></style>