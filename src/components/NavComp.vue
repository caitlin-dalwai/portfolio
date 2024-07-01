
<template>
    <nav>
        <!-- <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01"> -->
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
    <!-- </div>  
</div> -->
    </nav>
    </template> 

    <style>
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

</style>