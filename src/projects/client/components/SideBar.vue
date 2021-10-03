<template>
  <div class="sidebar" :class="!showMask ? 'act' : ''">
    <div class="tab-item-wrap">
      <div
        :class="['tab-item', tabActRoute == item.routename ? 'active' : '']"
        v-for="(item, index) in tablist"
        :key="index"
        @click="routerSwitch(item)"
      >
        <svg class="icon">
          <svg v-if="item.icon == 'book'" viewBox="0 0 1024 1024">
            <path
              d="M95.8 234.9H64v578.5c0 38.4 31.4 65.7 69.9 65.7H453l22.2-32.4L95.8 786V234.9z m300.6-54.8l-254.9-35.2 0.3 619.4C249.2 755.9 490 800 490 818.5v-528c0-52.7-42-103.2-93.6-110.4z m485.8 584.2l0.3-619.4-254.9 35.2C576 187.3 534 237.8 534 290.5v528c0-18.5 240.8-62.6 348.2-54.2z m46-529.4V786l-379.4 60.7 22.2 32.4h319.2c38.4 0 69.9-27.2 69.9-65.7V234.9h-31.9z"
            ></path>
          </svg>
          <svg v-if="item.icon == 'archive'" viewBox="0 0 1024 1024">
            <path
              d="M874.666667 221.866667l-59.733333-72.533333C806.4 136.533333 789.333333 128 768 128L256 128C234.666667 128 217.6 136.533333 204.8 149.333333L149.333333 221.866667C136.533333 238.933333 128 256 128 277.333333L128 810.666667c0 46.933333 38.4 85.333333 85.333333 85.333333l597.333333 0c46.933333 0 85.333333-38.4 85.333333-85.333333L896 277.333333C896 256 887.466667 238.933333 874.666667 221.866667zM512 746.666667 277.333333 512 426.666667 512l0-85.333333 170.666667 0 0 85.333333 149.333333 0L512 746.666667zM217.6 213.333333l34.133333-42.666667 512 0 38.4 42.666667L217.6 213.333333z"
            ></path>
          </svg>
          <svg v-if="item.icon == 'about'" viewBox="0 0 1024 1024">
            <path
              d="M914.285714 802.857143q0 68.571429-41.714285 108.285714t-110.857143 39.714286H262.285714q-69.142857 0-110.857143-39.714286T109.714286 802.857143q0-30.285714 2-59.142857t8-62.285715T134.857143 619.428571t24.571428-55.714285 35.428572-46.285715 48.857143-30.571428T307.428571 475.428571q5.142857 0 24 12.285715t42.571429 27.428571 61.714286 27.428572T512 554.857143t76.285714-12.285714 61.714286-27.428572 42.571429-27.428571 24-12.285715q34.857143 0 63.714285 11.428572t48.857143 30.571428 35.428572 46.285715 24.571428 55.714285 15.142857 62 8 62.285715 2 59.142857z m-182.857143-510.285714q0 90.857143-64.285714 155.142857T512 512 356.857143 447.714286 292.571429 292.571429t64.285714-155.142858T512 73.142857t155.142857 64.285714T731.428571 292.571429z"
            ></path>
          </svg>
          <svg v-if="item.icon == 'comment'" viewBox="0 0 1024 1024">
            <path
              d="M952.106167 322.081707l-28.044757 0 0 308.259173c0 47.995837-27.944835 91.395264-83.967734 91.395264L291.222482 721.736144l0 14.655217c0 42.433515 48.262295 85.266719 97.823575 85.266719l419.638824 0 160.541244 94.392922L945.944314 821.65808l6.161853 0c49.527973 0 71.877179-42.733281 71.877179-85.266719L1023.983346 395.257871C1023.983346 352.824356 1001.63414 322.081707 952.106167 322.081707z"
            ></path>
            <path
              d="M758.157689 107.915691 120.655738 107.915691C64.566224 107.915691 0.016654 157.74343 0.016654 205.772574l0 386.364819c0 44.23211 54.690606 76.173823 107.149623 81.103305l-34.139995 129.598751L291.788707 674.139995l466.368983 0c56.089513 0 107.849076-34.006766 107.849076-82.002602L866.006766 279.54827 866.006766 205.772574C866.006766 157.74343 814.213895 107.915691 758.157689 107.915691zM217.913089 434.06089c-31.808483 0-57.588342-25.779859-57.588342-57.588342s25.779859-57.588342 57.588342-57.588342c31.775176 0 57.588342 25.779859 57.588342 57.588342S249.688264 434.06089 217.913089 434.06089zM433.01171 434.06089c-31.808483 0-57.588342-25.779859-57.588342-57.588342S401.203227 318.884205 433.01171 318.884205s57.588342 25.779859 57.588342 57.588342S464.820193 434.06089 433.01171 434.06089zM648.143638 434.06089c-31.808483 0-57.62165-25.779859-57.62165-57.588342s25.813167-57.588342 57.62165-57.588342c31.741868 0 57.588342 25.779859 57.588342 57.588342S679.885506 434.06089 648.143638 434.06089z"
            ></path>
          </svg>
        </svg>
        <div>{{ item.txt }}</div>
      </div>
    </div>
    <div class="tags-wrap">
        <div class="tags-title">
            <div class="title">标签</div>
        </div>
        <div class="tags-list">
            <div class="tags-item" v-for="(item,index) in tags" :key="index" @click="jumpToSearch(item)">{{item}}</div>
        </div>
    </div>
    <div class="tags-wrap" v-if="tabActRoute !== 'archive'">
        <div class="tags-title">
            <div class="title">最新</div>
        </div>
        <div class="side-art-list">
          <div class="art-item" v-for="(item,index) in artlist" :key="index" @click="jumpToDetail">
            <div class="cover" :style="{backgroundImage: `url(${require('../assets/1625043943540.png')})`}"></div>
            <div>
              <div class="desc">
                开发中Promise是及其常用的语法，基本上对于异步的处理大都是通过Promise来进行完成。Promise规范有很多，ES6最终采用的是Promise/A+
                规范,所以以下代码也基本是基于这个规范来进行编写的。
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="tags-wrap" v-if="tabActRoute === 'archive'">
        <div class="tags-title">
            <div class="title">时间轴</div>
        </div>
        <div class="side-art-list">
          <navtime></navtime>
        </div>
    </div>
    
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import navtime from './NavTime.vue'
export default {
  data() {
    return {
      artlist: [{},{},{},{},{}]
    };
  },
  components:{
    navtime
  },
  computed: {
    ...mapState(["showMask", "tablist","tags"]),
    tabActRoute() {
      return this.$route.name;
    },
  },
  methods: {
    ...mapMutations(["updateMaskStatus", "updateSideBarStatus"]),
    routerSwitch(item) {
      this.$router.push({ name: item.routename });
      this.updateMaskStatus({ showMask: false });
      this.updateSideBarStatus({ sideBarShow: false });
    },
    jumpToDetail(){
      this.$router.push({
        path: '/article',
        query:{
          id:'1'
        }
      })
      this.updateMaskStatus({ showMask: false });
      this.updateSideBarStatus({ sideBarShow: false });
    },
    jumpToSearch(item){
      this.$router.push({
        path: '/search',
        query:{
          keywords: item
        }
      })
      this.updateMaskStatus({ showMask: false });
      this.updateSideBarStatus({ sideBarShow: false });
    }
  },
};
</script>
<style lang='scss' scoped>
.sidebar {
  box-sizing: border-box;
  padding: 15px 10px;
  z-index: 30;
  width: 250px;
  position: fixed;
  background: #f0f2f7;
  top: 0;
  bottom: 0;
  left: 0;
  transform: translateX(0) translateZ(100px) perspective(300px) rotateY(0deg);
  transform-origin: right;
  transition: 0.5s;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  &.act {
    transform: translateX(-250px) translateZ(100px) perspective(300px)
      rotateY(-55deg);
    transform-origin: right;
  }
}
.tab-item {
  display: flex;
  text-shadow: 0 1px #fff;
  padding: 0 30px 0 15px;
  line-height: 40px;
  border-radius: 20px;
  position: relative;
  transition: 0.25s;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  .icon {
    margin-right: 4px;
    width: 14px;
    height: 14px;
    fill: currentColor;
    overflow: hidden;
  }
  &:hover {
    color: #20a0ff;
  }
  &.active {
    background: linear-gradient(90deg, #20a0ff, #3dc3ff);
    -webkit-box-shadow: 0 10px 15px rgba(32, 160, 255, 0.4);
    box-shadow: 0 10px 15px rgba(32, 160, 255, 0.4);
    color: #fff;
    text-shadow: none;
  }
}
.tags-wrap {
    margin-top: 20px;
    .tags-title {
        display: flex;
        color: #8492a6;
        font-size: 14px;
        transition: .25s;
        border-bottom: 1px solid #d8e0ea;
        font-weight: 600;
        .title {
            position: relative;
            padding-bottom: 8px;
        }
        .title:after {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 50%;
            height: 3px;
            background: linear-gradient(#58b7ff 30%,#20a0ff 70%) #20a0ff;
            border-radius: 3px;
            box-shadow: 0 3px 4px rgba(32,160,255,.5);
            transition: width .25s;
        }
    }
}
.tags-list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 8px;
    .tags-item {
        margin: 8px 6px 0 0;
        position: relative;
        font-size: 12px;
        padding: 0 10px;
        background-color: #fff;
        color: #738192;
        line-height: 30px;
        box-shadow: 0 13px 15px rgba(0,0,0,.1);
        border-radius: 7px;
        transition: .25s;
        cursor: pointer;
        &:hover {
            color: #fff;
            background-color: #20a0ff;
        }
    }
}
.side-art-list {
  margin-top: 10px;
}
.art-item {
  display: flex;
  .cover {
    overflow: hidden;
    flex-shrink: 0;
    width: 60px;
    height: 60px;
    margin-right: 15px;
    display: block;
    border-radius: 8px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    cursor: pointer;
  }
  .desc {
    overflow: hidden;
    width: 100%;
    text-shadow: 0 1px #fff;
    color: #738192;
    font-size: 14px;
    transition: .25s;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    -webkit-line-clamp: 3;
  }
}
.art-item:not(:first-child) {
  margin-top: 20px;
}
</style>