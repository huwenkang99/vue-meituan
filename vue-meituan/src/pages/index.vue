<template>
  <div>
    <HeaderBar />
    <indexContainer />
  </div>
</template>

<script>
import HeaderBar from "@/components/public/header/header-bar";
import indexContainer from "@/components/index/index-container/indexContainer.vue";
export default {
  components: {
    HeaderBar,
    indexContainer
  }
};
</script>

<style lang="stylus">
</style>