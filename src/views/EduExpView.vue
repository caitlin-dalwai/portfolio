<template >
    <!-- <div>
<h1 style="font-weight:bolder; color:black; margin-top:1%; text-decoration: underline;">Skills</h1>
<h5>Aptitudes I've acquired throughout my journey till now</h5>

<section class="d-flex justify-content-evenly flex-wrap">
            <div class="hehe" v-for="skill in getskillsInfo()" :key="skill" id="cen">
                <div class="card" style="background-color: #EAEFBD; border: none;  width: 200px; height: fit-content ">
                    <div class="container">
                        <img :src="skill.image" class="card-img animate__animated animate__tada" alt="skill img" style="margin-top: 20%;  ">
                        </div>
                        </div>
                        </div>
</section>


    </div> -->
    <!-- <div>
<h1 style="font-weight:bolder; color:black; margin-top:1%; text-decoration: underline;"> Soft Skills</h1>
<h5>Hover over image to see more</h5>

<section class="d-flex justify-content-evenly flex-wrap">
            <div class="hehe" v-for="softSkill in getsoftSkillsInfo()" :key="softSkill" id="cen">
                <div class="card" style="background-color: #EAEFBD; border: none;  width: 200px; height: fit-content ">
                    <div class="container">
                        <img :src="softSkill.image" class="card-img animate__animated animate__tada" alt="skill img" style="margin-top: 20%;  ">
                        <div class="hover-text">{{ softSkill.name }}</div>
                        </div>
                        </div>
                        </div>
</section>


    </div> -->
    <div>
        <img src="https://caitlin-dalwai.github.io/capstone-imgs/Group%202%20(3).png" alt="" style="width: 100vw; border: 8px solid black;">
        <h3 style="margin-top: 2%; margin-bottom: 2%;">Click to view more</h3>
        <button type="button" class="btn" id="modalBtn" data-bs-toggle="modal"
                        data-bs-target="#exampleModal" style="border:10px solid #697A21;margin-bottom: 1%; background-color: black; color: white;">
                        Education
                    </button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">My education journey thus far</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close" style="border:5px solid #697A21"></button>
                                </div>
                                <div class="modal-body">
                                   
                                      <div v-for="education in getEdu()" :key="education" >
                                        <div style="margin-top: 3%; border: #582707 dotted 5px;">
                                        <div class="card-text">
                                        <h3>{{ education.qualif }}</h3>
                                        
                                        <h5>{{ education.place }}</h5>
                                        
                                      {{ education.duraction }}
                                          <br>
                                      {{ education.details }}
                                        
                                        <h5 style="text-decoration: underline;">Knowledge I've learnt & extra activities I took part in:</h5>
                                        
                                         {{ education.subjects }}
                                        <br>
                                         {{ education.extra }}
                                          <br>
                                         {{ education.acts }}
                                        <br>
                                        {{ education.acts2 }}
                                        <br>
                                        {{ education.acts3 }}
                                        <br>
                                        {{ education.acts4 }}
                                        </div>
                                      </div>
                                        
                                        
                                      </div>
                                    
                                   
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal" style="border:5px solid #697A21">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button style="border:10px solid black; background-color: #697A21; color: white; margin-left: 2%; width: 6%; border-radius: 50%; margin-bottom: 1%; " class="btn"><router-link to="aws" style="color: white;">AWS</router-link></button>
    </div>
    <div>
        <img src="https://caitlin-dalwai.github.io/capstone-imgs/Group%203%20(2).png" alt="" style="width: 100vw; border: 8px solid black;">
        <h3 style="margin-top: 2%; margin-bottom: 2%;">Click on button to view more</h3>
        <button type="button" class="btn" id="modalBtn" data-bs-toggle="modal"
                        data-bs-target="#exampleModal1" style="border:10px solid #697A21;margin-bottom: 2%; background-color: black; color: white;">
                        Work Experience
                    </button>
                    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">My working journey thus far</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close" style="border:5px solid #697A21"></button>
                                </div>
                                <div class="modal-body">
                                   
                                      <div v-for="workExp in getWorkEx()" :key="workExp" >
                                        <div style="margin-top: 3%; border: #582707 dotted 5px;">
                                        <div class="card-text">
                                        <h3>{{ workExp.placeOfWork }}</h3>
                                        
                                        <h5>{{ workExp.description  }}</h5>
                                        
                                      {{ workExp.year }}
                                          <br>
                                      {{ workExp.details }}
                                        
                                        <h5 style="text-decoration: underline;">My Duties:</h5>
                                        
                                         {{ workExp.acts }}
                                        <br>
                                         {{ workExp.acts2 }}
                                          <br>
                                         {{ workExp.acts3 }}
                                        <br>
                                        {{ workExp.acts4 }}
                                        
                                        </div>
                                      </div>
                                        
                                        
                                      </div>
                                    
                                   
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal" style="border:5px solid #697A21">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        

                        
    </div>

 

    
</template>
<script>
export default {
    methods:{
        getWorkEx(){
    return this.$store.state.workExp
  },
  getEdu(){
    return this.$store.state.education
    }
}
}
</script>
<style scoped >
    .hover-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  z-index: 1; 
  display: none;
}

.card:hover .hover-text {
  display: block;
}
</style>