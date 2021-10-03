<template>
  <div class="header-wrapper">
    <div class="pc">
      <div class="header-box" :style="{backgroundColor: headerBg ? '#fff':'#f0f2f7'}">
        <div class="logo-wrap">
          <img class="logo" src="../assets/logo.png" alt="" />
        </div>
        <div style="flex: 1">
          <div class="tab-wrap">
            <transition name="slideFadeReverse">
              <div
                class="tab-item-wrap"
                ref="tabs"
                v-show="!showSearch"
                transiton="slideFadeReverse"
              >
                <div
                  :class="[
                    'tab-item',
                    tabActRoute == item.routename ? 'act' : '',
                  ]"
                  v-for="(item, index) in tablist"
                  :key="index"
                  @click="routerSwitch(item, index)"
                  @mouseenter="routerHover(index)"
                  @mouseleave="routerHoverEnd"
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
                <div
                  class="hoverbold"
                  :style="{
                    '--hoverboldWidth': hoverboldWidth,
                    '--hoverboldTransLeft': hoverboldTransLeft,
                  }"
                ></div>
              </div>
            </transition>
            <transition name="slideFadeReverse">
              <div
                class="search-wrap"
                @click="handleSearch"
                v-show="!showSearch"
                transiton="slideFadeReverse"
              >
                <svg class="icon">
                  <svg id="iconsearch" viewBox="0 0 1024 1024">
                    <path
                      d="M875.264 855.872l-188.032-215.552C737.664 579.392 768 501.248 768 416 768 221.632 610.368 64 416 64 221.568 64 64 221.632 64 416S221.568 768 416 768c72.32 0 139.52-21.888 195.392-59.264l186.88 214.272c18.496 21.312 50.88 23.36 72 4.928C891.648 909.376 893.76 877.12 875.264 855.872zM160 416c0-141.184 114.816-256 256-256 141.184 0 256 114.816 256 256s-114.816 256-256 256C274.816 672 160 557.184 160 416z"
                    ></path>
                  </svg>
                </svg>
              </div>
            </transition>
            <transition name="slideFade">
              <div class="input-wrap" v-show="showSearch" transiton="slideFade">
                <svg class="icon">
                  <svg id="iconsearch" viewBox="0 0 1024 1024">
                    <path
                      d="M875.264 855.872l-188.032-215.552C737.664 579.392 768 501.248 768 416 768 221.632 610.368 64 416 64 221.568 64 64 221.632 64 416S221.568 768 416 768c72.32 0 139.52-21.888 195.392-59.264l186.88 214.272c18.496 21.312 50.88 23.36 72 4.928C891.648 909.376 893.76 877.12 875.264 855.872zM160 416c0-141.184 114.816-256 256-256 141.184 0 256 114.816 256 256s-114.816 256-256 256C274.816 672 160 557.184 160 416z"
                    ></path>
                  </svg>
                </svg>
                <input type="text" v-model="keywords" placeholder="输入关键字搜索" @keyup.enter="jumpToSearch"/>
                <svg class="icon" style="cursor: pointer" @click="handleClose">
                  <svg id="iconclose" viewBox="0 0 1024 1024">
                    <path
                      d="M597.795527 511.488347 813.564755 295.718095c23.833825-23.833825 23.833825-62.47489 0.001023-86.307691-23.832801-23.832801-62.47489-23.833825-86.307691 0L511.487835 425.180656 295.717583 209.410404c-23.833825-23.833825-62.475913-23.833825-86.307691 0-23.832801 23.832801-23.833825 62.47489 0 86.308715l215.769228 215.769228L209.410915 727.258599c-23.833825 23.833825-23.833825 62.47489 0 86.307691 23.832801 23.833825 62.473867 23.833825 86.307691 0l215.768205-215.768205 215.769228 215.769228c23.834848 23.833825 62.475913 23.832801 86.308715 0 23.833825-23.833825 23.833825-62.47489 0-86.307691L597.795527 511.488347z"
                    ></path>
                  </svg>
                </svg>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile">
      <div class="header-app" :class="animal == 'in' ? 'anim': animal == 'out' ? 'animb':''">
        <div class="header-btn" @click="showSidBar">
          <svg class="icon">
            <svg id="iconmenu" viewBox="0 0 1024 1024">
              <path
                d="M195.584 245.76h571.392A31.66208 31.66208 0 0 1 798.72 277.36064v15.79008a31.66208 31.66208 0 0 1-31.744 31.60064H195.584A31.66208 31.66208 0 0 1 163.84 293.15072v-15.79008A31.66208 31.66208 0 0 1 195.584 245.76z m0 236.97408H608.256a31.66208 31.66208 0 0 1 31.744 31.60064v15.79008a31.66208 31.66208 0 0 1-31.744 31.60064H195.584A31.66208 31.66208 0 0 1 163.84 530.14528v-15.81056a31.66208 31.66208 0 0 1 31.744-31.60064z m0 236.97408h571.392A31.68256 31.68256 0 0 1 798.72 751.32928v15.81056A31.66208 31.66208 0 0 1 766.976 798.72H195.584A31.66208 31.66208 0 0 1 163.84 767.11936v-15.79008a31.66208 31.66208 0 0 1 31.744-31.60064z"
              ></path>
            </svg>
          </svg>
        </div>
        <div>昨天太近、明天太远</div>
        <div class="header-btn" @click="handleSearch">
          <svg class="icon">
            <svg id="iconsearch" viewBox="0 0 1024 1024">
              <path
                d="M875.264 855.872l-188.032-215.552C737.664 579.392 768 501.248 768 416 768 221.632 610.368 64 416 64 221.568 64 64 221.632 64 416S221.568 768 416 768c72.32 0 139.52-21.888 195.392-59.264l186.88 214.272c18.496 21.312 50.88 23.36 72 4.928C891.648 909.376 893.76 877.12 875.264 855.872zM160 416c0-141.184 114.816-256 256-256 141.184 0 256 114.816 256 256s-114.816 256-256 256C274.816 672 160 557.184 160 416z"
              ></path>
            </svg>
          </svg>
        </div>
        <transition name="slideFade">
          <div class="input-wrap" v-show="showSearch" transiton="slideFade">
            <svg class="icon">
              <svg id="iconsearch" viewBox="0 0 1024 1024">
                <path
                  d="M875.264 855.872l-188.032-215.552C737.664 579.392 768 501.248 768 416 768 221.632 610.368 64 416 64 221.568 64 64 221.632 64 416S221.568 768 416 768c72.32 0 139.52-21.888 195.392-59.264l186.88 214.272c18.496 21.312 50.88 23.36 72 4.928C891.648 909.376 893.76 877.12 875.264 855.872zM160 416c0-141.184 114.816-256 256-256 141.184 0 256 114.816 256 256s-114.816 256-256 256C274.816 672 160 557.184 160 416z"
                ></path>
              </svg>
            </svg>
            <input type="text" placeholder="输入关键字搜索" style="font-size:14px" v-model="keywords" @keyup.enter="jumpToSearch"/>
            <svg class="icon" style="cursor: pointer" @click="handleClose">
              <svg id="iconclose" viewBox="0 0 1024 1024">
                <path
                  d="M597.795527 511.488347 813.564755 295.718095c23.833825-23.833825 23.833825-62.47489 0.001023-86.307691-23.832801-23.832801-62.47489-23.833825-86.307691 0L511.487835 425.180656 295.717583 209.410404c-23.833825-23.833825-62.475913-23.833825-86.307691 0-23.832801 23.832801-23.833825 62.47489 0 86.308715l215.769228 215.769228L209.410915 727.258599c-23.833825 23.833825-23.833825 62.47489 0 86.307691 23.832801 23.833825 62.473867 23.833825 86.307691 0l215.768205-215.768205 215.769228 215.769228c23.834848 23.833825 62.475913 23.832801 86.308715 0 23.833825-23.833825 23.833825-62.47489 0-86.307691L597.795527 511.488347z"
                ></path>
              </svg>
            </svg>
          </div>
        </transition>
      </div>
    </div>
  </div>
  <transition name="upin">
    <div class="up-icon" v-show="showTop" @click="toTop">
      <svg class="icon" style="cursor: pointer">
        <svg id="iconhuidaodingbu" viewBox="0 0 1024 1024"><path d="M860.623 163.952C765.506 68.835 639.04 16.451 504.522 16.451S243.538 68.835 148.421 163.952C53.3 259.071 0.918 385.537 0.918 520.055c0 134.517 52.384 260.983 147.503 356.101 95.117 95.119 221.584 147.503 356.101 147.503s260.983-52.384 356.101-147.503 147.503-221.585 147.503-356.101c0-134.518-52.384-260.984-147.503-356.103z m-356.101 829.81c-261.203 0-473.708-212.504-473.708-473.707 0-261.204 212.505-473.708 473.708-473.708 261.202 0 473.707 212.504 473.707 473.708 0 261.203-212.504 473.708-473.707 473.708z m23.157-701.9c-12.79-12.789-33.525-12.789-46.315 0l-162.898 162.9c-12.79 12.789-12.79 33.524 0 46.313 12.789 12.79 33.524 12.79 46.314 0l71.593-71.594c2.923-1.846 8.718-4.694 15.606-3.78 13.11 1.742 15.763 15.009 15.763 15.009v202.963a5.012 5.012 0 0 0 5.012 5.012h63.536a5.012 5.012 0 0 0 5.012-5.012V440.712s2.653-13.268 15.763-15.009c6.887-0.914 12.682 1.933 15.605 3.78l71.593 71.593c12.79 12.79 33.525 12.79 46.314 0 12.79-12.79 12.79-33.525 0-46.315L527.68 291.863z m8.611 419.564h-63.536a5.012 5.012 0 0 0-5.012 5.012v73.763a5.011 5.011 0 0 0 5.012 5.012h63.536a5.012 5.012 0 0 0 5.012-5.012v-73.763a5.012 5.012 0 0 0-5.012-5.012z"></path></svg>
      </svg>
    </div>
  </transition>
 
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "vheader",
  props: {},
  data() {
    return {
      hoverIndex: -1,
      showSearch: false,
      headerBg: false,
      showTop: false,
      animal: '',
      keywords: ''
    };
  },
  watch:{
    sideBarShow(val){
      if(val) {
        this.animal = 'in'
      } else {
        this.animal = 'out'
      }
    },
    '$route'(val){
      let findex = this.tablist.findIndex(
        (item) => item.routename == val.name
      );
      this.hoverIndex = findex;
    }
  },
  computed: {
    ...mapState(["showMask", "tablist","sideBarShow"]),
    tabActRoute() {
      return this.$route.name;
    },
    hoverboldWidth() {
      return this.hoverIndex > -1
        ? `${
            this.$refs &&
            this.$refs.tabs &&
            this.$refs.tabs.children[this.hoverIndex].clientWidth
          }px`
        : 0;
    },
    hoverboldTransLeft() {
      return this.hoverIndex > -1
        ? `${
            this.$refs &&
            this.$refs.tabs &&
            this.$refs.tabs.children[this.hoverIndex].offsetLeft
          }px`
        : 0;
    }
  },
   mounted() {
    setTimeout(() => {
      let findex = this.tablist.findIndex(
        (item) => item.routename == this.$route.name
      );
      this.hoverIndex = findex;
    }, 100);
    window.addEventListener('scroll',this.scrollToTop)
  },
  unmounted() {
    window.removeEventListener('scroll',()=>{})
  },
  methods: {
    ...mapMutations(["updateMaskStatus", "updateSideBarStatus"]),
    showSidBar() {
      this.updateMaskStatus({ showMask: true });
      console.log(this.$store);
      this.updateSideBarStatus({ sideBarShow: true });
    },
    routerSwitch(item, index) {
      this.hoverIndex = index;
      this.$router.push({ name: item.routename });
    },
    jumpToSearch(){
      this.$router.push({
        path: '/search',
        query:{
          keywords: this.keywords
        }
      })
      this.updateMaskStatus({ showMask: false });
      this.updateSideBarStatus({ sideBarShow: false });
      this.showSearch = false
      this.keywords = ''
    },
    routerHover(index) {
      // console.log(index)
      if (this.hoverIndex == index) return;
      this.hoverIndex = index;
    },
    routerHoverEnd() {
      let findex = this.tablist.findIndex(
        (item) => item.routename == this.$route.name
      );
      if (this.hoverIndex == findex) return;
      this.hoverIndex = findex;
    },
    handleSearch() {
      this.showSearch = true;
    },
    handleClose() {
      this.showSearch = false;
    },
    getScrollTop() {
      let scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      return scrollTop;
    },
    toTop() {
      // 回到顶部
      let distance = this.getScrollTop(); //获得当前高度
      let step = distance / 50; //每步的距离
      (function jump() {
        if (distance > 0) {
          distance -= step;
          window.scrollTo(0, distance);
          setTimeout(jump, 2)
        }
      })();
    },
    scrollToTop() {
      let scrollTop = this.getScrollTop();
      if (scrollTop > 23) {
        this.showTop = true
        this.headerBg = true
      } else {
        this.showTop = false
        this.headerBg = false
      }
    },
  }
};
</script>

<style scoped lang="scss">
.up-icon {
  position:fixed;
  right: 10px;
  bottom:60px;
  z-index: 100;
  .icon {
    width: 34px;
    height: 34px;
    fill: currentColor;
    overflow: hidden;
    font-size: 18px;
    margin-right: 5px;
  }
}
.up-icon:hover {
  color: #409eff;
}
.upin-enter,
.upin-enter-active {
  animation: upinslide 0.5s ease;
}
.upin-leave,
.upin-leave-active {
  animation: upoutslide 0.5s ease forwards;
}
@keyframes upinslide {
  0% {
    opacity: 0;
    right: -100%;
  }
  100% {
    opacity: 1;
    right: 10px
  }
}
@keyframes upoutslide {
  0% {
    opacity: 0;
    right: 10px;
  }
  100% {
    opacity: 1;
    right: -100%;
  }
}
.anim {
  animation: animmove .5s linear forwards;
}
.animb {
  animation: animback .5s linear forwards;
}
@keyframes animmove {
  from {
    transform: translateX(0) perspective(0) rotateY(0);
  }
  to {
    transform: translateX(250px) perspective(600px) rotateY(10deg);
  }
}
@keyframes animback {
  from {
   transform: translateX(250px) perspective(600px) rotateY(10deg);
  }
  to {
   transform: translateX(0) perspective(0) rotateY(0);
  }
}
.header-wrapper {
  z-index: 18;
  box-sizing: border-box;
  // padding-bottom: 2px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 58px;
}
.header-box {
  box-sizing: border-box;
  padding: 0 40px;
  height: 56px;
  font-size: 14px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px #d8e0ea, 0 0 transparent, 0 2px #fff;
  .logo-wrap {
    overflow: hidden;
    height: 56px;
    .logo {
      display: block;
      margin-top: 10px;
      height: 34px;
    }
  }
  .tab-wrap {
    height: 56px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .tab-item-wrap {
      position: relative;
      display: flex;
      align-items: center;
      height: 56px;
    }
    .hoverbold {
      position: absolute;
      bottom: -2px;
      left: 0;
      height: 3px;
      width: var(--hoverboldWidth);
      background-color: #409eff;
      z-index: 26;
      transform: translateX(var(--hoverboldTransLeft));
      transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .tab-item {
      display: flex;
      box-align: center;
      align-items: center;
      justify-content: center;
      height: 56px;
      padding: 0 15px;
      cursor: pointer;
      .icon {
        width: 18px;
        height: 18px;
        fill: currentColor;
        overflow: hidden;
        font-size: 18px;
        margin-right: 5px;
      }
      &.act {
        color: #20a0ff;
      }
    }
    .tab-item:hover {
      color: #20a0ff;
    }
    .search-wrap {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #738192;
      background-color: rgba(31, 45, 61, 0.1);
      margin-left: 50px;
      transition: 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .icon {
        width: 14px;
        height: 14px;
        fill: currentColor;
        overflow: hidden;
        font-size: 14px;
      }
    }
    .search-wrap:hover {
      background-color: #20a0ff;
      color: #fff;
      box-shadow: 0 13px 15px -5px rgba(32, 160, 255, 0.5);
    }
    .input-wrap {
      padding-left: 100px;
    }
  }
}
.input-wrap {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 56px;
  .icon {
    width: 20px;
    height: 20px;
    fill: currentColor;
    overflow: hidden;
    font-size: 14px;
  }
  input {
    flex: 1;
    margin-left: 10px;
    height: 100%;
    outline: none;
    border: none;
    background: none;
    color: #8492a6;
    appearance: none;
    overflow: visible;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
  }
}

.slideFade-enter {
  animation: slide-search-in 0.5s ease;
}
.slideFade-leave {
  animation: slide-search-out 0.5s ease forwards;
}
.slideFade-enter-active {
  animation: slide-search-in 0.5s ease;
}
.slideFade-leave-active {
  animation: slide-search-out 0.5s ease forwards;
}
@keyframes slide-search-in {
  0% {
    transform: translate3d(
      100%,
      0,
      0
    ); //修改这个可以控制，上下左右动画，例如：100%为从右到左
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes slide-search-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(100%, 0, 0);
    opacity: 1;
  }
}
.slideFadeReverse-enter {
  animation: slide-search-reverse-in 0.5s ease;
}
.slideFadeReverse-leave {
  animation: slide-search-reverse-out 0.5s ease forwards;
}
.slideFadeReverse-enter-active {
  animation: slide-search-reverse-in 0.5s ease;
}
.slideFadeReverse-leave-active {
  animation: slide-search-reverse-out 0.5s ease forwards;
}
@keyframes slide-search-reverse-in {
  0% {
    transform: translate3d(
      -100vw,
      0,
      0
    ); //修改这个可以控制，上下左右动画，例如：100%为从右到左
    opacity: 1;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes slide-search-reverse-out {
  0% {
    transform: translate3d(
      0,
      0,
      0
    ); //修改这个可以控制，上下左右动画，例如：100%为从右到左
    opacity: 1;
  }
  100% {
    transform: translate3d(-100vw, 0, 0);
    opacity: 1;
  }
}
.mobile {
  display: none;
}
.header-app {
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  height: 56px;
  font-size: 18px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px #d8e0ea, 0 0 transparent, 0 2px #fff;
  background-color: #fff;
  transform-origin: left 450px;
  transition: transform .5s;
  .icon {
    width: 24px;
    height: 24px;
    fill: currentColor;
    overflow: hidden;
    font-size: 14px;
  }
  .input-wrap {
    padding-left: 14px;
    padding-right: 16px;
    background-color: #fff;
  }
}
.mobile .header-app {
  box-shadow: none;
}
.header-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
}

@media screen and (max-width: 990px) {
  .pc {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
