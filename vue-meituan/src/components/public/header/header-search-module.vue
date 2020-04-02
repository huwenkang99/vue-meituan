<template>
  <div class="header-search-module">
    <!-- 未点击 未输入状态 -->
    <div class="header-search-block">
      <input type="text" class="header-search-input" placeholder="搜索商家或地点">
      <!--右侧的搜索按钮 -->
      <button class="header-search-btn">
        <i class="header-icon icon-search-new iconfont">&#xe603;</i>
      </button>
    </div>
    <div class="header-search-suggest" style="display:none;">
      <!-- 有点击输入框 但是未输入内容 -->
      <div class="header-search-noinput">
        <div class="header-search-history" style="display:block;">
          <h6>最近搜索</h6>
          <span class="header-search-clean">删除搜索历史</span>
          <ul>
            <li>
              <a href="">老三样</a>
            </li>
            <li>
              <a href="">奈雪の茶</a>
            </li>
          </ul>
        </div>
        <h6>热门搜索</h6>
        <div class="header-search-hotword">
          <a href="">老三样</a>
          <a href="">南昌融创乐园 原万达主题乐园</a>
          <a href="">亚马逊环球美食百汇</a>
          <a href="">奈雪の茶</a>
          <a href="">LIFE酒吧</a>
          <a href="">方糖KTV</a>
          <a href="">南昌华侨城玛雅乐园</a>
          <a href="">滕王阁夜游《滕王宴乐》</a>
        </div>
      </div>
      <!-- 有点击输入框 也有输入内容 -->
      <div class="header-search-hasinput" style="display:none;">
        <ul>
          <!-- 搜索推荐的内容 -->
          <li>
            <a href="">光谷广场</a>
          </li>
          <li>
            <a href="">古埂公园</a>
          </li>
        </ul>
      </div>
    </div>
    <!-- 搜索热词 -->
    <div class="header-search-hotword">
      <a href="">老三样</a>
      <a href="">南昌融创乐园 原万达主题乐园</a>
      <a href="">亚马逊环球美食百汇</a>
      <a href="">奈雪の茶</a>
      <a href="">LIFE酒吧</a>
      <a href="">方糖KTV</a>
      <a href="">南昌华侨城玛雅乐园</a>
      <a href="">滕王阁夜游《滕王宴乐》</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/icon.styl';
.header-search-module
  float left
  padding-top 28px
  position absolute
  left 50%
  transform translate(-50%)
  z-index 999
  .header-search-block
    width 550px
    height 40px
    background-color #fff
    .header-search-input
      border 1px solid #e5e5e5
      border-right none
      border-radius 4px 0px 0px 4px
      line-height 100%
      box-sizing border-box
      display inline-block !important 
      padding 15px
      font-size 14px
      height 100%
      background transparent
      width 85.45%
      outline none 
      margin 0
    .header-search-btn
      outline none 
      width 14.55%
      box-sizing border-box
      line-height 100%
      height 100%
      border none 
      background #ffc300
      float right 
      color #222
      cursor pointer
      border-bottom-right-radius 4px
      border-top-right-radius 4px
      .header-icon
        font-size 18px
        font-style normal
        -webkit-font-smoothing antialiased
  .header-search-suggest
    width 85.45%
    box-sizing border-box
    position absolute
    border 1px solid #e5e5e5
    border-top none 
    background #fff
    z-index 999
    box-shadow 0 3px 5px 0 rgba(0,0,0,0.1)
    border-radius 0 4px 4px 0
    color #999999
    font-size 12px
    text-align left 
    .header-search-noinput
      display block
      padding 10px
      .header-search-history
        display block
        h6
          margin 0
          padding-bottom 5px
          font-size 1em
        .header-search-clean
          position absolute
          top 10px
          right 10px
          cursor pointer
        ul
          padding 5px 3px 10px
          margin 0
          li
            color #999999
            margin-left 10px
            display inline-block
            list-style none 
            margin 0
            padding 0
            a
              line-height 1.6
              display block
              text-decoration none
              color #666666
      h6
        font-size 1em
      .header-search-hotword
        width auto
        padding-top 10px
        margin-bottom 5px
        padding-left 0
        font-size 12px
        overflow hidden
        height 25px
        box-sizing border-box
        text-align left 
        a
          color #666666
          margin-right 10px
          margin-bottom 3px
          display inline-block
          text-decoration none 
    .header-search-hasinput
      display block
      ul
      margin 0
      padding 0
        li
          list-style none 
          padding 0
          margin 0
          a
            padding 3px 10px
            color #333333
            line-height 1.6
            display block
            text-decoration none 
  .header-search-hotword
    padding-top 8px
    font-size 12px
    width 550px
    overflow hidden
    height 25px
    box-sizing border-box
    text-align left 
    padding-left 12px
    a
      color #999999
      margin-right 10px
      margin-bottom 3px
      display inline-block
      text-decoration none 
</style>