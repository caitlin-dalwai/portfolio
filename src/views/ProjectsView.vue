<template>
    <div>
        <section class="d-flex justify-content-evenly flex-wrap">
            <div class="hehe" v-for="project in getProjInfo()" :key="project" id="cen">
                <!-- <h1>{{project.name}}</h1>
            <img :src="project.image"> -->
                <div class="card" style="width: 300px; height: 150px; background-color: #697A21;" id="spP">
                    <div class="container">
                        <img :src="project.image" class="card-img" alt="project img" style="margin-top: 2%;">

                        <div class="card-img-overlay" id="text">
                            <h5 class="card-title" style="color: black; font-weight: bolder;">{{ project.name }}</h5>
                            <p class="card-text" style="color: white;">{{ project.description }}</p>
                            <span><a :href="project.github" class="btn btn-success" style="color: black;"
                                    target="_blank">GitHub</a> <a :href="project.vercel" class="btn btn-success"
                                    style="color: black;" target="_blank">Vercel</a></span>
                        </div>
                    </div>
                </div>
            </div>


        </section>

    </div>
</template>
<script>
export default {
    methods: {
        getProjInfo() {
            return this.$store.state.projects
        }
    },
    computed: {
        getMyInfo() {
            return this.$store.dispatch('getMyInfo')
        }
    },
    mounted() {
        this.getMyInfo
    }
}
</script>
<style scoped>
body{
    background-color: #EAEFBD;
}
#text {
    display: none;
    background-color: #6a7a21cf;
    transition: 5s;
    height: fit-content;

}

.container:hover #text {
    display: block;
}

.hehe{
    flex-basis: 400px;
    margin-top: 5%;
    height: 150px;
}
#cen{
    display: flex;
    justify-content: center;
}
</style>