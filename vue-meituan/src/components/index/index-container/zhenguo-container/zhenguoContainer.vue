<template>
  <div class="zhengguo-container">
    <div class="index-nav-container undefined"
    style="background:linear-gradient(to right, rgb(243, 182, 74) 2%,rgb(242, 197, 69) 97%) rgb(243, 182, 74);">
      <ul class="clearfix">
        <li class="title nav-item mf-shang-hei-regular">推荐民宿</li>
        <li class="nav-item active">武汉</li>
        <li class="nav-item">南京</li>
        <li class="nav-item">长沙</li>
        <li class="nav-item">杭州</li>
        <li class="nav-item">合肥</li>
        <li class="nav-item total">
          <a href="" class="link">
            <span>全部</span>
            <span class="right-arrow iconfont icon-btn_right">&#xe67f;</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="minsu-ls-view clearfix">
      <div class="products" style="display: flex;">
        <div class="minsu-item">
          <a href="">
            <div class="product-card-header">
              <img src="https://img.meituan.net/phoenix/e67229e91ba83a06b7a2e48b1bbafe51265077.jpg@740w_416h_1e_1c" alt="" class="product-img">
              <img src="https://img.meituan.net/avatar/fd4729a17b82de627b75e145dc01047410781.jpg@200w_200h_1e_1c" alt="" class="head-img">
            </div>
            <div class="product-info">
              <p class="product-title">地铁口旁/近武汉站/欢乐谷/玛雅海滩/武汉科技大学/武汉大学正门/独立整套青年公寓</p>
              <p class="sub-title">
                <span>
                  整套 1 居室
                </span>
                <span>
                  可住 3 人 |
                </span>
                <span>欢乐大道/仁和路</span>
              </p>
              <p class="price-number numfont price">
                <span class="price-icon">￥</span>
                138
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style lang="stylus" scoped>
@import '../../../../assets/stylus/icon.styl';
.zhengguo-container
  position relative
  margin 40px auto
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
      li
        list-style none 
        padding 0
        margin 0
      .mf-shang-hei-regular
        font-family "MFShangHei-Regular" !important 
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
      .total
        float right
        margin-right 12px
        a
          text-decoration none 
          color #ffffff
        .link
          .right-arrow
            display inline-block
            transform scale(0.8)
    .clearfix:after,.clearfix:before
      content ""
      visibility hidden
      display block
      height 0
      clear both
  .minsu-ls-view
    padding 20px
    padding-right 0
    padding-bottom 0
    border 1px solid #e5e5e5
    border-top 0
    border-bottom-left-radius 4px
    border-bottom-right-radius 4px
    background #fff
    .products
      display flex
      flex-wrap wrap
      .minsu-item
        float 
        margin-right 18px
        a
          text-decoration none 
          .product-card-header
            position relative
            .product-img
              width 370px
              height 208px
              border-radius 4px
              background url(http://p0.meituan.net/travelcube/214b8411190e874781fe91dd3096236211567.png)
              background-size cover
              background-position 50%
              max-width 100%
              height 208px
              margin-bottom 11px
              cursor pointer
            .head-img
              border 2px solid #ffffff
              height 48px
              width 48px
              position absolute
              bottom -12px
              right 15px
              z-index 9
              border-radius 40px
              background-image url(https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png)
              background-size 100%
              background-position 50% 50%
              background-repeat no-repeat
          .product-info
            text-align left 
            padding-bottom 25px
            .product-title
              font-size 16px
              color #222222
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              margin 7px 0
              font-weight 400
              width 297px
            .sub-title
              font-size 12px
              color #999999
              text-align left 
            p
              margin-top 0
              margin-bottom 0
            .price
              font-weight 500
              font-size 22px
              color #ff6600
              letter-spacing -0.8px
              padding 4px 0
              .price-icon
                font-size 14px
  .clearfix:after,.clearfix:before
    content ""
    visibility hidden
    display block
    height 0
    clear both
</style>