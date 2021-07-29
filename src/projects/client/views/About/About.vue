<template>
  <div class="about">
    <banner></banner>
    <div class="about-wrap">
      <div class="about-box">
        <div class="meta">
          <div class="title">关于我</div>
        </div>
        <div class="about-content">
          <div class="tips">独揽月下萤火，照亮一纸寂寞</div>
          <ul class="list">
            <li><span>姓名</span>：<span class="">张旺德</span></li>
            <li><span>民族</span>：<span class="">汉族</span></li>
            <li><span>地区</span>：<span class="">上海</span></li>
            <li><span>籍贯</span>：<span class="">湖北 黄冈</span></li>
            <li><span>qq</span>：<span class="">2573433803</span></li>
            <li><span>email</span>：<span class="">2573433803@qq.com</span></li>
            <li><span>职业</span>：<span class="">切图仔</span></li>
            <li><span>爱好</span>：<span class="">篮球、撸啊撸、追剧</span></li>
            <li><span>歌手</span>：<span class="">陈信宏、周杰伦、许嵩</span></li>
            <li><span>电影</span>：<span class="">武侠、动作、喜剧</span></li>
          </ul>
        </div>
        <div class="meta margin-top">
          <div class="title">博客说明</div>
        </div>
        <div class="about-content">
          <div class="tips">此博客样式，颜色，动画均模仿 <a href='https://dzblog.cn/' target="_blank">Wintermelon's blog</a>,页底已保留版权。效果类似，但样式部分自己写的，部分例如颜色边框阴影及部分动效是抠出来改的，功能自行实现的，请勿喷，只是弄着玩玩无商用。使用vue3 + express + mongodb实现。</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import banner from "../../components/Banner.vue";
export default {
  data() {
    return {

    };
  },
  components: {
    banner,
  },
};
</script>
<style lang="scss" scoped>
.about-wrap {
  position: relative;
  padding: 50px 0 50px;
  margin: 20px auto 0;
  width: 100%;
  border-radius: 13px;
  box-shadow: 0 13px 15px rgba(31, 45, 61, 0.1);
  background-color: #fff;
}
.meta {
  position: relative;
  padding: 0 40px;
  .title {
    font-size: 16px;
    font-weight: 400;
    color: #20a0ff;
    position: relative;
    display: inline-block;
  }
  .title:before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    bottom: -14px;
    left: -5px;
    background: linear-gradient(90deg, #20baff, #20a0ff);
    box-shadow: 0 0 6px #20a0ff;
    z-index: 1;
  }
  .title:after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    content: "";
    right: -20px;
    min-width: 100px;
    height: 3px;
    position: absolute;
    bottom: -13px;
    left: 0;
    z-index: 2;
    background: -webkit-gradient(
        linear,
        left top,
        right top,
        from(#20a0ff),
        color-stop(80%, rgba(203, 208, 218, 0.2)),
        to(rgba(203, 208, 218, 0))
      )
      no-repeat 0 1px/100% 1px;
    background: -webkit-linear-gradient(
        left,
        #20a0ff,
        rgba(203, 208, 218, 0.2) 80%,
        rgba(203, 208, 218, 0)
      )
      no-repeat 0 1px/100% 1px;
    background: linear-gradient(
        90deg,
        #20a0ff,
        rgba(203, 208, 218, 0.2) 80%,
        rgba(203, 208, 218, 0)
      )
      no-repeat 0 1px/100% 1px;
  }
}
.about-content {
  padding-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
}
.list {
  margin-top: 14px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
}
.list li:nth-child(4n + 1),
.list li:nth-child(4n + 2) {
  background-color: #f0f0f0;
}

.list li {
  padding: 12px 10px;
}
.list li {
  border-bottom: 1px solid #e6eaf0;
}
.tips {
  font-size: 14px;
  line-height: 1.5;
}
.tips::first-letter {
  font-size: 16px;
  font-weight: 600;
  margin-right: 2px;
}
.margin-top {
  margin-top: 30px;
}
@media screen and (max-width: 990px) {
  .about-wrap {
    border-radius: 0;
    padding: 15px 0 15px;
    margin: 10px auto 0;
  }
  .meta {
    padding: 0 12px;
  }
  .about-content {
    padding-top: 20px;
    padding-left: 12px;
    padding-right: 12px;
  }
  .list {
    margin-top: 14px;
    display: grid;
    grid-template-columns: repeat(1, 100%);
  }
  .list li:nth-child(2n + 1) {
    background-color: #f0f0f0;
  }
  .list li:nth-child(2n) {
    background-color: #fff;
  }
}
</style>
