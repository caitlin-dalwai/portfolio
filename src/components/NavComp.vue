<!-- 
<template>
    <nav>
   
<ul class="nav justify-content-center">
    <li class="nav-item">
      <router-link  class="nav-link" :class="{ active: $route.path === '/' }" id="col" to="/">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :class="{ active: $route.path=== '/about' }" id="col" to="/about">About</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :class="{ active: $route.path=== '/skills' }" id="col" to="/skills">Skills</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :class="{ active: $route.path=== '/projects' }" id="col" to="/projects">Projects</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :class="{ active: $route.path=== '/testimonials' }" id="col" to="/testimonials">Testimonials</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :class="{ active: $route.path=== '/contact' }" id="col" to="/contact">Get in touch</router-link>
    </li>
    </ul>

    </nav>
    </template> 

    <style scoped>
    nav {
        background-color: #582707;

    }
    #col{
        color: #EAEFBD;
    }
    .active{
        
        text-decoration: underline;
        background-color:#697A21;
        border-radius:50%;
        color:#697A21; 
        
    }

</style> -->

<template>
  <nav class="navbar navbar-expand-md">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" style="background-color: white;"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="nav justify-content-center mx-auto">
        <li class="nav-item">
          <router-link class="nav-link"  :class="{ active: $route.path === '/' }" id="col" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="{ active: $route.path=== '/about' }" id="col" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="{ active: $route.path=== '/skills' }" id="col" to="/skills">Skills</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="{ active: $route.path=== '/projects' }" id="col" to="/projects">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="{ active: $route.path=== '/testimonials' }" id="col" to="/testimonials">Testimonials</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="{ active: $route.path=== '/contact' }" id="col" to="/contact">Get in touch</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  nav {
    background-color: #582707;
  }
  #col {
    color: #EAEFBD;
  }
  .active {
    text-decoration: underline;
    background-color: #697A21;
    border-radius: 50%;
    color: #697A21;
  }
  #col:hover {
    color: #697A21;
  }
  @media (max-width: 500px) and (min-width: 300px) {
    .navbar-expand-md {
      flex-direction: column;
    }
  }
</style>