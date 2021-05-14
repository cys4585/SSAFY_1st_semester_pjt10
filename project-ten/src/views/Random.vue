<template>
  <div>
    <h1>Random</h1>
    <button @click="updateRandomMovie">Pick</button>
    <p>{{ getRandomMovie.title }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Random',
  methods: {
    ...mapActions(['updateRandomMovie'])
  },
  computed: {
    ...mapGetters(['getRandomMovie'])
  }
}
</script>

<style>

</style>