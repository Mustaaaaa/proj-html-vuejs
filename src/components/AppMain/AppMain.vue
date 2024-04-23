<template>
  <div>
    <AppWelcome/>
    <AppOurServices/>
  </div>
</template>

<script>
import axios from 'axios';
import AppWelcome from './AppWelcome.vue';
import AppOurServices from './AppOurServices.vue';

export default {
  data() {
    return {
    };
  },

  components: {
    AppWelcome,
    AppOurServices,
  }
};
</script>

<style lang="scss"></style>
