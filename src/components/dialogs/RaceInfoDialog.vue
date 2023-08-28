<template>
  <v-dialog v-model="dialog" transition="dialog-bottom-transition" width="800">
    <v-card>
      <v-card-title>Informació de la carrera</v-card-title>
      <v-card-text v-if="race != null">
        <v-container grid-list-xl fluid v-if="!!!+race.race_finished">
          <v-layout flex-child wrap>
            <v-flex sm12>
              <ul v-show="race.stage.weather_effects.length > 0">
                <li v-for="(wEffect, i) in race.stage.weather_effects" :key="i">
                  {{ wEffect.description }}
                </li>
              </ul>
              <span v-show="race.stage.weather_effects.length <= 0">
                No hi ha condicions adverses
              </span>
            </v-flex>
          </v-layout>
        </v-container>

        <v-container grid-list-xl fluid v-if="!!+race.race_finished">
          <v-layout flex-child wrap>
            <v-flex sm12>
              <v-card>
                <v-card-title>
                  Equips
                </v-card-title>
                <v-card-text>
                  <ul>
                    <li v-for="(team, i) in JSON.parse(race.results).teams" :key="i">
                      {{ team.team }}->{{ team.points }}
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
              <v-card>
                <v-card-title>
                  Equips
                </v-card-title>
                <v-card-text>
                  <ul>
                    <li v-for="(user, i) in JSON.parse(race.results).users" :key="i">
                      {{ user.user }}->{{ user.points }}
                    </li>
                  </ul>
                </v-card-text>
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
  name: "raceInfoDialog",
  data() {
    return {
      dialog: false,
      race: null
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
  
  