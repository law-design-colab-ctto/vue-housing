<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <img id="ontario-logo" src="./assets/ontario-logo.png" />
        <span class="font-weight-light">{{ $t("RESIDENTIAL TENANCY AGREEMENT") }}</span>
        <span class="" style="font-size: 12px;">{{ $t("Standard Form of Lease") }}</span>
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

<style>
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