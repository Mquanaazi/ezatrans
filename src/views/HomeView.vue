<template>
  <div cass="header">
  <h1>WELCOME TO EZA EXPRESS (PTY) LTD</h1>
  </div>
    <div class="content">
        <HomeComp />
    </div>
</template>

<script>
import HomeComp from '../components/HomeComp.vue';  // Correct path
export default {
  components: {
    HomeComp
  }
};
</script>


<style scoped>
.header{
  justify-content: center;
  font-size: larger;
  /* justify-content: space-around; */
  color: rgb(2, 2, 41);
  
}


h1{
  margin-top: 5%
}

@media (max-width: 480px) {
  h1{
margin-top: 23%
}
}
</style>
