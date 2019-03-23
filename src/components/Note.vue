<template>
  <div class="note">
    <font-awesome-icon size="2x" icon="exclamation" />
    &nbsp;&nbsp;
    <p>{{note}}</p>
  </div>
</template>

<script>
export default {
  name: 'Note',
  props: [
    'note',
  ],
  data () {
    return { 
      note: note
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
  margin: 15px 0;
}
.note p {
  margin: 0;
}
</style>