<template>
    <div>
       
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    
  <div class="carousel-inner  justify-content-center align-items-center">
    <div v-for= "testimonial in getTestiInfo()" :key="testimonial">
    <div class="carousel-item active">
      <div class="card" style="width: 18rem;" id="testis">
                <img :src="testimonial.image" class="card-img-top" alt="img" style="border-radius:50%">
                <div class="card-body">
                    <h5 class="card-title" >{{testimonial.name}}</h5>
                    <p >{{testimonial.position}}</p>

                    
                    <div class="d-flex">
                    
                    <button type="button" class="btn" id="modalBtn" data-bs-toggle="modal"
                        data-bs-target="#exampleModal" style="border:5px solid #697A21">
                        Message
                    </button>

                    
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel">Their words of recommendation</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close" style="border:5px solid #697A21"></button>
                                </div>
                                <div class="modal-body">
                                    <p class="card-text">{{testimonial.message}}</p>
                                   
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary"
                                            data-bs-dismiss="modal" style="border:5px solid #697A21">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        
                    </div>
                </div>
                </div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" style="background-color:#697A21;">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" style="background-color:#697A21;">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



        </div>
    </div>
</template>
<script>
export default {
    methods:{
        getTestiInfo(){
            return this.$store.state.testimonials
        }
    },
    computed:{
        getMyInfo(){
            return this.$store.dispatch('getMyInfo')
        }
    },
    mounted(){
        this.getMyInfo
    }
}
</script>
<style scoped>
    #testis{
        margin-left:40%;
        border: 15px solid #582707;
        margin-top:2%
    }
    body{
    background-color: #EAEFBD;
}
</style>