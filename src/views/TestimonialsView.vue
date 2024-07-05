<template>
    <div>
        <h1 style="font-weight:bolder; color:black; margin-top:0.5%; text-decoration: underline;">Testimonials</h1>
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    
  <div class="carousel-inner justify-content-center align-items-center">
    <div v-for= "(testimonial,index) in getTestiInfo()" :key="testimonial.name">
    <div class="carousel-item" :class="{'active':index==0}">
      <div class="card" style="width: 18rem;" id="testis">
                <img :src="testimonial.image" class="card-img-top" alt="img" style="border-radius:50%">
                <div class="card-body">
                    <h5 class="card-title" >{{testimonial.name}}</h5>
                    <p >{{testimonial.position}}</p>

                    
                    <div class="d-flex">
                    
                    <button type="button" class="btn btn-success"  id="modalBtn" data-bs-toggle="modal"
                        :data-bs-target="`#exampleModal${index}`" style="color:">
                        Message
                    </button>

                    
                    <div class="modal fade" :id="`exampleModal${index}`" tabindex="-1" aria-labelledby="exampleModalLabel"
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
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" >
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
@media (max-width: 300px) {
        #testis {
            margin-left: 1%;
            margin-top: 5%;
            width: 80%;
        }
        .card {
            width: 100%;
        }
        .card-img-top {
            width: 50%;
            margin: 0 auto;
        }
        .card-body {
            padding: 10px;
        }
        .modal-dialog {
            width: 90%;
            margin: 10px auto;
        }
        .modal-content {
            padding: 10px;
        }
        .modal-header {
            padding: 10px;
        }
        .modal-body {
            padding: 10px;
        }
        .modal-footer {
            padding: 10px;
        }
        .carousel-control-prev, .carousel-control-next {
            width: 20px;
            height: 20px;
        }
    }
</style>