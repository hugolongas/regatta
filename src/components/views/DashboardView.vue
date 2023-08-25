<template>
  <div class="dashboard">
    <h1 class="title">Classificació</h1>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card>
            <v-card-title>
              Puntació per equips
            </v-card-title>
            <v-card-text>
              <TeamChart />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card>
            <v-card-title>
              Puntació per usuaris
            </v-card-title>
            <v-card-text>
              <v-data-table :headers="headers" :items="leaderboard" :items-per-page="10" class="elevation-1">
                <template v-slot:[`item.position`]="{ item }">
                  <div>
                    <v-layout align-center justify-center>
                      <span v-if="item.position == 1">
                        <v-icon style="font-size:40px;" color="#FFD700" class="mdi mdi-trophy"></v-icon>
                      </span>
                      <span v-if="item.position == 2">
                        <v-icon  style="font-size:30px;" color="#C0C0C0" class="mdi mdi-trophy"></v-icon>
                      </span>
                      <span v-if="item.position == 3">
                        <v-icon  style="font-size:25px;" color="#CD7F32" class="mdi mdi-trophy"></v-icon>
                      </span>
                      <span v-if="item.position > 3">{{ item.position }}</span>
                    </v-layout>
                  </div>
                </template>
              </v-data-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
  
<script>

import TeamChart from '@/components/Charts/TeamChart'
export default {
  name: "DashboardView",
  components: { TeamChart },
  data() {
    return {
      leaderboardList: [],
      headers: [
        { text: 'Posició', value: 'position' },
        { text: 'Nom', value: 'name' },
        { text: 'Equip', value: 'team' },
        { text: 'Punts', value: 'points' }
      ],
    };
  },
  computed: {
    leaderboard() {
      return this.$store.getters.getDashboardUsers
    },
  },
  methods: {
  },
};
</script>