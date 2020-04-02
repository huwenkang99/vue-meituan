<template>
  <div class="index">
    <div class="index-container">
      <BannerContainer />
      <SecenesContainer />
      <MaoyanContainer />
      <ZhengguoContainer />
      <RecommendContainer />
    </div>
  </div>
</template>

<script>
import BannerContainer from './banner-container/bannerContainer'
import SecenesContainer from './scenes-container/scenesContainer'
import MaoyanContainer from './maoyan-container/maoyanContainer'
import ZhengguoContainer from './zhenguo-container/zhenguoContainer'
import RecommendContainer from './recommend-container/recommendContainer'
export default {
  components: {
    BannerContainer,
    SecenesContainer,
    MaoyanContainer,
    ZhengguoContainer,
    RecommendContainer
  }
}
</script>

<style lang="stylus" >
.index
  text-align center
  .index-container
    margin 0 auto
    width 1190px
</style>