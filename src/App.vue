<template>
  <v-app>
    <div id="app">
      <Header id="header"/>
      <Main id="main"/>
      <Footer id="footer"/>
    </div>
  </v-app>
</template>

<script>
import Main from '@/views/Main'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style lang='scss'>
#app {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: minmax(70px, 5%) 1fr minmax(70px, 5%);
  grid-template-areas: 
    'header'
    'main'
    'footer'
  ;
}
#header {
  grid-area: header;
}
#main {
  grid-area: main;
}
#footer {
  grid-area: footer;
}
#ontario-logo{
  max-height: 40px;
}
#main {
  height: 100%;
}
.headline{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
}
</style>