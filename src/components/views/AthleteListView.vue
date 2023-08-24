<template>
  <div class="atletes">
    <h1 class="title">Mariners</h1>
    <v-data-table :headers="headers" :items="athletes" :items-per-page="5" class="elevation-1">
      <template v-slot:[`item.actions`]="{ item }">
        <div class="actions">
          <v-layout align-center justify-end>            
              <v-btn v-if="item.ship_id==ship.id" depressed text dark color="primary" title="Vendre" @click="removeAthlete(item.id)">
                Vendre
              </v-btn>
            <div v-if="item.ship_id!=null && item.ship_id!=ship.id">
              No Disponible
            </div>            
              <v-btn v-if="item.ship_id==null" depressed text dark color="primary" title="Comprar" @click="addAthlete(item.id)">
                Comprar
              </v-btn>
          </v-layout>
        </div>
      </template>
    </v-data-table>
  </div>
</template>
  
<script>
export default {
  name: "AthleteView",
  data() {
    return {
      user:[],
      ship:[],
      headers: [
        {
          text: 'Mariner',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Força', value: 'strength' },
        { text: 'Resistencia', value: 'stamina' },
        { text: 'Experiencia', value: 'experience' },
        { text: 'Preu', value: 'price' },
        { text: 'Accions', value: 'actions' }
      ],
    };
  },
  mounted() {
    this.$store.dispatch("syncAthletes");
    this.user = this.$store.getters.user;
    this.ship = this.$store.getters.ship;
  },
  computed: {
    athletes() {
      return this.$store.getters.athletes;
    }
  },
  methods: {
    addAthlete(athleteId){
      this.$http.post("ship/addathlete/"+athleteId)
      .then((response) => {
        window.console.log(response);
        if (response.data) {
          this.showSuccess("Atleta comprat");
          this.$store.dispatch("syncAthletes");
          this.$store.dispatch("syncShip");
          this.$store.dispatch("getUser");
        } else {
          let error = response;
          this.showError(error);
        }
      });
    },
    removeAthlete(athleteId){
      this.$http.post("ship/removeathlete/"+athleteId)
      .then((response) => {
        window.console.log(response);
        if (response.data) {
          this.$store.dispatch("syncAthletes");
          this.$store.dispatch("syncShip");
          this.$store.dispatch("getUser");
        } else {
          let error = response;
          this.showError(error);
        }
      });
    }

  },
};
</script>