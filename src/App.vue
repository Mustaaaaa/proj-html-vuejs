<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<script>
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppMain,
    AppFooter,
    AppHeader,
  }
}
</script>
<style lang="scss">
</style>
