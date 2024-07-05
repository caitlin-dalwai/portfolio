<template>
      <div id="leaves">
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i>
  <i></i> 
</div>
  <div>

    <h1 style="font-weight:bolder; color:black; margin-top:1%; text-decoration: underline;">Who is Caitlin?</h1>
    
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card" style="width: 100%; margin-top: 4%; height: 300px;">
            <div class="card-body" id="over" style="color: black; border: #582707 20px solid; background-color: white;">
              {{ getAboutInfo() }}
            </div>
          </div>
        </div>
        <div class="col-md-4" >
          <div class="myTest">
            <img id="imgA" :src="getAboutImg()" alt="About Image" >
          </div>
          
        </div>

        <div class="col-md-4">
          <div id="respModal" style="margin-top:80%;">
            <h5 style="color: black;">Click on these for more info!</h5>
            <button type="button" class="btn" id="modalBtn" data-bs-toggle="modal"
                        data-bs-target="#exampleModal" style="border:10px solid #697A21; margin-right: 1%; background-color: white;">
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
                        <button type="button" class="btn" id="modalBtn" data-bs-toggle="modal"
                        data-bs-target="#exampleModal1" style="border:10px solid #697A21;background-color: white;">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
  getAboutInfo(){
    return this.$store.state.aboutMe
  },
  getAboutImg(){
    return this.$store.state.aboutImg
  },
  getWorkEx(){
    return this.$store.state.workExp
  },
  getEdu(){
    return this.$store.state.education
  }

  }
}
</script>
<style scoped>

.container-fluid {
  padding: 20px;
}

.row {
  margin: 0;
}

.col-md-4 {
  padding: 20px;
}

.card {
  width: 100%;
  height: 300px;
  margin-top: 4%;
}

.card-body {
  padding: 20px;
}

img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 200%;
  
  filter: grayscale(100%);
  
}
.myTest img:hover {
  filter: none;
}
.myTest{
  background-color: #582707;
  border-radius: 200%;
  border: #582707 20px solid;
}


/* leaf animations */

#leaves {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  transform: translateZ(0);
  text-align: right;
}

#leaves i {
    display: inline-block;
    width: 200px;
    height: 150px;
    background: linear-gradient(to bottom right, #309900, #005600);
    transform: skew(20deg);
    border-radius: 5% 40% 70%;
    box-shadow: inset 0px 0px 1px #222;
    border: 1px solid #333;
    z-index: 1;
    animation: falling 5s 0s infinite;
}

#leaves i:nth-of-type(2n) { animation: falling2 5s 0s infinite; }
#leaves i:nth-of-type(3n) { animation: falling3 5s 0s infinite; }

#leaves i:before {
  position: absolute;
  content: '';
  top: 117px;
  right: 9px;
  height: 27px;
  width: 32px;
  transform: rotate(49deg);
  border-radius: 0% 15% 15% 0%;
  border-top: 1px solid #222;
  border-bottom: 1px solid #222;
  border-left: 0px solid #222;
  border-right: 1px solid #222;
  background: linear-gradient(to right, rgba(0,100,0,1), #005600);
  z-index: 1;
}

#leaves i:after {
  content: '';
  height: 125px;
  width: 10px;
  background: linear-gradient(to right, rgba(0,0,0,.15), rgba(0,0,0,0));
  display: block;
  transform: rotate(125deg);
  position: absolute;
  left: 85px;
  border-radius:50%;
}


#leaves i:nth-of-type(n)    { height:23px; width:30px; }
#leaves i:nth-of-type(n):before { width:7px; height:5px; top:17px; right:1px; }
#leaves i:nth-of-type(n):after { width:2px; height:17px; left: 12px; top:0px; }

#leaves i:nth-of-type(2n+1)    { height:11px; width:16px; }
#leaves i:nth-of-type(2n+1):before { width:4px; height:3px; top:7px; right:0px; }
#leaves i:nth-of-type(2n+1):after { width:2px; height:6px; left: 5px; top:1px; }

#leaves i:nth-of-type(3n+2)  { height:17px; width:23px; }
#leaves i:nth-of-type(3n+2):before  { height:4px; width:4px; top:12px; right:1px; }
#leaves i:nth-of-type(3n+2):after  { height:10px; width:2px; top:1px; left:8px; }

#leaves i:nth-of-type(n)   { animation-delay: 1.9s;}
#leaves i:nth-of-type(2n)  { animation-delay: 3.9s;}
#leaves i:nth-of-type(3n)  { animation-delay: 2.3s;}
#leaves i:nth-of-type(4n)  { animation-delay: 4.4s;}
#leaves i:nth-of-type(5n)  { animation-delay: 5s;  }
#leaves i:nth-of-type(6n)  { animation-delay: 3.5s;}
#leaves i:nth-of-type(7n)  { animation-delay: 2.8s;}
#leaves i:nth-of-type(8n)  { animation-delay: 1.5s;}
#leaves i:nth-of-type(9n)  { animation-delay: 3.3s;}
#leaves i:nth-of-type(10n) { animation-delay: 2.5s;}
#leaves i:nth-of-type(11n) { animation-delay: 1.2s;}
#leaves i:nth-of-type(12n) { animation-delay: 4.1s;}
#leaves i:nth-of-type(13n) { animation-delay: 1s;  }
#leaves i:nth-of-type(14n) { animation-delay: 4.7s;}
#leaves i:nth-of-type(15n) { animation-delay: 3s;  }

#leaves i:nth-of-type(n)    { background: linear-gradient(to bottom right, #309900, #005600); }
#leaves i:nth-of-type(2n+2)  { background: linear-gradient(to bottom right, #5e9900, #2b5600); }
#leaves i:nth-of-type(4n+1)  { background: linear-gradient(to bottom right, #990, #564500); }

#leaves i:nth-of-type(n)    { opacity: .7;}
#leaves i:nth-of-type(3n+1)  { opacity: .5;}
#leaves i:nth-of-type(3n+2)  { opacity: .3;}

#leaves i:nth-of-type(n)    {transform: rotate(180deg);}


#leaves i:nth-of-type(n) { animation-timing-function:ease-in-out;}

@keyframes falling {
    
    0% {
        transform:
            translate3d(300,0,0)
            rotate(0deg);
    }
    
    100% {
        transform:
            translate3d(-350px,700px,0)
            rotate(90deg);
        opacity: 0;
    }
}

@keyframes falling3 {
     0% {
        transform:
            translate3d(0,0,0)
            rotate(-20deg);
    }
    
    100% {
        transform:
            translate3d(-230px,640px,0)
            rotate(-70deg);
        opacity: 0;
    }
}

@keyframes falling2 {
     0% {
        transform:
            translate3d(0,0,0)
            rotate(90deg);
    }
    
    100% {
        transform:
            translate3d(-400px,680px,0)
            rotate(0deg);
        opacity: 0;
    }
}
@media (max-width: 300px) {
  .container-fluid {
    padding: 10px;
  }
  .row {
    flex-direction: column;
  }
  .col-md-4 {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
  }
  .card {
    height: auto;
    margin-top: 0;
  }
  img {
    height: auto;
    width: 100%;
  }
  .myTest {
    background-color: #582707;
    border-radius: 200%;
    border: #582707 20px solid;
    padding: 10px;
    margin-top: 110%;
  }
  .card-body {
    padding: 10px;
  }
  h1 {
    font-size: 18px;
  }
  h5 {
    font-size: 14px;
    margin-top: 1%;
  }
  button {
    font-size: 12px;
    padding: 5px 10px;
    margin-top: 1%;
  }
  .modal-dialog {
    max-width: 90%;
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
  #respModal{
    margin-top: 0px !important; 
  }
}
</style>
