<template>
  <div class="right-banner">
    <div class="home-header-links">
      <a href="" class="waimai-link">美团外卖</a>
      <a class="maoyan-link">猫眼电影</a>
      <a href="" class="hotel-link">美团酒店</a>
      <a href="" class="homestay-link">民宿 / 公寓</a>
      <a href="" class="merchant-link">商家入驻</a>
      <a href="" class="fongyi-link">美团公益</a>
    </div>
    <div class="banner-row clearfix">
      <div class="item banner-slider shadow">
        <div class="slider" id="banner-slider">
          <el-carousel class="slider-content clearfix" height="240px">
            <!-- 轮播图 -->
            <el-carousel-item v-for="(item,index) in slideImgs" :key="index">
              <div class="slider-item">
                <a href="" class="link">
                  <!-- <div class="slider-img-div" :class="'bg'+index"
                    style="background-image: url(http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg);"
                  ></div> -->
                  <div class="slider-img-div" :style="`background-image: url(${item})`" ></div>
                </a>
              </div>
            </el-carousel-item>
            <!-- <div class="slider-item" style="transform:translate(-50%,-50%)">
              <a href="" class="link">
                <div class="slider-img-div" :class="{'bg0':sliderItemDisplay[0],'bg1':sliderItemDisplay[1],'bg2':sliderItemDisplay[2],'bg3':sliderItemDisplay[3],'bg4':sliderItemDisplay[4]}"
                style="transform:scale(0.5);width:1100px;height:480px;"></div>
              </a>
            </div> -->
            <!-- <div class="slider-item" style="left:-550px;" :class="{'sliderItemTrue':sliderItemDisplay[1],'sliderItemFalse':sliderItemDisplay[1]}">
              <a href="" class="link">
                <div class="slider-img-div" style="background-image: url(http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg);"></div>
              </a>
            </div> -->
            <!-- <div class="slider-item" style="left:-1100px;" :class="{'sliderItemTrue':sliderItemDisplay[2],'sliderItemFalse':sliderItemDisplay[2]}">
              <a href="" class="link">
                <div class="slider-img-div" style="background:url(http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg)"></div>
              </a>
            </div>
            <div class="slider-item" style="left:-1650px;" :class="{'sliderItemTrue':sliderItemDisplay[3],'sliderItemFalse':sliderItemDisplay[3]}">
              <a href="" class="link">
                <div class="slider-img-div" style="url(http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg)"></div>
              </a>
            </div>
            <div class="slider-item" style="left:-2200px;" :class="{'sliderItemTrue':sliderItemDisplay[4],'sliderItemFalse':sliderItemDisplay[4]}">
              <a href="" class="link">
                <div class="slider-img-div" style="url(https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png)"></div>
              </a>
            </div> -->
          </el-carousel>
          <!-- 页码  5个 -->
          <!-- <div class="slider-pagination">
            <div class="pagination" style="opacity:0.9;"></div>
            <div class="pagination" style="opacity:0.2;"></div>
            <div class="pagination" style="opacity:0.2;"></div>
            <div class="pagination" style="opacity:0.2;"></div>
            <div class="pagination" style="opacity:0.2;"></div>
          </div> -->
          <!-- <div class="btn btn-next">
            <i class="iconfont"></i>
          </div>
          <div class="btn btn-pre">
            <i class="iconfont"></i>
          </div> -->
        </div>
      </div>
      <a href="" class="link">
        <div class="item shadow pic-1" style="background-image:url(http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg)"></div>
      </a>
      <div class="item banner-logincard">
        <div>
          <div class="login-container">
            <!-- 未登录状态 -->
            <div class="default" style="display:none;">
              <div class="head-img-row">
                <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
              </div>
              <p class="user-name">Hi！你好</p>
              <a href="" class="btn-login">注册</a>
              <a href="" class="btn-login">立即登录</a>
            </div>
            <!-- 已登录状态 -->
            <div class="default" style="display:block;">
              <div class="setting">
                <a href="">
                  <div class="icon">
                    <i class="iconfont icon-setting-iconx">&#xe615;</i>
                  </div>
                </a>
              </div>
              <div class="head-img-row">
                <a href="">
                  <img src="https://s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
                </a>
              </div>
              <div class="nickname-row">
                <a href="">
                  <p class="user-name">Qxdfghdfhsgffskjh</p>
                </a>
                <a href="">
                  <i class="iconfont iconfont_level icon-lable_level_2">&#xe6ff;</i>
                </a>
              </div>
              <div class="fn-row clearfix">
                <div class="fn-item">
                  <a href="">
                    <div class="icon">
                      <i class="iconfont icon-collection_iconx">&#xe607;</i>
                    </div>
                    <p class="fn-name">我的订单</p>
                  </a>
                </div>
                <div class="fn-item">
                  <a href="">
                    <div class="icon">
                      <i class="iconfont icon-order_iconx">&#xe6dc;</i>
                    </div>
                    <p class="fn-name">我的收藏</p>
                  </a>
                </div>
                <div class="fn-item">
                  <a href="">
                    <div class="icon">
                      <i class="iconfont icon-ticket_iconx">&#xe606;</i>
                    </div>
                    <p class="fn-name">抵用券</p>
                  </a>
                </div>
              </div>
              <div class="fn-row clearfix">
                <div class="fn-item">
                  <a href="">
                    <div class="icon">
                      <i class="iconfont icon-money_iconx">&#xe680;</i>
                    </div>
                    <p class="fn-name">余额</p>
                  </a>
                </div>
                <div class="fn-item">
                  <a href="">
                    <div class="icon">
                      <i class="iconfont icon-more_iconx">&#xe636;</i>
                    </div>
                    <p class="fn-name">更多</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- pic-2 pic-3 pic-4 -->
    <div class="banner-row clearfix">
      <a href="" class="link">
        <div class="item shadow pic-2" style="background-image: url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png;"></div>
      </a>
      <a href="" class="link">
        <div class="item shadow pic-3" style="background-image: url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg;"></div>
      </a>
      <a href="" class="link">
        <div class="item shadow pic-4" style="background-image: url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg;"></div>
      </a>        
      <div class="item download-app">
        <div class="qrcode-box">
          <img src="https://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
        </div>
        <p class="app-name">美团APP手机版</p>
        <p class="sl">
          <span class="red">1元起</span>
          <span class="gary">吃喝玩乐</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slideImgs: ['http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
        'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
        'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
        'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
        'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
      ]
      // sliderItemDisplay: [false, true, false, false, false],
      // i: 0
    }
  },
};
</script>

<style lang="stylus" scoped>
@import '../../../../assets/stylus/icon.styl';
.right-banner
  float left
  margin-left 10px
  margin-top 10px
  position relative
  .home-header-links 
    position absolute
    top -45px
    left 20px
    a 
      color #222
      font-weight 700
      font-size 16px
      margin 0 20px
      cursor pointer
      position relative
      text-decoration none
  .clearfix:before,.clearfix:after 
    content ""
    visibility hidden
    display block
    height 0
    clear both
  .banner-row 
    .banner-slider 
      width 550px
      height 240px
      .slider 
        height 100%
        overflow hidden
        position relative
        width 550px
        .clearfix:after,.clearfix:before 
          content ""
          visibility hidden
          display block
          height 0
          clear both
        .slider-content 
          position relative
          height 100%
          width 550px
          transition left 0.5s
          transition-timing-function ease-out
          .slider-item 
            transition opacity 0.5s ease 0s
            float left
            position relative
            height 240px
            width 550px
            a 
              text-decoration none
              cursor pointer
              .slider-img-div 
                width 550px
                height 240px
                display inline-block
                background-repeat no-repeat
                background-position 50%
                background-size cover
              .bg0 
                background-image url('http//p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg')
              .bg1 
                background-image url('http//p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg')
              .bg2 
                background-image url('http//p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg') 
              .bg3 
                background-image url('http//p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg')

              .bg4 {
                background-image url('https//p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png')
        .slider-pagination 
          margin-left -45px
          position absolute
          z-index 99
          bottom 10px
          left 50%
          .pagination 
            float left
            width 10px
            height 2px
            margin-right 10px
            transition opacity 0.5s
            background rbg(255, 255, 255)
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
        .btn-next 
          right 10px
          i 
            color #fff
            text-align center
            font-size 20px
            line-height 40px
        .btn-pre 
          left 10px
          i 
            color #fff
            text-align center
            font-size 20px
            line-height 40px
        #banner-slider
          width 550px
    .item 
      float left
    .shadow
      transition box-shadow 0.5s
    a 
      text-decoration none
    .download-app 
      width 228px
      height 165px
      margin-top 10px
      background-color #fff
      border 1px solid #e5e5e5
      .qrcodebox 
        margin 10px auto 0 auto
        img 
          width 95px
          height 95px
      .app-name 
        font-size 16px
        color #222
        font-weight 500
      p 
        margin-top 0
        margin-bottom 0
      .sl 
        font-size 12px
        font-weight 500
        margin-top 2px
        .red 
          color #ec5330
          margin-right 5px
        .gary 
          color #3f3f3f
    .link 
      .pic-1 
        width 150px
        height 240px
        margin-left 10px
        margin-right 10px
        background-size 150px
        background-position 50%
        background-repeat no-repeat
        background-color #fff
      .pic-2, .pic-3 
        width 270px
        height 165px
        background-size 270px
        background-position 50%
        background-repeat no-repeat
        margin-top 10px
        margin-right 10px
      .pic-4 
        width 150px
        height 165px
        margin-top 10px
        margin-right 10px
        background-size 150px
        background-position 50%
        background-repeat no-repeat
        background-color #fff
    .banner-logincard 
      .login-container 
        width 228px
        height 238px
        background-color #fff
        border 1px solid #e5e5e5
        .default 
          padding-top 30px
          position relative
          .head-img-row 
            border-radius 30px
            margin 0 auto 4px auto
            img 
              width 47px
              height 47px
              border-radius 50%
              border 4px solid #e5e5e5
            a 
              text-decoration none
          .user-name 
            font-size 16px
            color #222
            text-align center
            font-weight 500
            white-space nowrap
            width 6em
            overflow hidden
            text-overflow ellipsis
            margin 0 auto
          .btn-login 
            width 118px
            text-align center
            margin 10px auto 15px auto
            background #fff
            border 1px solid #e5e5e5
            border-radius 40px
            font-size 14px
            color #333
            transition background-color 0.5s
            display block
            line-height 38px
          .setting
            position absolute
            top 5px
            right 5px
            a
              text-decoration none
              .icon
                float left
                margin-right 5px
                .icon-setting_iconx
                  font-size 24px
                  color #666
          .nickname-row
            position relative
            height 30px
            a
              text-decoration none
              .user-name
                font-size 16px
                color #222222
                text-align center
                font-weight 500
                word-spacing nowrap
                width 6em
                overflow hidden
                text-overflow ellipsis
                margin 0 auto
              .iconfont_level
                font-size 14px
                position relative
                top -20px
                left 55px
          .fn-row
            padding 0 15px
            .fn-item
              width 33.3%
              float left
              a
                text-decoration none
                .icon
                  .iconfont
                    color #ffc300
                    font-size 24px
                .fn-name
                  font-size 12px
                  color #222
                  margin 5px 0px
</style>