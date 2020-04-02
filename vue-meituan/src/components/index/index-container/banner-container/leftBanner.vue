<template>
  <div class="left-banner">
    <div class="category-nav-container">
      <div class="category-nav-title-wrapper">
        <span class="category-nav-title">全部分类</span>
      </div>
      <div class="category-nav-content-wrapper">
        <ul>
          <li class="nav-li">
            <i class="iconfont" style="color:#ff8200">&#xe62f;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">美食</a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
          <li class="nav-li">
            <i class="iconfont" style="color:#FFB500">&#xe616;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">外卖</a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
          <li class="nav-li">
            <i class="iconfont" style="color:#9B5E3E">&#xe601;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">
                  酒店
                  <span class="nav-promotion">HOT</span>
                </a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
          <li class="nav-li">
            <i class="iconfont" style="color:#FFB500;">&#xe6b3;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">榛果民宿</a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
          <li class="nav-li">
            <i class="iconfont" style="color:#FF3D00;">&#xe602;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">猫眼电影</a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
          <li class="nav-li">
            <i class="iconfont" style="color:#03A9F4;">&#xe605;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">机票 / 火车票</a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
          <li class="nav-li">
            <i class="iconfont" style="color:#00BF96;">&#xe61e;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">休闲娱乐 / KTV</a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
          <li class="nav-li">
            <i class="iconfont" style="color:#00BF96;">&#xe630;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">生活服务</a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
          <li class="nav-li">
            <i class="iconfont" style="color:#FF4081;">&#xe6ca;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">丽人 / 美发 / 医学美容</a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
          <li class="nav-li">
            <i class="iconfont" style="color:#FF4081;">&#xe6e3;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">结婚 / 婚纱摄影 / 婚宴</a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
          <li class="nav-li">
            <i class="iconfont" style="color:#FF4081;">&#xe68d;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">亲子 / 儿童乐园 / 幼教</a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
          <li class="nav-li">
            <i class="iconfont" style="color:#03A9F4;">&#xe608;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">运动健身 / 健身中心</a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
          <li class="nav-li">
            <i class="iconfont" style="color:#00BF96;">&#xe628;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">家装 / 建材 / 家居</a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
          <li class="nav-li">
            <i class="iconfont" style="color:#00BF96;">&#xe811;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">学习培训 / 音乐培训</a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
          <li class="nav-li">
            <i class="iconfont" style="color:#03A9F4;">&#xe604;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">医疗健康 / 宠物 / 爱车</a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
          <li class="nav-li">
            <i class="iconfont" style="color:#00BF96;">&#xe611;</i>
            <span class="nav-text-wrapper">
              <span>
                <a href class="nav-text">酒吧 / 密室逃脱</a>
              </span>
              <i class="nav-right-arrow iconfont"></i>
            </span>
          </li>
        </ul>
      </div>
      <div class="category-nav-detail-wrapper"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '../../../../assets/stylus/icon.styl';
.left-banner
  float left
  .category-nav-container 
    width 230px
    height 475px
    position relative
    text-align left
    float left
    margin-top -50px
    color #646464
    background #fff
    box-sizing border-box
    border 1px solid #e5e5e5
    .category-nav-title-wrapper
      height 50px
      padding-top 15px
      box-sizing border-box
      .category-nav-title 
        color #222222
        font-size 16px
        font-weight 700
        margin-left 15px
    .category-nav-content-wrapper 
      ul 
        padding 10px 0px 8px
        height 425px
        box-sizing border-box
        display flex
        flex-direction column
        justify-content space-between
        margin 0
        .nav-li 
          position relative
          box-sizing border-box
          padding 2px 12px
          height 26px
        li 
          list-style none
          margin 0
          padding 0
          .iconfont 
            display inline-block
            width 16px
            height 16px
            font-size 16px
            vertical-align middle
            line-height 18px
          .nav-text-wrapper 
            display inline-block
            margin-left 11px
            span 
              a 
                text-decoration none
              .nav-text 
                font-size 13px
                line-height 20px
                height 20px
                color #646464
                cursor pointer
                .nav-promotion 
                  font-size 12px
                  color #222222
                  background #fff3cc
                  display inline-block
                  border-radius 10px
                  padding 0px 7px
                  margin-left 5px
                  transform scale(0.9)
                  position relative
                  opacity 1
          .nav-right-arrow 
            width 4px
            height 4px
            color #bfbfbf
            border-bottom 1px solid #bfbfbf
            border-right 1px solid #bfbfbf
            transform rotate(-45deg)
            display block
            position absolute
            right 13px
            top 0
            bottom 0
            margin 0
</style>