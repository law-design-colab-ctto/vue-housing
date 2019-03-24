<template>
  <div>
    <img id="ontario-logo" src="@/assets/ontario-logo.png" />
    <div class="right">
      <v-text-field
        append-icon="mic"
        flat
        label="Search"
        prepend-inner-icon="search"
        solo-inverted
      ></v-text-field>
      <span>Profile</span>
      <span>Settings</span>
    </div>
  </div>
    <!-- <v-toolbar app>
      <v-toolbar-title class="headline">
        <img id="ontario-logo" src="@/assets/ontario-logo.png" />
        <span class="font-weight-light">{{ $t("RESIDENTIAL TENANCY AGREEMENT") }}</span>
        <span class="" style="font-size: 12px;">{{ $t("Standard Form of Lease") }}</span>
      </v-toolbar-title>
    </v-toolbar> -->
</template>


<script>
  export default {
    data () {
      return {
      }
    },
  }
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right {
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.v-input {
  max-width: 300px;
}
</style>