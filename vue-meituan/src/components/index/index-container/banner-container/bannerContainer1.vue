<template>
  <div class="banner-container clearfix">
    <!-- 全部分类 -->
    <!-- <div class="left-banners"> -->
      <LeftBanner />
    <!-- </div> -->
    <!-- <div class="right-banners"> -->
      <RightBanner />
    <!-- </div> -->
  </div>
</template>

<script>
import LeftBanner from './leftBanner'
import RightBanner from './rightBanner'
export default {
  data() {
    return {
      slideImgs: ['http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
        'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
        'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
        'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
        'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
      ],
      // sliderItemDisplay: [false, true, false, false, false],
      // i: 0
    }
  },
  components: {
    LeftBanner,
    RightBanner
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../assets/stylus/icon.styl';
.clearfix:before,.clearfix:after
  content " "
  visibility hidden
  display block
  height 0
  clear both
.banner-container
  width 1190px
  margin 0 auto
  position relative
</style>