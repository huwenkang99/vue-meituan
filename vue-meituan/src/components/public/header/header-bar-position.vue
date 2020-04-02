<template>
    <!-- 城市 登录 注册功能 -->
  <div class="header-bar-position">
    <!-- 定位icon -->
    <i class="header-icon icon-header_location iconfont">&#xe600;</i>
    <span class="current-city">南昌</span>
    <a href="" class="change-city">切换城市</a>
    <!-- 附近城市 -->
    <div class="near-citys">[
      <a class="city-guess" href="https://fengxin.meituan.com">奉新</a>
      <a class="city-guess" href="https://gongqingcheng.meituan.com">共青城</a>
      <a class="city-guess" href="https://fch.meituan.com">丰城</a>]
    </div>
    <!-- 注册登录 -->
    <div class="user-entry">
      <a href="" class="growth-entry user-up">立即登录</a>
      <a class="extra-entry">注册</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="stylus" scoped>
@import '../../../assets/stylus/icon.styl';
.header-bar-position
  display block
  height 28px
  float left
  padding-top 12px
  .header-icon
    font-size 12px
  .current-city
    color #666
  .change-city
    background #f4f4f4
    border 1px solid #e5e5e5
    border-radius 2px
    color #666
    margin 0 4px
    padding 0 2px
  a
    text-decoration none
  .near-citys
    display inline-block
    .city-guess
      margin 0 4px
    a
      text-decoration none
      color #999
      cursor auto
  .user-entry
    display inline-block
    margin-left 15px
    .user-up
      color #fe8c00
    a
      margin-left 10px
      text-decoration none
      cursor auto
      color #999
    .extra-entry
      margin-left 10px
</style>