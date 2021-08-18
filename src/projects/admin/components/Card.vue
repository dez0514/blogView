<template>
  <div class="card-wrap">
    <div class="cover">
      <img src="http://localhost:5000/serverImage/1625043943540.png" alt="" />
      <div class="mask">
        <div style="margin-top: 116px;text-align:center">
          <el-button type="primary" size="mini">查看</el-button>
          <el-button type="primary" size="mini">编辑</el-button>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="title">Promise的完全实现Promise的完全实现</div>
      <div class="meta">
        <!-- <div class="summary-container summary-hover">
          <div class="summary-item df-c summary-item__read">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconread"></use></svg
            ><span>28</span>
          </div>
          <div class="summary-item df-c summary-item__like">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconlike"></use></svg
            ><span>1</span>
          </div>
          <div class="summary-item df-c summary-item__message">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconmessage"></use></svg
            ><span>0</span>
          </div>
        </div> -->
        <time class="time">6月30日 · 2021年</time>
      </div>
      <div class="tags">
        <div class="tags-scroll">
            <div class="tag-strip" style="color: rgb(24, 144, 255)">React</div>
            <div class="tag-strip" style="color: rgb(134, 137, 140)">源码解读</div>
            <div class="tag-strip" style="color: rgb(219, 86, 64)">JavaScript</div>
            <div class="tag-strip" style="color: rgb(120, 109, 93)">Node</div>
            <div class="tag-strip" style="color: rgb(183, 235, 143)">Webpack</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.card-wrap {
  position: relative;
  width: 100%;
  background-color: #fff;
  -webkit-box-shadow: 0 13px 15px rgba(31, 45, 61, 0.1);
  box-shadow: 0 13px 15px rgba(31, 45, 61, 0.1);
  border-radius: 13px;
  overflow: hidden;
  .cover {
    position: relative;
    width: 100%;
    height: 255px;
    display: block;
    img {
      display: block;
      width: 100%;
    }
    .mask {
      display: none;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,.5);
    }
  }
  .cover:hover{
    .mask {
      display: block;
    }
  }
  .box {
    padding: 8px 15px;
    .title {
      overflow: hidden;
      color: #475669;
      font-size: 16px;
      margin-top: 6px;
      word-wrap: normal;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .meta {
      margin-top: 4px;
      position: relative;
      .time {
        color: #8492a6;
        font-size: 12px;
        transition: opacity 0.25s;
      }
    }
    .tags {
      position: relative;
      margin-top: 10px;
      .tags-scroll {
        overflow-x: auto;
        white-space: nowrap;
        .tag-strip {
          display: inline-block;
          font-size: 10px;
          padding: 0 10px;
          line-height: 20px;
          position: relative;
          transition: padding 0.3s;
        }
        .tag-strip::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background-color: currentColor;
            opacity: .15;
            border-radius: 20px;
        }
        .tag-strip:hover {
            padding: 0 20px;
        }
      }
      .tags-scroll::-webkit-scrollbar {
        width: 0px;
        height: 0px;
      }
      /* 滚动条的滑块 */
      .tags-scroll ::-webkit-scrollbar-thumb {
        background-color: #a1a3a9;
        border-radius: 3px;
      }
    }
  }
}
.tags::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  width: 20px;
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff);
}
.card-wrap .tags .tag-strip:not(:first-child) {
    margin-left: 4px;
}
</style>