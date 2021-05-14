<template>
  <div>
    <h1>MyMovieList</h1>
    <MyListForm/>
    <MyList/>
  </div>
</template>

<script>
import MyListForm from '@/components/MyListForm.vue'
import MyList from '@/components/MyList.vue'

export default {
  name: 'MyMovieList',
  components: {
    MyListForm,
    MyList,
  },
}
</script>

<style>

</style>