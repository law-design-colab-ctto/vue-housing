<template>
  <div>
    <v-tabs
      v-model="active"
      color="cyan"
      dark
      slider-color="orange"
    >
    <router-link 
      v-for="items in this.tabs"
      :key="items.id"
      :to="items.route"
    >
      <v-tab
        ripple
      >
        {{ items.name }}
      </v-tab>
    </router-link>
    <v-tab-item
      v-for="items in this.tabs"
      :key="items.id"
    >
      <v-card flat>
        <!-- <v-card-text>{{ text }}</v-card-text> -->
      </v-card>
    </v-tab-item>
    </v-tabs>
    <div class="content">
      <div class="text-xs-center">
      <v-btn @click="back">previous</v-btn>
      <v-btn @click="next">next</v-btn>
    </div>
    <router-view></router-view>
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
            name: "Unit",
            route: '/unit'
          },
          {
            id: 3,
            name: "Terms",
            route: '/terms'
          },
          {
            id: 4,
            name: "Rent",
            route: '/rent'
          },
          {
            id: 5,
            name: "Deposits",
            route: '/deposits'
          },
          {
            id: 6,
            name: "Service & Utilities",
            route: '/utilities'
          },
          {
            id: 7,
            name: "Additional Terms",
            route: '/additional'
          },
          {
            id: 8,
            name: "Signatures",
            route: '/signatures'
          },
          {
            id: 9,
            name: "Appendix",
            route: '/appendix'
          }
        ],
        text: 'Generic text loaded in each tab'
      }
    },
    methods: {
      next () {
        const active = parseInt(this.active)
        this.active >= this.tabs.length - 1 ? this.active = 0 : this.active = active + 1;
        this.$router.push(this.tabs[this.active].route);
      },
      back () {
        const active = parseInt(this.active)
        active == 0 ? this.active = this.tabs.length - 1 : this.active = active - 1;
        this.$router.push(this.tabs[this.active].route);
      }
    }
  }
</script>

<style scroped>
.content{
  padding: 1% 5%;
}
a{
  justify-content: center;
  display: flex;
  text-decoration: none;
}
</style>