<template >
    <div>
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


    </div>
    <div>
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


    </div>
    
</template>
<script>
export default {
    methods:{
        getskillsInfo(){
            return this.$store.state.skills
        },
        getsoftSkillsInfo(){
            return this.$store.state.softSkills
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