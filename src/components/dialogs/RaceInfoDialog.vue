<template>
  <v-dialog v-model="dialog" transition="dialog-bottom-transition" width="800">
    <v-card :loading="loading" :disabled="loading">
      <v-card-title>Informació de la carrera</v-card-title>
      <v-card-text>
        <v-container grid-list-xl fluid>
          <v-layout flex-child wrap>
            <v-flex sm3>
              <ul>
                <li v-for="(wEffect, i) in race.weather_effects" :key="i">
                  {{wEffect.description}}
                </li>
              </ul>
              
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
  name: "raceInfoDialog",
  data() {
    return {
      dialog: false,
      race: []
    };
  },
  methods: {
    show(race) {
      this.dialog = true;
      this.race = race;
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>
  
  