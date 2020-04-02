<template>
  <header class="com-header">
    <div class="header-bar">
      <div class="header-content clearfix">
        <HeaderBarPosition />
        <HeaderBarNav />
      </div>
    </div>
    <div class="header-content clearfix">
      <HeaderTitle />
      <HeaderSearch />
    </div>
  </header>
</template>

<script>
import HeaderBarPosition from "./header-bar-position";
import HeaderBarNav from "./header-bar-nav";
import HeaderTitle from "./header-title-module";
import HeaderSearch from "./header-search-module";
export default {
  components: {
    HeaderBarPosition,
    HeaderBarNav,
    HeaderTitle,
    HeaderSearch
  }
};
</script>
<style lang="stylus" scoped>
.com-header
  background-color #fff
  .header-bar
    display: block;
    background: #f8f8f8;
    width: 100%;
    font-size: 12px;
    color: #999;
    height: 40px;
    .header-content 
      width: 1190px;
      margin: 0 auto;
      padding-bottom: 35px;
    .clearfix:before,.clearfix:after
      content: " ";
      visibility: hidden;
      display: block;
      height: 0;
      clear: both;
  .header-content
    width 1190px
    margin 0 auto
    padding-bottom 35px
  .clearfix:before,.clearfix:after
      content: " ";
      visibility: hidden;
      display: block;
      height: 0;
      clear: both;
</style>