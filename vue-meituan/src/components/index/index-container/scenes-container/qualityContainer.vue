<template>
  <div class="quality-container">
    <div class="index-nav-container undefined"
    style="background-color:rgb(190, 164, 116);background-image:linear-gradient(to right, rgb(194, 176, 142) 3%,rgb(190, 164, 116) 100%);">
      <ul class="clearfix">
        <li class="title nav-item mf-shang-hei-regular">有格调</li>
        <li class="nav-item active">全部</li>
        <li class="nav-item">约会聚餐</li>
        <li class="nav-item">丽人SPA</li>
        <li class="nav-item">电影演出</li>
        <li class="nav-item">品质出游</li>
      </ul>
    </div>
    <div class="quality-area clearfix">
      <!-- 六个img -->
      <a href="" class="link quality-card">
        <div class="quality-img">
          <img src="https://p1.meituan.net/msmerchant/3f9e2b52da874359493c65e5299fcbe9414249.jpg@460w_260h_1e_1c" alt="" class="image">
        </div>
        <div class="poi-info">
          <div class="title" title="黄老大北京烤鸭（叠山路店）">黄老大北京烤鸭（叠山路店）</div>
          <div class="sub-title" title="整只精品烤鸭套餐，建议4-5人使用">整只精品烤鸭套餐，建议4-5人使用</div>
          <div class="price-info">
            <span class="current-price-wrapper">
              <span class="price-symbol numfont">￥</span>
              <span class="current-price numfont">113</span>
            </span>
            <span class="old-price">门市价￥188</span>
            <span class="sold bottom-right-info">滕王阁</span>
          </div>
        </div>
      </a>
      <a href="" class="link quality-card">
        <div class="quality-img">
          <img src="https://p1.meituan.net/msmerchant/3f9e2b52da874359493c65e5299fcbe9414249.jpg@460w_260h_1e_1c" alt="" class="image">
        </div>
        <div class="poi-info">
          <div class="title" title="黄老大北京烤鸭（叠山路店）">黄老大北京烤鸭（叠山路店）</div>
          <div class="sub-title" title="整只精品烤鸭套餐，建议4-5人使用">整只精品烤鸭套餐，建议4-5人使用</div>
          <div class="price-info">
            <span class="current-price-wrapper">
              <span class="price-symbol numfont">￥</span>
              <span class="current-price numfont">113</span>
            </span>
            <span class="old-price">门市价￥188</span>
            <span class="sold bottom-right-info">滕王阁</span>
          </div>
        </div>
      </a>
      <a href="" class="link quality-card">
        <div class="quality-img">
          <img src="https://p1.meituan.net/msmerchant/3f9e2b52da874359493c65e5299fcbe9414249.jpg@460w_260h_1e_1c" alt="" class="image">
        </div>
        <div class="poi-info">
          <div class="title" title="黄老大北京烤鸭（叠山路店）">黄老大北京烤鸭（叠山路店）</div>
          <div class="sub-title" title="整只精品烤鸭套餐，建议4-5人使用">整只精品烤鸭套餐，建议4-5人使用</div>
          <div class="price-info">
            <span class="current-price-wrapper">
              <span class="price-symbol numfont">￥</span>
              <span class="current-price numfont">113</span>
            </span>
            <span class="old-price">门市价￥188</span>
            <span class="sold bottom-right-info">滕王阁</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
};
</script>

<style lang="stylus" scoped>
.quality-container
  margin 40px auto 
  width 1190px
  .index-nav-container
    width 100%
    height 44px
    line-height 44px
    font-size 14px
    color #ffffff
    border-top-right-radius 5px
    border-top-left-radius 5px
    .title
      font-size 18px
      margin-left 13px
      margin-right 10px
    .nav-item
      float left
      padding 0 5px
      position relative
      cursor pointer
      text-transform uppercase
    .mf-shang-hei-regular
      font-family "MFShangHei-Regular" !important;
    .nav-item.active:before
      content ""
      position absolute
      border-left 5px solid transparent
      border-right 5px solid transparent
      border-bottom 5px solid #ffffff
      display block
      width 2px
      height 0
      top 37px
      left 0
      right 0
      margin auto
    li
      list-style none
      margin 0
      padding 0
    .clearfix:before,.clearfix:after
      content ""
      visibility hidden
      display block
      height 0
      clear both
  .quality-area
    width 100%
    padding 11px 10px 10px
    background-color #fff
    border-bottom-left-radius 4px
    border-bottom-right-radius 4px
    box-sizing border-box
    border 1px solid #e5e5e5
    border-top none 
    .quality-card
      width 33.3%
      height 314px
      padding 10px
      box-sizing border-box
      float left
      background #fff
      -webkit-transition background-color 500ms
      transition background-color 500ms
      .quality-img
        background url(https://p0.meituan.net/travelcube/214b8411190e874781fe91dd3096236211567.png)
        background-size cover
        background-position 50% 50%
        max-width 100%
        height 208px
        margin-bottom 11px
        cursor pointer
        .image
          border 0
        img 
          width 100%
          height 100%
          border-radius 4px
      .poi-info
        text-align left 
        .title
          font-size 16px
          color #222
          height 22px
          line-height 22px
          margin-bottom 8px
          font-weight nowrap 
          overflow hidden
          text-overflow ellipsis
          cursor pointer
        .sub-title
          font-size 12px
          color #999999
          line-height 18px
          margin-bottom 8px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
        .price-info
          height 27px
          overflow hidden
          margin-bottom 10px
          .current-price-wrapper
            cursor pointer
            .price-symbol
              font-size 14px
              color #be9e4d
              font-weight 500
            .current-price
              font-size 22px
              color #be9e4d
              margin-right 6px
              letter-spacing -0.8px
              cursor pointer
            .numfont
              font-family "numbers" !important
              letter-spacing -0.5px
          .old-price
            font-size 12px
            color #999999
            text-decoration line-through
          .bottom-right-info
            font-size 12px
            color #999999
            float right
            margin-top 10px
    a
      text-decoration none
  .clearfix:before,.clearfix:after
    content ""
    visibility hidden
    display block
    height 0
    clear both
</style>