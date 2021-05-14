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
    // helper를 언제 쓰느냐 ? -> store에 있는 것만 조종할 때
    // 만약 현재 위치에서 실행해야 할 동작이 있으면
    // dispatch를 통해 actions 메서드를 호출하고, 여기서 할 일은 별도로 진행
    // ...mapActions(['createMovie',]),

    createMovie: function () {
      this.createMovie(this.inputText)
      this.inputText = ''
    }
  }
}
</script>

<style>

</style>