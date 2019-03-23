<template>
<div id="term">
  <h1>Term</h1>
  <v-layout row wrap>
    <v-flex xs12 sm12 md4>
      <p>The tenancy starts on the following day:</p>
      <v-date-picker v-model="startDate" :landscape=false ></v-date-picker>
    </v-flex>
    <v-flex xs12 sm12 md8>
      <p>This tenacy agreement is for: (select an optionb elow & fill in details as needed)</p>
      <v-date-picker v-show="tenancyLength == 'fixed'" v-model="endDate" :landscape=false></v-date-picker>
      <v-container fluid>
        <v-radio-group id="termEnd" v-model="tenancyLength" :mandatory="true" :column=true px-0>
          <v-radio label="a fixed length of time ending on the above date" value="fixed"></v-radio>
          <v-radio label="a monthly tenacy:" value="monthly"></v-radio>
          <v-radio label="a weekly tenacy:" value="weekly"></v-radio>
          <v-radio label="a daily tenacy:" value="daily"></v-radio>
          <v-radio label='Other (please specify):' value="other"></v-radio>
        </v-radio-group>
      </v-container>
    </v-flex>
  </v-layout>
  <Note :note=note />
</div>
</template>

<script>
import Note from  '@/components/Note.vue';

export default {
  name: 'Term',
  components: {
    Note,
  },
  data () {
    return {
      tenancyLength: '',
      startDate: new Date().toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
      note: "The tenant does not have to move out at the end of the term. See Parts C and D in General Information"
      // TODO: make Parts C & D hyperlinks to appendix, or find some other way of linking data
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.flex {
  margin-top: 15px;
}

@media only screen and (max-width: 600px) {
  .flex {
    text-align: center;
  }
}
</style>