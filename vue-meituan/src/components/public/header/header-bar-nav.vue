<template>
  <nav class="header-bar-nav">
    <!-- 右侧导航栏 -->
    <ul class="header-nav-first">
      <li class="has-child">
        <a href rel="nofollow" target="_blank">我的美团</a>
        <ul class="header-nav-my header-nav-second">
          <a href rel="nofollow" target="_blank"></a>
          <li>
            <a href>我的订单</a>
          </li>
          <li>
            <a href>我的收藏</a>
          </li>
          <li>
            <a href>抵用券</a>
          </li>
          <li>
            <a href>账户设置</a>
          </li>
        </ul>
      </li>
      <li class="has-child">
        <a href>手机APP</a>
      </li>
      <li class="has-child">
        商家中心
        <ul class="header-nav-merchant header-nav-second">
          <li>
            <a href>登录商家中心</a>
          </li>
          <li>
            <a href>美团智能收银</a>
          </li>
          <li>
            <a href>我想合作</a>
          </li>
          <li>
            <a href>手机免费开店</a>
          </li>
          <li>
            <a href>餐饮代理商招募</a>
          </li>
          <li>
            <a href>商家申请开票</a>
          </li>
          <li>
            <a href>免费合作美团排队</a>
          </li>
        </ul>
      </li>
      <li class="has-child">
        美团规则
        <ul class="header-nav-my header-nav-second">
          <li>
            <a href>规则中心</a>
          </li>
          <li>
            <a href>规则目录</a>
          </li>
          <li>
            <a href>规则评议院</a>
          </li>
        </ul>
      </li>
      <li class="has-child">网站导航</li>
    </ul>
  </nav>
</template>

<script>
export default {
  
};
</script>

<style lang="stylus" scoped>
nav 
  display block
.header-bar-nav 
  float: right
  ul
    margin 0
    padding 0
  .header-nav-first
    .has-child
      float left
      position relative
      height 40px
      padding 12px 14px
      box-sizing border-box
      border-left 1px solid  transparent
      border-right 1px solid transparent
      .header-nav-second
        display none 
    .has-child:hover
      color #fe8c00
      background-color #fff
      border-color #e5e5e5
      box-shadow 0 3px 5px 0 rgba(0, 0, 0, 0.1)
      display block
      .header-nav-second
        display block
        width 100%
        position absolute
        border 1px solid #e5e5e5
        border-top 0
        right -1px
        background #fff
        text-align center
        z-index 1000
        top 95%
        box-shadow 0 3px 5px 0 rgba(0, 0, 0, 0.1)
        border-bottom-left-radius 4px
        border-bottom-right-radius 4px
        box-sizing content-box
      .header-nav-my
        width 100%
        position absolute
        border 1px solid #e5e5e5
        border-top 0
        right -1px
        background #fff
        text-align center
        z-index 1000
        top 95%
        box-shadow 0 3px 5px 0 rgba(0, 0, 0, 0.1)
        border-bottom-left-radius 4px
        border-bottom-right-radius 4px
        box-sizing content-box
        display block
      .header-nav-merchant
        display block
        width 140%
        border-top-left-radius 4px
        position absolute
        border 1px solid #e5e5e5
        border-top 0
        background #fff
        text-align center
        z-index 1000
        right -1px
        top 95%
        box-shadow 0 3px 5px 0 rgba(0, 0, 0, 0.1)
        border-bottom-left-radius 4px
        border-bottom-right-radius 4px
        box-sizing content-box
    li
      list-style none
      margin 0
      a
        text-decoration none
        color #999999
        display block
      a:hover
        color #fe8c00
      ul
        margin 0
        padding 0
        a
          display block
          line-height 35px
          text-decoration none
          color #999999
        a:hover
          color #fe8c00
        li
          list-style none
          margin 0
          padding 0
          a
          display block
          line-height 35px
          text-decoration none
          color #999999
          a:hover
            color #fe8c00
</style>