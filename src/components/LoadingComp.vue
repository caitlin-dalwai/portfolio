<template>
    <div class="loading">
      <div class="shake animated fast delay-2s">
<img class="tree animated delay-1s fadeInUp faster" src="http://www.clker.com/cliparts/Z/Q/1/5/y/e/green-tree-md.png" alt="Green Tree that animates into the page and then shakes">
<h1>Loading...</h1>
</div>
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
  body{
  background-color:#582707;
 
}

img{
  width:100px;
}
  
  </style>
  