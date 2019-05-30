<template>
  <v-navigation-drawer
  permanent
  >
    <v-list dense class="pt-0">
      <template
      v-for="section in sections">
        <template
        v-if="section.items">
          <v-list-group
          v-bind:key="section.title">
            <template v-slot:activator>
              <v-list-tile>{{ section.title | myLocale }}</v-list-tile>
            </template>
            <v-list-tile
            v-for="item in section.items"
            :key="item.title"
            :to="item.url">
              <v-list-tile-action>
                <font-awesome-icon size="1x" :icon="item.icon"></font-awesome-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title | myLocale }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
        </template>
        <template
        v-else>
        <v-list-tile
        :key="section.title"
        :to="section.url">
          <v-list-tile-action>
            <font-awesome-icon size="1x" :icon="section.icon"></font-awesome-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ section.title | myLocale }}</v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile>
          </template>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
 export default {
    data () {
      return {
        mini: true,
        sections: [
          { title: 'Home', icon: 'home', url: '/' },
          { title: 'Parties', icon: 'user-friends', url: '/parties'},
          { title: 'Money',
            icon: 'money-bill-wave', 
             items: [
                { title: 'Dates', icon: 'calendar-day', url: '/term' },
                { title: 'Rent', icon: 'money-bill', url: '/rent' },
                { title: 'Deposits', icon: 'money-check-alt', url: '/deposits' },
                { title: 'Unit', icon: 'key', url: '/unit' },
                { title: 'Service & Utilities', icon: 'bolt', url: '/utilities' }
             ]
           },
           { title: 'Additional Terms', icon: 'list-ul', url:'/additional' },
           { title: 'Signatures', icon: 'signature', url: '/signatures' },
           { title: 'Appendix', icon: 'ellipsis-h', url: '/appendix' }
        ],
        right: null
      }
    },
    methods: {
      collapse: function() {
        if (this.mini == false) {
          this.mini = true;
          console.log(this.mini)
        } 
        else {
          this.mini = false;
                console.log(this.mini)
        }
      }
    }
  }
</script>

<style scoped>
#footer {
  background-color: grey;
}
.title:hover{
  cursor: pointer;
}
</style>