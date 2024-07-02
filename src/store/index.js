import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    aboutMe:null,
    aboutImg:null,
    education:null,
    workExp:null,
    testimonials:null,
    projects:null

  },
  getters: {
  },
  mutations: {
    setaboutMe(state, payload){
      state.aboutMe = payload
    },
    setaboutImg(state, payload){
      state.aboutImg = payload
    },
    seteducation(state, payload){
      state.education = payload
    },
    setworkExp(state, payload){
      state.workExp = payload
    },
    settestimonials(state, payload){
      state.testimonials = payload
    },
    setprojects(state, payload){
      state.projects = payload
    }
  },
  actions: {
    async getMyInfo({commit}){
      let {data}= await axios.get('https://caitlin-dalwai.github.io/api-portfolio/data/index.json')
      let {aboutMe, aboutImg, education, workExp, testimonials, projects} = data
      console.log(data);
      try {
        commit('settestimonials', testimonials)
        commit('setaboutMe', aboutMe)
        commit('setaboutImg', aboutImg)
        commit('seteducation', education)
        commit('setworkExp', workExp)
        commit('setprojects', projects)
      } catch (error) {
        console.error('Error', error)
        alert("Could not locate data")
      }
     

    }
  },
  modules: {
  }
})
