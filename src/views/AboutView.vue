<template>
    <div>
        <h1>About Us</h1>
        <AboutComp />
    </div>
</template>

<script>
import AboutComp from '../components/AboutComp.vue';  // Correct path to the component
export default {
  components: {
    AboutComp
  }
};
</script>

<style scoped>
/* Add styles specific to AboutView if needed */
</style>
