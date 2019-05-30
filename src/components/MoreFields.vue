<template>
  <v-form>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md12>
            <div class="centered">
                <label>{{ $t("Number of") }} {{title | myLocale}}: </label> &nbsp;
                <input class="counter" type="number" min="0" v-model="amount" placeholder="enter number here" @keyup="amountChanged" @click="amountChanged">
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
        amount: this.startingAmount,
      }
    },
    props: [
      'title',
      'startingAmount'
    ],
    methods: {
      amountChanged: function () {
        this.$emit('amountChanged', this.amount)
      }
    },
  }
</script>

<style>
.counter{
  border: 1px solid black !important;
  color: black !important;
  text-align: center;
  border-radius: 10px;
  font-weight: 900;
}
.container{
    width: 100% !important;
    max-width: 100% !important;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>       