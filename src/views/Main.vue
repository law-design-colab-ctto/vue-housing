<template>
  <div>
    <v-tabs
      v-model="active"
      color="cyan"
      dark
      slider-color="orange"
    >
      <v-tab
        ripple
        v-for="items in this.tabs"
        :key="items.id"
        :to="items.route"
      >
        {{ items.name }}
      </v-tab>
    <v-tab-item
      v-for="items in this.tabs"
      :key="items.id"
      :value="items.route"
    >
        <router-view></router-view>
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
            name: "Home",
            route: '/'
          },
          {
            id: 2,
            name: "Parties",
            route: '/parties'
          },
          {
            id: 3,
            name: "Unit",
            route: '/unit'
          },
          {
            id: 4,
            name: "Terms",
            route: '/terms'
          },
          {
            id: 5,
            name: "Rent",
            route: '/rent'
          },
          {
            id: 6,
            name: "Deposits",
            route: '/deposits'
          },
          {
            id: 7,
            name: "Service & Utilities",
            route: '/utilities'
          },
          {
            id: 8,
            name: "Additional Terms",
            route: '/additional'
          },
          {
            id: 9,
            name: "Signatures",
            route: '/signatures'
          },
          {
            id: 10,
            name: "Appendix",
            route: '/appendix'
          }
        ],
        text: 'Generic text loaded in each tab'
      }
    },
    methods: {
      next () {
        let nextTab = null;
        for (let item of this.tabs) {
          if (this.active == item.route) {
            nextTab = item.id - 1;
          }
        }
        nextTab >= this.tabs.length - 1 ? nextTab = 0 : nextTab = nextTab + 1;
        this.$router.push(this.tabs[nextTab].route);
      },
      back () {
        let nextTab = null;
        for (let item of this.tabs) {
          if (this.active == item.route) {
            nextTab = item.id - 1;
          }
        }
        nextTab >= this.tabs.length - 1 ? nextTab = 0 : nextTab = nextTab - 1;
        this.$router.push(this.tabs[nextTab].route);
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