<template>
  <AppHeader />
  <AppContent />
  <AppFooter />
</template>

<script>
import AppContent from './components/AppContent.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppContent,
    AppFooter,
    AppHeader,
  }
}
</script>
<style lang="scss">
@use './style/general.scss';
</style>
