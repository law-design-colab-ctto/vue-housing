<template>
<div id="home">
  <h1>Welcome!</h1>
    <p>{{ $t("This form is the official residential tenancy agreement for the province of Ontario.") }}</p>
    <div>
      <h2>Benefits of using this form:</h2>
      <ol>
        <li>{{ $t("Legal protection for both parties") }}</li>
        <li>{{ $t("A digital document secured on the clowd") }}</li>
        <li>{{ $t("Easily accessible anytime") }}</li>
      </ol>
    </div>
    <div> 
      <h2>How to use this form</h2>
      <ol>
        <li>{{ $t("a") }}</li>
        <li>{{ $t("b") }}</li>
        <li>{{ $t("c") }}</li>
      </ol>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#home {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>