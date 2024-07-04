<template >
    <div>
<h1 style="font-weight:bolder; color:black; margin-top:1%; text-decoration: underline;">Skills</h1>
<h5>Aptitudes I've acquired throughout my journey till now</h5>

<section class="d-flex justify-content-evenly flex-wrap">
            <div class="hehe" v-for="skill in getSkillsInfo()" :key="skill" id="cen">
                <div class="card" style="background-color: #EAEFBD; border: none;  width: 200px; height: fit-content ">
                    <div class="container">
                        <img :src="skill.image" class="card-img animate__animated animate__tada" alt="skill img" style="margin-top: 20%;  ">
                        </div>
                        </div>
                        </div>
</section>


    </div>
    
</template>
<script>
export default {
    methods:{
        getSkillsInfo(){
            return this.$store.state.skills
        }
    }
}
</script>
<style >
    
</style>