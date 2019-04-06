<template>
  <div>
      <v-btn @click="back" :disabled="this.$route.path == '/'">{{ $t("previous") }}</v-btn>
      <v-btn @click="next" :disabled="this.$route.path == '/appendix'">{{ $t("next") }}</v-btn>
  </div>
</template>


<script>
  export default {
    data () {
      return {
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
            name: "Term",
            route: '/term'
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
          if (this.$route.path == item.route) {
            nextTab = item.id - 1;
          }
        }
        nextTab >= this.tabs.length - 1 ? nextTab = 0 : nextTab = nextTab + 1;
        this.$router.push(this.tabs[nextTab].route);
      },
      back () {
        let nextTab = null;
        for (let item of this.tabs) {
          if (this.$route.path == item.route) {
            nextTab = item.id - 1;
          }
        }
        nextTab == 0 ? nextTab = this.tabs.length - 1 : nextTab = nextTab - 1;
        this.$router.push(this.tabs[nextTab].route);
      }
    }
  }
</script>

<style scoped>
#footer {
  background-color: grey;
  text-align: right;
  padding-top: 1vh;
  padding-right: 4vw;
}
</style>