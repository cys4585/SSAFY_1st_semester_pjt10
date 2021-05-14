<template>
  <div class="home">
<!-- 3. 보여주기 -->
    <!-- MovieCard를 여러개 보여줘야 함 (v-for) -->
    <MovieCard 
      v-for="(movie, idx) in movieList"
      :key="idx"
      :movie="movie"
    />
  </div>
</template>

<script>
// 자식 쓰는법
// 1. 불러오기
import MovieCard from '@/components/MovieCard.vue'
import axios from 'axios'

const MOVIE_URL = 'https://gist.githubusercontent.com/eduChange-hphk/d9acb9fcfaa6ece53c9e8bcddd64131b/raw/9c8bc58a99e2ea77d42abd41376e5e1becabea69/movies.json'

export default {
  name: 'Home',
  components: {
    // 2. 등록하기
    MovieCard
  },
  data: function () {
    return {
      movieList: [],
    }
  },
  methods: {
  },
  created() {
    axios({
      method: 'get',
      url: MOVIE_URL
    })
      .then(response => {
        this.movieList = response.data
        // console.log(this.movieList)
        this.$store.dispatch('setTmdbMovieList', this.movieList)
      })
      .catch(err => console.log(err))
  },
  mounted() {
  }
}
</script>
