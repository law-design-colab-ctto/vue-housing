<template>
  <v-navigation-drawer 
    :mini-variant=mini
  >
    <v-toolbar flat>
      <v-list>
        <v-list-tile @click=collapse>
          <v-list-tile-title class="title">
            <font-awesome-icon size="1x" icon='bars' /> <span v-show=!mini> Table of Contents</span>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-action>
          <font-awesome-icon size="1x" :icon=item.icon />
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>


<script>
 export default {
    data () {
      return {
        mini: true,
        items: [
          { title: 'Money', icon: 'money-bill-alt', url: '' },
          { title: 'Day-today', icon: 'calendar-day', url: '' },
          { title: 'Special Rule Cases', icon: 'flag', url: '' },
          { title: 'Changes to the Lease', icon: 'clipboard-list', url: '' },
          { title: 'Contacts + Unit', icon: 'user-friends', url: '' },
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