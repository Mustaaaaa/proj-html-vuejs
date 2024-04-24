<template>
  <div>
    <AppWelcome/>
    <AppOurServices/>
    <AppCourses/>
    <AppEvents/>
  </div>
</template>

<script>
import axios from 'axios';
import AppWelcome from './AppWelcome.vue';
import AppOurServices from './AppOurServices.vue';
import AppCourses from './AppCourses/AppCourses.vue';
import AppEvents from './AppEvents/AppEvents.vue';


export default {
  data() {
    return {
    };
  },

  components: {
    AppWelcome,
    AppOurServices,
    AppCourses,
    AppEvents,
  }
};
</script>

<style lang="scss"></style>
