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

        

      </div>
      <div>
<h1 style="font-weight:bolder; color:black; text-decoration: underline;">Skills</h1>
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
<h5>Hover over image to view more</h5>

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
  },
  getskillsInfo(){
            return this.$store.state.skills
        },
        getsoftSkillsInfo(){
            return this.$store.state.softSkills
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

#imgA {
  width: 100%;
  height: 450px;
  object-fit: cover;
  border-radius: 200%;
  
  filter: grayscale(100%);
  
}
.myTest #imgA:hover {
  filter: none;
}
.myTest{
  background-color: #582707;
  border-radius: 200%;
  border: #582707 20px solid;
}

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
  #imgA {
    height: 100%;
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
