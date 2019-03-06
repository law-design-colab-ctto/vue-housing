<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md12>
            <div class="centered">
                <label>Number of {{title}}: </label> &nbsp;
                <input class="counter" type="number" min="0" v-bind:value="amount" placeholder="enter number here">
            </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>


<script>
  export default {
        data () {
            return {
            }
        },
        props: ['title', 'amount']
  }
</script>

<style>
.counter{
  border: 1px solid #00bad1;
  color: #00bad1;
  text-align: center;
  border-radius: 10px;
  font-weight: 900;
}
.container{
    width: 100% !important;
    max-width: 100% !important;
}
</style>       