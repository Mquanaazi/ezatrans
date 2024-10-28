<template>
    <div>
        <h1>Our Services</h1>
        <ServicesComp />
    </div>
</template>

<script>
import ServiceComp from '../components/ServiceComp.vue';  // Correct path
export default {
  components: {
    ServiceComp
  }
};
</script>



<style scoped>
/* Add styles specific to ServicesView if needed */
</style>
