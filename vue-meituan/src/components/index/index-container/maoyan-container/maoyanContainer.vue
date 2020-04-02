<template>
  <div class="maoyan-container">
    <div class="index-nav-container undefined"
    style="background:linear-gradient(to right, rgb(250, 60, 104) 2%,rgb(254, 70, 77) 97%) rgb(250, 60, 104);">
      <ul class="clearfix">
        <li class="title nav-item mf-shang-hei-regular">猫眼电影</li>
        <li class="nav-item active">正在热映</li>
        <li class="nav-item">即将上映</li>
        <li class="nav-item total">
          <a href="" class="link">
            <span>全部</span>
            <span class="right-arrow iconfont icon-btn_right">&#xe67f;</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="scenes-body">
      <!-- 正在热映 -->
      <div class="hot-container" style="display:block;">
        <div>
          <!-- 热映内容 -->
          <div class="slider">
            <!-- left: 0px;第一页时  left:-1165px;第二页时 -->
            <div class="slider-content clearfix" style="left:0px;margin:0px 12px;">
              <div class="slider-item-film">
                <a href="" class="link">
                  <img src="https://p0.meituan.net/movie/ecca4f0b95340b2c57006a1bace4c3f91386100.jpg@267w_371h_1e_1c" alt="" class="image film-img">
                  <img style="display:inline-block;" src="https://s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png" alt="" class="film-mark">
                  <div class="film-info">
                    <p class="film-score">
                      <b>
                        "观众评"
                        <span>9</span>
                      </b>
                    </p>
                    <p class="film-name">天气之子</p>
                    <span class="buy-ticket">购票</span>
                  </div>
                </a>
              </div>
            </div>
            <div class="btn btn-next" style="right:0px;">
              <i class="iconfont icon-btn_right">&#xe67f;</i>
            </div>
            <div class="btn btn-pre" style="left:0px;">
              <i class="iconfont icon-btn_left">&#xe6a6;</i>
            </div>
          </div>
          <div class="slider-pagination" id="maoyan-page" style="margin-left:0px;">
            <div class="pagination" style="opacity: 0.2;"></div>
            <div class="pagination" style="opacity: 0.9;"></div>
          </div>
        </div>
      </div>
      <!-- 即将上映 -->
      <div class="coming-container" style="display:none;">
        <div class="slider">
          <div class="slider-content clearfix">
            <div class="slider-item-film">
              <a href="" class="link">
                <img src="https://p1.meituan.net/movie/1cd7eccdeea4c443702b19bea0ba2ba52160055.jpg@267w_371h_1e_1c" alt="" class="image film-img">
                <img src="" alt="" class="film-mark" style="display:none">
                <div class="film-info">
                  <p class="film-score">
                    <b>
                      <span>67787</span>"  人想看"
                    </b>
                  </p>
                  <p class="film-name">大约在冬季</p>
                  <span class="buy-ticket">预售</span>
                </div>
              </a>
            </div>
          </div>
          <div class="btn btn-next" style="right:0px;">
            <i class="iconfont icon-btn_right">&#xe67f;</i>
          </div>
          <div class="btn btn-pre" style="left:0px;">
            <i class="iconfont icon-btn_left">&#xe6a6;</i>
          </div>
        </div>
        <div class="slider-pagination" id="maoyan-page" style="margin-left:-15px;">
          <div class="pagination" style="opacity: 0.9;"></div>
          <div class="pagination" style="opacity: 0.2;"></div>
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
.maoyan-container
  position relative
  margin-left auto 
  margin-right auto 
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
        font-family "MFShangHei-Regular"
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
  .scenes-body
    background-color #fff
    padding 20px 10px
    border 1px solid #e5e5e5
    border-top none
    position relative
    .slider
      width 100%
      height 100%
      overflow hidden 
      position relative
      .slider-content
        position relative
        height 100%
        transition left 0.5s
        transition-timing-function ease-out
        width 100000px
        .slider-item-film
          height 297px
          width 214px
          float left
          margin-right 19px
          background-size 100%
          background-repeat no-repeat
          background-position 50%
          position relative
          a
            text-decoration none 
          .link
            .film-img
              border-radius 4px
              width 100%
              border 0px
            .film-mark
              position absolute
              top 10px
              z-index 99
              left -6px
              height 20px
              box-shadow 0 2px 6px 0 rgba(0, 0, 0, 20)
              width auto
              border 0px
            .film-info
              height 100px
              width 100%
              position absolute
              bottom 0
              border-bottom-left-radius 4px
              border-bottom-right-radius 4px
              background-image linear-gradient(-180deg, rgba(0,0,0,0.00)0%, rgba(29,45,55,0.8)99%)
              .film-score
                font-size 12px
                color #ffffff
                text-align left 
                margin-top 48px
                padding-left 10px
                font-weight 500
                b
                  font-weight bold
                  span
                    font-size 16px
                    color #fd9827
                    font-weight 500
              .film-name
                text-align left 
                color #ffffff
                padding-left 10px
                font-size 16px
                white-space nowrap
                width 6em
                overflow hidden
                text-overflow ellipsis
                font-weight 500
              .buy-ticket
                background #ff4949
                border-radius 100px
                color #ffffff
                padding 2px 12px 3px 12px
                font-size 14px
                position relative
                top -24px
                cursor pointer
                line-height 20px
                text-align center
                float right
                right 10px
              p
                margin-top 0
                margin-bottom 0
      .clearfix:after,.clearfix:before
        content ""
        visibility hidden
        display block
        height 0
        clear both
      .btn
        width 40px
        height 40px
        background #333
        position absolute
        z-index 99
        top 43%
        border-radius 40px
        opacity 0
        transition opacity 0.5s
        transform scale(0.95)
        .iconfont
          color #ffffff
          text-align center
          font-size 20px
          line-height 40px
    .slider:hover>.btn
      opacity 0.8
      transition opacity 0.5s
    .slider-pagination
      position absolute
      z-index 99
      bottom 8px
      left 50%
      .pagination
        float left
        width 10px
        height 2px
        margin-right 10px
        transition opacity 0.5s
        background #333
</style>