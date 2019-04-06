<template>
  <v-content>
    <div id="mainView">
      <div id="navigation">
        <Navigation />
      </div>
      <router-view></router-view>
      <div id="info">
        <p>INFO</p>
      </div>
    </div>
  </v-content>
</template>

<script>
import Navigation from  '@/components/Navigation.vue';

  export default {
    components: {
      Navigation
    },
    data () {
      return {
      }
    }
  }
</script>

<style scroped>
#mainView {
  display: grid;
  grid-template-columns: auto 5fr 1fr;
  grid-gap: 20px;
}
a{
  justify-content: center;
  display: flex;
  text-decoration: none;
}
</style>