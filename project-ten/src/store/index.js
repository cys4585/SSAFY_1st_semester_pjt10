import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  // 새로고침해도 데이터 유지되도록 하는 플러그인 (install 해야함)
  plugins: [
    createPersistedState(),
  ],
  state: {
    // 공용으로 사용할 데이터들 정의

    myMovieList: [],    // MyListForm.vue에서 input으로 들어오면 수정되는 state
    
    tmdbMovieList: [],  // Home.vue에서 axios 요청으로 얻어온 movieList를 저장할 state
    randomMovie: '',    // Random.vue에서 pick 버튼을 눌렀을 때 tmdbMovieList에서 랜덤으로 하나를 추출해서 저장할 state
  },
  getters: {
    // *.vue (컴포넌트)가 데이터를 부를 때 사용하는 메서드 정의

    // RandomMovie.vue에서 호출할 getters method
    getRandomMovie: function (state) {
      return state.randomMovie
    }
  },
  mutations: {
    // 그 데이터를 조종할 메서드 정의

    CREATE_MY_MOVIE: function (state, movieItem) {
      // console.log('mutations 실행')
      state.myMovieList.push(movieItem)
    },
    DELETE_MY_MOVIE: function (state, movieItem) {
      // 삭제 어떻게 ?
      // 1. movieTitle에 해당하는 원소의 index 얻기
      const idx = state.myMovieList.indexOf(movieItem)
      // 2. idx에 해당하는 원소 삭제
      state.myMovieList.splice(idx, 1)
    },
    UPDATE_MY_MOVIE: function (state, movieItem) {
      // 수정 어떻게? (completed를 수정)
      // 1. state에 있는 movieList에서 movieItem 에 해당하는 원소의 index 얻기
      const idx =  state.myMovieList.indexOf(movieItem)
      // 2. idx에 해당하는 원소의 completed 수정
      state.myMovieList[idx].completed = !state.myMovieList[idx].completed
    },
    SET_TMDB_MOVIE_LIST: function (state, movieList) {
      state.tmdbMovieList = movieList
    },
    UPDATE_RANDOM_TMDB_MOVIE: function (state) {
      state.randomMovie = _.sample(state.tmdbMovieList)
      // console.log('UPDATE_RANDOM_TMDB_MOVIE 실행')
      // console.log(state.randomMovie)
    }
  },
  actions: {
    // 그 메서드(mutations)를 조종하는 메서드 정의

    createMovie: function ({ commit }, movieTitle) {
      // console.log('actions 실행')
      const movieItem = {
        movieTitle: movieTitle,
        completed: false,
      }
      // mutations에 보내주기
      commit('CREATE_MY_MOVIE', movieItem)
      movieTitle = ''
    },
    delete_movie: function ({ commit }, movieItem) {
      commit('DELETE_MY_MOVIE', movieItem)
    },
    update_movie: function ({ commit }, movieItem) {
      commit('UPDATE_MY_MOVIE', movieItem)
    },

    setTmdbMovieList: function({ commit }, movieList) {
      commit('SET_TMDB_MOVIE_LIST', movieList)
    },
    updateRandomMovie: function ({ commit }) {
      // console.log('updateRandomMovie 실행')
      commit('UPDATE_RANDOM_TMDB_MOVIE')
    }
  },
  modules: {
  }
})
