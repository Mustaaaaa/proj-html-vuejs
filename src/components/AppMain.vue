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
import AppWelcome from './AppMain/AppWelcome.vue';
import AppOurServices from './AppMain/AppOurServices.vue';
import AppCourses from './AppMain/AppCourses/AppCourses.vue';
import AppEvents from './AppMain/AppEvents/AppEvents.vue';


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

<style lang="scss">
@use '../style/general.scss';
</style>
