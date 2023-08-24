<template>
  <div class="carreres">
    <h1 class="title">Curses</h1>
    <v-data-table :headers="headers" :items="races" :items-per-page="5" class="elevation-1">
      <template v-slot:[`item.actions`]="{ item }">
        <div class="actions">
          <v-layout align-center justify-end>            
              <v-btn depressed text dark color="primary" @click="seeRaceInfo(item)">
                Veure condició
              </v-btn>
          </v-layout>
        </div>
      </template>
    </v-data-table>
    
    <RaceInfoDialog ref="rid" />
  </div>
</template>
  
<script>

import RaceInfoDialog from "@/components/dialogs/RaceInfoDialog";
export default {
  
  components: { RaceInfoDialog },
  name: "RaceListView",
  data() {
    return {
      user:[],
      ship:[],
      headers: [
        {
          text: 'Punt inicial',
          value: 'stage.starting_port',
        },
        {
          text: 'Punt final',
          value: 'stage.ending_port',
        },        
        {
          text: 'Distancia',
          value: 'stage.distance',
        },            
        {
          text: 'Data de la cursa',
          value: 'race_date',
        },
        { text: 'Accions', value: 'actions' }
      ],
    };
  },
  mounted() {
    this.$store.dispatch("SyncRaces");
  },
  computed: {
    races() {
      return this.$store.getters.races;
    }
  },
  methods: {
    seeRaceInfo(race)
    {
      console.log(race);      
      this.$refs.rid.show(race.stage);
    }
  },
};
</script>