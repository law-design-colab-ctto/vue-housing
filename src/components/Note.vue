<template>
  <div class="note">
    <p>{{note}}</p>
  </div>
</template>

<script>
export default {
  name: 'Note',
  data () {
    return { 
      note: 'pass a note via props' 
    }
  }
}
</script>

<style scoped>
.note {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #eee;
  width: 100%;
  padding: 10px;
}
.note p {
  margin: 0;
}
</style>