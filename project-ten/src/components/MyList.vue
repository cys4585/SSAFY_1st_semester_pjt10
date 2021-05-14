<template>
  <div>
    <div v-for="(movie, idx) in myMovieList" :key="idx">
      <span @click="update_movie(movie)" :class="{ completed: movie.completed }" class="movie-title">
        {{ movie.movieTitle }}
      </span>
      <button @click="delete_movie(movie)" class="btn-danger">삭제</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'MyList',
  // 어디다 선언하느냐
  computed: {
    ...mapState(['myMovieList']),
    // ...mapGetters(['getMovieList'])
  },
  methods: {
    ...mapActions(['delete_movie', 'update_movie'])
  }
}
</script>

<style>
  .completed {
    text-decoration: line-through;
  }

  .movie-title {
    cursor: pointer;
  }
</style>