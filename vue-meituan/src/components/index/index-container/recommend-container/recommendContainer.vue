<template>
  <div class="recommend-container">
    <div class="index-nav-container undefined"
    style="background:linear-gradient(to right, rgb(88, 174, 221) 2%,rgb(66, 191, 205) 97%) rgb(88, 174, 221);">
      <ul class="clearfix">
        <li class="title nav-item mf-shang-hei-regular">猜你喜欢</li>
        <li class="nav-item active">为你甄选最合适的</li>
      </ul>
    </div>
    <div class="recommend-list">
      <a href="" class="link recommend-item">
        <div class="card-container">
          <div class="recommend-card-wrapper">
            <div class="img-box">
              <img src="https://p0.meituan.net/msmerchant/526235ea490f56d823cd05eab59ce559367109.jpg@267w_150h_1e_1c" alt="" class="image">
            </div>
            <div class="info-box">
              <div class="title aligned" title="川西坝子">川西坝子（红谷滩店）</div>
              <div class="score-line aligned">
                <div class="score">
                  <div class="rate-stars">
                    <ul class="rate-stars-ul rate-stars-dark">
                      <li>
                        <i class="iconfont icon-star_icon">&#xe65f;</i>
                      </li>
                      <li>
                        <i class="iconfont icon-star_icon">&#xe65f;</i>
                      </li>
                      <li>
                        <i class="iconfont icon-star_icon">&#xe65f;</i>
                      </li>
                      <li>
                        <i class="iconfont icon-star_icon">&#xe65f;</i>
                      </li>
                      <li>
                        <i class="iconfont icon-star_icon">&#xe65f;</i>
                      </li>
                    </ul>
                    <!-- 通过控制width:64%;三星  来控制星级 -->
                    <ul class="rate-stars-ul rate-stars-light" style="width: 100%;">
                      <li>
                        <i class="iconfont icon-star_icon">&#xe65f;</i>
                      </li>
                      <li>
                        <i class="iconfont icon-star_icon">&#xe65f;</i>
                      </li>
                      <li>
                        <i class="iconfont icon-star_icon">&#xe65f;</i>
                      </li>
                      <li>
                        <i class="iconfont icon-star_icon">&#xe65f;</i>
                      </li>
                      <li>
                        <i class="iconfont icon-star_icon">&#xe65f;</i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="comment-number">
                  833
                  个评价
                </div>
              </div>
              <div class="desc-line aligned">
                <div class="desc">名门世家</div>
              </div>
              <div class="bottom-line aligned">
                <div class="price-box">
                  <span>
                    <span class="yuan">￥</span>
                    <span class="price-number numfont">89.0</span>
                    <span class="price-desc">起</span>
                  </span>
                </div>
              </div>
            </div>
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
@import '../../../../assets/stylus/icon.styl';
.recommend-container
  width 100%
  margin-top 40px
  margin-right auto
  margin-left auto
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
    .clearfix:after,.clearfix:before
      content ""
      visibility hidden
      display block
      height 0
      clear both
  .recommend-list
    background-color #fff
    border 1px solid #e5e5e5
    border-top 0
    border-bottom-left-radius 4px
    border-bottom-right-radius 4px
    max-height 758px
    padding 10px 10px 20px
    width 100%
    box-sizing border-box
    overflow-y hidden
    text-align left 
    .recommend-item
      display inline-block
      width 20%
      box-sizing border-box
      vertical-align middle
      .card-container
        padding 10px
        .recommend-card-wrapper
          width 100%
          box-sizing border-box
          .img-box
            height 0
            width 100%
            padding-bottom 56.25%
            background-color #f4f4f4
            background-image url(https://p0.meituan.net/travelcube/214b8411190e874781fe91dd3096236211567.png)
            background-size cover
            background-position 50% 50%
            border-radius 4px
            overflow hidden
            img 
              width 100%
          .info-box
            position relative
            margin-top 10px
            .title
              font-size 16px
              line-height 22px
              height 22px
              width 100%
              text-overflow ellipsis 
              overflow hidden
              white-space nowrap
              color #222222
            .score-line
              height 24px
              .score
                display inline-block
                .rate-stars
                  display inline-block
                  width 84px
                  height 24px
                  position relative
                  .rate-stars-dark
                    color #c3c3c3
                  ul
                    margin 0
                    padding 0
                  .rate-stars-ul
                    list-style none 
                    padding 0
                    text-align left 
                    margin 3px 0
                    white-space nowrap
                    li
                      display inline-block
                      list-style none 
                      margin 0
                      .iconfont
                        font-family "iconfont" !important 
                        font-size 12px
                        font-style normal
                        -webkit-font-smoothimg antialiased 
                  .rate-stars-light
                    color #ff9900
                    position absolute
                    top 0
                    overflow hidden
              .comment-number
                display inline-block
                font-size 12px
                color #999999
                height 24px
                line-height 24px
                margin-left 10px
            .desc-line
              height 18px
              .desc
                font-size 12px
                color #999999
                width 100%
                height 18px
                line-height 18px
                overflow hidden
                white-space nowrap
                margin-top 4px
            .bottom-line
              position relative
              height 28px
              .price-box
                color #ff6600
                display inline-block
                .yuan
                  font-size 14px
                  font-weight 700
                .price-number
                  font-size 22px
                .numfont
                  font-family "numbers" !important 
                  letter-spacing -0.5px
                .price-desc
                  font-size 12px
                  margin-left 4px
                  font-weight 700
    a
      text-decoration none 
</style>