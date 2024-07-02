<template>
  <div>
  <h1 class="animate__animated animate__slideInDown" id="headH" style="font-weight:bolder; color:black;">CAITLIN DALWAI</h1>
  <h3 class="animate__animated animate__slideInLeft" style="color:black;">Aspiring full-stack developer</h3>
    <div class="growing"><router-link class="animate__animated animate__rollIn text-success" to='projects' >Checkout my Growth</router-link></div><div class="growing1"></div>

  </div>
  
</template>
<script>
export default {
  
}
</script>
<style scoped>
  body {
  margin:0;
  height:100vh;
  display:grid;
  place-items:center;
  background:lightblue;
  overflow:hidden;
}
#headH{
  margin-top:15%;
}
.growing {
  width:150px;
  height:150px;
  position:absolute;
  clip-path:inset(-100vh 0);
  right:0;
}
.growing1 {
  width:150px;
  height:150px;
  position:absolute;
  clip-path:inset(-100vh 0);
  left:0;
}

.growing:before {
  content:"";
  display:block;
  width:400%;
  height:100%;
  background:
    /*1*/
    radial-gradient(farthest-side,#639510 97%,#0000) 12.5% 65%/12px 9px,
    linear-gradient(#996b52 0 0) 9% 80%/9.4% 9%,
    linear-gradient(#996b52 0 0) 10% 100%/7% 25%,
    linear-gradient(#639510 0 0) 12.5% 100%/5px 36%,   
    /*2*/    
    radial-gradient(farthest-side,#639510 97%,#0000) 35.5% 50%/15px 10px,
    radial-gradient(farthest-side,#639510 97%,#0000) 38% 64%/15px 10px ,
    linear-gradient(#996b52 0 0) 35.5% 80%/9.4% 9%,
    linear-gradient(#996b52 0 0) 36% 100%/7% 25%,
    linear-gradient(#639510 0 0) 37% 100%/5px 52%,    
    /*3*/
    radial-gradient(farthest-side,#fb3e4c 98%,#0000) 64.5% 40.5%/10px 9px,
    radial-gradient(farthest-side at bottom,#0000 calc(100% - 5px),#639510 0 100%,#0000)63.6% 34%/20px 10px,
    radial-gradient(farthest-side,#639510 97%,#0000) 61% 50%/15px 10px,
    radial-gradient(farthest-side,#639510 97%,#0000) 63.5% 64%/15px 10px ,
    linear-gradient(#996b52 0 0) 63.5% 80%/9.4% 9%,
    linear-gradient(#996b52 0 0) 63.1% 100%/7% 25%,
    linear-gradient(#639510 0 0) 62% 100%/5px 62%,
    /*4*/
    radial-gradient(farthest-side at 50% 4px,#fb3e4c 98%,#0000) 88.1% 17.5%/17px 13px,
    radial-gradient(farthest-side,#639510 97%,#0000) 87% 50%/15px 10px,
    radial-gradient(farthest-side,#639510 97%,#0000) 89.5% 38%/15px 10px,
    radial-gradient(farthest-side,#639510 97%,#0000) 89.5% 64%/15px 10px,
    linear-gradient(#996b52 0 0) 91% 80%/9.4% 9%,
    linear-gradient(#996b52 0 0) 90% 100%/7% 25%,
    linear-gradient(#639510 0 0) 87.5% 100%/5px 77%;
  background-repeat:no-repeat;
  animation:m 15s .16s both;
}
.growing:after {
    content: "";
    position: absolute;
    inset: -100vh 49px 42px 54px;
    background: 
      conic-gradient(at 2px 50%,#0000 270deg,#fff 0)0 0/8px 10px,
      conic-gradient(at 2px 50%,#0000 270deg,#fff 0)4px 5px/8px 10px;
  animation:s 15s .16s both;
}
.growing1:before {
  content:"";
  display:block;
  width:400%;
  height:100%;
  background:
    /*1*/
    radial-gradient(farthest-side,#639510 97%,#0000) 12.5% 65%/12px 9px,
    linear-gradient(#996b52 0 0) 9% 80%/9.4% 9%,
    linear-gradient(#996b52 0 0) 10% 100%/7% 25%,
    linear-gradient(#639510 0 0) 12.5% 100%/5px 36%,   
    /*2*/    
    radial-gradient(farthest-side,#639510 97%,#0000) 35.5% 50%/15px 10px,
    radial-gradient(farthest-side,#639510 97%,#0000) 38% 64%/15px 10px ,
    linear-gradient(#996b52 0 0) 35.5% 80%/9.4% 9%,
    linear-gradient(#996b52 0 0) 36% 100%/7% 25%,
    linear-gradient(#639510 0 0) 37% 100%/5px 52%,    
    /*3*/
    radial-gradient(farthest-side,#fb3e4c 98%,#0000) 64.5% 40.5%/10px 9px,
    radial-gradient(farthest-side at bottom,#0000 calc(100% - 5px),#639510 0 100%,#0000)63.6% 34%/20px 10px,
    radial-gradient(farthest-side,#639510 97%,#0000) 61% 50%/15px 10px,
    radial-gradient(farthest-side,#639510 97%,#0000) 63.5% 64%/15px 10px ,
    linear-gradient(#996b52 0 0) 63.5% 80%/9.4% 9%,
    linear-gradient(#996b52 0 0) 63.1% 100%/7% 25%,
    linear-gradient(#639510 0 0) 62% 100%/5px 62%,
    /*4*/
    radial-gradient(farthest-side at 50% 4px,#fb3e4c 98%,#0000) 88.1% 17.5%/17px 13px,
    radial-gradient(farthest-side,#639510 97%,#0000) 87% 50%/15px 10px,
    radial-gradient(farthest-side,#639510 97%,#0000) 89.5% 38%/15px 10px,
    radial-gradient(farthest-side,#639510 97%,#0000) 89.5% 64%/15px 10px,
    linear-gradient(#996b52 0 0) 91% 80%/9.4% 9%,
    linear-gradient(#996b52 0 0) 90% 100%/7% 25%,
    linear-gradient(#639510 0 0) 87.5% 100%/5px 77%;
  background-repeat:no-repeat;
  animation:m 15s .16s both;
}
.growing1:after {
    content: "";
    position: absolute;
    inset: -100vh 49px 42px 54px;
    background: 
      conic-gradient(at 2px 50%,#0000 270deg,#fff 0)0 0/8px 10px,
      conic-gradient(at 2px 50%,#0000 270deg,#fff 0)4px 5px/8px 10px;
  animation:s 15s .16s both;
}

@keyframes m{
  0%,20%  {transform:translate(0%)}
  33.33%,53.33% {transform:translate(-24%)}
  66.66%,86.66% {transform:translate(-49.5%)}
  100%{transform:translate(-74.5%)}
}

@keyframes s {
  0% {inset: -100vh 49px 100vh 54px}
  10% {inset: -100vh 49px 42px 54px;opacity:1}
  20% {inset: -100vh 49px 42px 54px;opacity:0}
  20.01%,
  33.33% {inset: -100vh 49px 100vh 54px;opacity:1}
  43.33% {inset: -100vh 49px 42px 54px;opacity:1}
  53.33% {inset: -100vh 49px 42px 54px;opacity:0}
  53.34%,
  66.66% {inset: -100vh 49px 100vh 54px;opacity:1}
  76.66% {inset: -100vh 49px 42px 54px;opacity:1}
  86.66%,
  100%{inset: -100vh 49px 42px 54px;opacity:0}
}
</style>
