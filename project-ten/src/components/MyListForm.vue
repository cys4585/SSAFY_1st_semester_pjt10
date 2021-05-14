<template>
  <div>
    입력 : 
    <input type="text" v-model="inputText" @keyup.enter="createMovie">
    <button @click="createMovie" class="btn-primary">add</button>
    <hr>
  </div>
</template>

<script>
// 헬퍼
// import { mapActions } from 'vuex'

export default {
  name: 'MyListForm',
  data: function () {
    return {
      inputText: '',
    }
  },
  methods: {
    // helper를 통해서 actions를 사용할 때
    // this.inputText를 어떻게 갱신하지?

    // ...mapActions(['createMovie',]),
    createMovie: function () {
      this.$store.dispatch('createMovie', this.inputText)
      this.inputText = ''
    }
  }
}
</script>

<style>

</style>