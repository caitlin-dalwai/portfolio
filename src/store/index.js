import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
export default createStore({
  state: {
    aboutMe:null,
    aboutImg:null,
    education:null,
    workExp:null,
    testimonials:null,
    projects:null,
    skills:null,

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
    },
    setskills(state, payload){
      state.skills = payload
    }
  },
  actions: {
    async getMyInfo({commit}){
      try {
      let {data}= await axios.get('https://caitlin-dalwai.github.io/api-portfolio/data/index.json')
      let {aboutMe, aboutImg, education, workExp, testimonials, projects, skills} = data
      console.log(data);
        commit('settestimonials', testimonials)
        commit('setaboutMe', aboutMe)
        commit('setaboutImg', aboutImg)
        commit('seteducation', education)
        commit('setworkExp', workExp)
        commit('setprojects', projects)
        commit('setskills', skills)
      } catch (error) {
        console.error('Error', error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Could not fetch data',
          timer:1500,
          showConfirmButton:false
        })
      }
     

    }
  },
  modules: {
  }
})
