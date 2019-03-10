<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <img id="ontario-logo" src="./assets/ontario-logo.png" />
        <h1 class="">RESIDENTIAL TENANCY AGREEMENT</h1>
        <span class="" style="font-size: 12px;">(Stanrdard Form of Lease)</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <Main/>
    </v-content>
  </v-app>
</template>

<script>
import Main from './views/Main'

export default {
  name: 'App',
  components: {
    Main
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang='scss'>
#ontario-logo{
  max-height: 40px;
}
.headline{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
}
</style>