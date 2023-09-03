<template>
  <v-dialog v-model="dialog" transition="dialog-bottom-transition" width="800">
    <v-card :loading="loading" :disabled="loading">
      <v-card-title>Actualitzacions</v-card-title>
      <v-card-text>
        <v-container grid-list-xl fluid>
          <v-layout flex-child wrap>
            <v-flex sm3 v-for="(upgrade, i) in this.upgrades" :key="i">
              <v-card :class="hasUpgrade(upgrade.id) ? 'green upgrade-item' : 'red upgrade-item'">
                <v-card-title>{{ upgrade.name }}</v-card-title>
                <v-card-text>
                  <p class="upgrade-description">
                    <strong class="upgrade-description-title">Descripción:
                    </strong>
                    {{ upgrade.description }}
                  </p>
                  <p class="upgrade-price">
                    <strong>Precio: </strong>{{ upgrade.price }}
                  </p>
                </v-card-text>
                <v-card-actions>
                  <v-btn v-if="hasUpgrade(upgrade.id)" @click="removeUpgrade(upgrade.id)">
                    Vendre</v-btn>
                  <v-btn v-if="!hasUpgrade(upgrade.id)" @click="addUpgrade(upgrade.id)">
                    Comprar</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="close">Volver</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
  
<script>
export default {
  name: "upgradeDialog",
  data() {
    return {
      dialog: false,
      loading: false,
      shipUpgrades: []
    };
  },
  computed: {
    upgrades() {
      return this.$store.getters.upgrades
    }
  },
  methods: {
    showUpgrades(shipUpgrades) {
      this.dialog = true;
      this.shipUpgrades = shipUpgrades;
    },
    close() {
      this.dialog = false;
    },
    addUpgrade(upgradeId) {
      this.loading = true;
      console.log(upgradeId);
      this.$http.post("ship/addupgrade/" + upgradeId)
        .then((response) => {
          if (response.data) {
            this.$store.dispatch("syncShip");
            this.$store.dispatch("getUser");
            this.showSuccess("Actualització afegida");
            this.loading = false;
            this.close();
          } else {
            let error = response;
            this.showError(error);
          }
        });
    },
    removeUpgrade(upgradeId) {
      this.loading = true;
      console.log(upgradeId);
      this.$http.post("ship/removeupgrade/" + upgradeId)
        .then((response) => {
          if (response.data) {

            this.$store.dispatch("syncShip");
            this.$store.dispatch("getUser").then(() => {
              this.showSuccess("Actualització eliminada");
              this.loading = false;
              this.close();
            });
          } else {
            this.loading = false;
            let error = response;
            this.showError(error);
          }
        });
    },
    hasUpgrade(upgradeId) {
      return this.shipUpgrades.find(e => e.id == upgradeId);
    }
  },
};
</script>
  
  