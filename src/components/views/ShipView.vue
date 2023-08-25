<template>
  <div class="ship">
    <h1 class="title">{{ship.name}}</h1>
    <v-container>
      <v-row>
        <v-col cols="12"
        sm="5"
        md="8">
        
        <img :src=shipImg style="max-width:600px"/>
        </v-col>
        <v-col cols="12"
        sm="7"
        md="4">
          <v-container>
            <v-row>
              <v-col>
                Velocitat: {{ ship.maxSpeed }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                Acceleració: {{ ship.maxAcceleration }}
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                Actualizacions:
                <div v-for="(upgrade,i) in ship.upgrades" :key="i">
                  <div class="upgrade">
                    <span class="mdi mdi-speedometer" v-if="upgrade.upgrade_type=='speed'"></span>
                    <span class="mdi mdi-turbine" v-if="upgrade.upgrade_type=='acceleration'"></span>
                    <span class="mdi mdi-account-multiple" v-if="upgrade.upgrade_type=='crew'"></span>
                    <span class="mdi mdi-percent-circle-outline" v-if="upgrade.upgrade_type=='prize'"></span>
                    {{upgrade.name}}
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn @click="showUpgrades">Actualitzacions</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
    <UpgradeDialog ref="updd" />
  </div>  
</template>
  
<script>
import UpgradeDialog from "@/components/dialogs/UpgradeDialog";
export default {
  components: { UpgradeDialog },
  name: "ShipView",
  data() {
    return {
    };
  },
  mounted() {
    this.$store.dispatch("syncShip");
  },
  computed: {
    user(){
    return this.$store.getters.user;
    },
    ship() {
      return this.$store.getters.ship;
    },
    shipImg()
    {
      return "/img/ship_"+this.user.team.logo;
    },
  },
  methods: {
    
    showUpgrades() {
      this.$refs.updd.showUpgrades(this.ship.upgrades);
    },
  },
};
</script>