<template>
  <div class="offer-container">
    <div class="index-nav-container undefined"
    style="background-color:rgb(190, 164, 116);background-image:linear-gradient(to right, rgb(255, 113, 74) 2%,rgb(252, 66, 66) 97%);">
      <ul class="clearfix">
        <li class="title nav-item mf-shang-hei-regular">狠优惠</li>
        <li class="nav-item active">全部</li>
        <li class="nav-item">美食</li>
        <li class="nav-item">休闲</li>
      </ul>
    </div>
    <div class="cheap-area clearfix">
      <!-- card -->
      <a href="" class="link cheap-card">
        <div class="cheap-img">
          <img src="https://p0.meituan.net/deal/cd5fdafa9dd3dc6253b76da8d53111e651884.jpg@0_0_640_387a|388h_640w_2e_100Q|266w_150h_1e_1c" alt="" class="image">
        </div>
        <div class="poi-info">
          <div class="title" title="小肥羊">小肥羊</div>
          <div class="sub-title" title="[多城市]30元代金券1张">[多城市]30元代金券1张</div>
          <div class="tags-wrapper clearfix">
            <div class="tag" style="display:none;">退</div>
            <div class="tag" style="display:none;">改签</div>
          </div>
          <div class="price-info">
            <span class="current-price-wrapper">
              <span class="price-symbol numfont">￥</span>
              <span class="current-price numfont">1</span>
            </span>
            <span class="old-price">美团价￥30</span>
            <span class="sold">已售7175</span>
          </div>
        </div>
      </a>
      <!-- card2 -->
      <a href="" class="link cheap-card">
        <div class="cheap-img">
          <img src="https://p0.meituan.net/deal/cd5fdafa9dd3dc6253b76da8d53111e651884.jpg@0_0_640_387a|388h_640w_2e_100Q|266w_150h_1e_1c" alt="" class="image">
        </div>
        <div class="poi-info">
          <div class="title" title="小肥羊">小肥羊</div>
          <div class="sub-title" title="[多城市]30元代金券1张">[多城市]30元代金券1张</div>
          <div class="tags-wrapper clearfix">
            <div class="tag" style="display:none;">退</div>
            <div class="tag" style="display:none;">改签</div>
          </div>
          <div class="price-info">
            <span class="current-price-wrapper">
              <span class="price-symbol numfont">￥</span>
              <span class="current-price numfont">1</span>
            </span>
            <span class="old-price">美团价￥30</span>
            <span class="sold">已售7175</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.offer-container
  margin 0 auto 
  .index-nav-container
    width 100%
    height 44px
    line-height 44px
    box-sizing border-box
    font-size 14px
    color #ffffff
    border-top-right-radius 5px
    border-top-left-radius 5px
    ul
      margin 0
      padding 0
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
      .active:after
        position absolute
        border-left 5px solid transparent
        border-right 5px solid transparent
        border-bottom 7px solid #ffffff
        content ""
        display block
        width 2px
        height 0
        top 37px
        left 0
        right 0
        margin auto 
      .mf-shang-hei-regular
        font-family "MFShangHei-Regular" !important 
      li
        list-style none 
        padding 0
        margin 0
    .clearfix:after,.clearfix:before
      content " "
      visibility hidden
      display block
      height 0
      clear both
  .cheap-area
    width 100%
    margin 0 auto
    padding 6px 10px 10px 10px
    box-sizing border-box
    background-color #fff
    border 1px solid #e5e5e5
    border-top none 
    border-bottom-left-radius 4px
    border-bottom-right-radius 4px
    a
      text-decoration none 
    .cheap-card
      display block
      width 213px
      height 270px
      padding 10px
      float left
      background-color #fff
      -webkit-transition background-color 500ms
      transition background-color 500ms
      .cheap-img
        background url(https://p0.meituan.net/travelcube/214b8411190e874781fe91dd3096236211567.png)
        background-size 100% 100%
        background-position 50%
        max-width 100%
        height 120px
        margin-bottom 11px
        cursor pointer
        img 
          width 100%
          height 100%
          border-radius 4px
        .image
          bottom 0
      .poi-info
        text-align left 
        .title
          font-size 16px
          color #222222
          max-height 22px
          line-height 22px
          margin-bottom 6px
          font-weight 500
          white-space nowrap 
          overflow hidden
          text-overflow ellipsis
          cursor pointer
        .sub-title
          font-size 12px
          color #999999
          line-height 17px
          margin-bottom 10px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
        .tags-wrapper
          font-size 12px
          color #999999
          height 20px
          overflow hidden
          margin-bottom 10px
          .clearfix:after,.clearfix:before
            content " "
            visibility hidden
            display block
            height 0
            clear both
        .price-info
          height 27px
          overflow hidden
          margin-bottom 10px
          .current-price-wrapper
            cursor pointer
            .price-symbol
              font-size 14px
              color #ff6600
              font-weight 500
            .numfont
              font-family "numbers" !important 
              letter-spacing -0.5px
            .current-price
              font-size 22px
              color #ff6600
              margin-right 6px
              letter-spacing -0.8px
          .old-price
            font-size 12px
            color #999999
            text-decoration line-through
          .sold
            font-size 12px
            color #999999
            float right 
            margin-top 10px
  .clearfix:after,.clearfix:before
    content " "
    visibility hidden
    display block
    height 0
    clear both
</style>