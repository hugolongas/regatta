<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>REGATA JUGUESQUERA</v-toolbar-title>
      <v-spacer></v-spacer>
      <span @click="login" small style="cursor:pointer;margin-right: 2px;">
        <v-icon>
          mdi-login
        </v-icon>
        Logar-se
      </span>/
      <span @click="register" small style="cursor:pointer;margin-left: 2px;">
        <v-icon>
          mdi-register-outline
        </v-icon>
        Registrar-se
      </span>
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
      console.log("a");
      this.$refs.rgtd.show();
    }
  }

}
</script>
<style></style>