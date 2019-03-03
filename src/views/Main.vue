<template>
  <div>
    <v-tabs
      v-model="active"
      color="cyan"
      dark
      slider-color="yellow"
    >
      <v-tab
        v-for="items in this.tabs"
        :key="items.id"
        ripple
      >
      {{ items.name }}

      </v-tab>
      <v-tab-item
        v-for="items in this.tabs"
        :key="items.id"
      >
        <v-card flat>
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <router-view></router-view>
    <div class="text-xs-center mt-3">
      <v-btn @click="back">previous tab</v-btn>
      <v-btn @click="next">next tab</v-btn>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        active: null,
        tabs: [{
            id: 1,
            name: "Parties",
            route: '/parties'
          },
          {
            id: 2,
            name: "Rent",
            route: '/rent'
          },
          {
            id: 3,
            name: "Service & Utilities",
            route: '/utilities'
          },
          {
            id: 4,
            name: "Key Deposit",
            route: '/deposit'
          },
          {
            id: 5,
            name: "Additional Terms",
            route: '/additional'
          }
        ],
        text: 'Generic text loaded in each tab'
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        active > this.tabs.length - 1 ? this.active = 0 : this.active = active + 1;
        this.$router.push(this.tabs[active + 1].route);
      },
      back () {
        const active = parseInt(this.active)
        active == 0? this.active = this.tabs.length -1 : this.active = active - 1;
        this.$router.push(this.tabs[active - 1].route);
      }
    }
  }
</script>
