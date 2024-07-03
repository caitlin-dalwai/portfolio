<!-- <template>
    <div>
       <h1>Hello</h1> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    body{
        background-color: red;
    }
</style> -->

<template>
    <div class="loading">
      <h1>Loading...</h1>
      <!-- You can add additional loading indicators or animations here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoadingComp'
  }
  </script>
  
  <style scoped>
  .loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .loading h1 {
    font-size: 24px;
    color: #333;
  }
  </style>
  