<template>
    <v-form 
        id="addressForm"
        ref="form"
        v-model="valid"
        lazy-validation
    >
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm12 md4>
            <v-text-field
               :rules="nameRules"
               :counter="40"
               v-bind:label="$t('Unit')"
               required
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md4>
            <v-text-field
               :rules="streetNumberRules"
               :counter="6"
               v-bind:label="$t('Street Number')"
               type="number"
               min="0"
               required
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md4>
            <v-text-field
               :rules="streetNameRules"
               :counter="40"
               v-bind:label="$t('Street Name')"
               required
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md4>
            <v-text-field
                :rules="cityRules"
                :counter="40"
                v-bind:label="$t('City')"
                required
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md4>
            <v-text-field
                :rules="nameRules"
                :counter="40"
                v-bind:label="$t('Province')"
                required
            ></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md4>
            <v-btn
                :disabled="!valid"
                color="success"
                @click="validate"
                >
                {{ $t("Validate") }}
            </v-btn>

            <v-btn
                color="error"
                @click="reset"
                >
                {{ $t("Reset Form") }}
            </v-btn>

            <v-btn
                color="warning"
                @click="resetValidation"
                >
                {{ $t("Recheck") }}
            </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
  
</template>

<script>
  export default {
    data: () => ({
      Unit: "",
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      city: '',
      cityRules: [
        v => !!v || 'City/Town is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      streetName: '',
      streetNameRules: [
        v => !!v || 'Street name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      streetNumber: '',
      streetNumberRules: [
        v => !!v || 'Street number is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: false
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    }
  }
</script>

<style scoped>
.testRow{
    background-color: red;
    width: 300px;
}
</style>