<template>
  <div>
    <!-- Movie 하나를 보여주는 곳 -->
    <!-- 포스터, 제목, 줄거리 -->
    <img :src="srcUrl" alt="poster_path">
    <p>{{ movie.title }}</p>
    <p>{{ movie.overview }}</p>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    movie: {
      type: Object
    }
  },
  computed: {
    // 어떤 값이 바뀌면 생길 변수 선언 ?
    srcUrl: function () {
      // console.log(this.movie.poster_path)
      return 'https://image.tmdb.org/t/p/w500' + this.movie.poster_path
    }
  }
}
</script>

<style>

</style>