<template>
  <div>
    <AppWelcome/>
    <AppOurServices/>
    <AppCourses/>
  </div>
</template>

<script>
import axios from 'axios';
import AppWelcome from './AppWelcome.vue';
import AppOurServices from './AppOurServices.vue';
import AppCourses from './AppCourses/AppCourses.vue';


export default {
  data() {
    return {
    };
  },

  components: {
    AppWelcome,
    AppOurServices,
    AppCourses,
  }
};
</script>

<style lang="scss"></style>
