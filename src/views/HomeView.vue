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
  color: rgb(2, 2, 41);
 
  
}
</style>
