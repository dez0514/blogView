<template>
  <div class="card-wrap" @click="jumpToDetail">
    <div class="cover">
      <img src="../assets/1625043943540.png" alt="" />
    </div>
    <div class="box">
      <div class="title">Promise的完全实现Promise的完全实现</div>
      <div class="meta">
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
<script>
export default {
  data(){
    return {

    }
  },
  methods:{
    jumpToDetail(){
      this.$router.push({
        path: '/article',
        query:{
          id:'1'
        }
      })
    }
  }
}
</script>
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
    width: 100%;
    display: block;
    img {
      display: block;
      width: 100%;
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