<template>
  <div class="detail" v-show="!loadState.isShow">
    <banner></banner>
    <div class="container">
      <div class="tocs" v-if="toc">
        <div :class="['toc-wrap', showFix ? '' : 'toc-wrap-fix']" id="tocs">
          <div v-html="toc"></div>
        </div>
      </div>
      <div class="content-wrap" id="content">
        <div class="markdown-body" v-html="content"></div>
      </div>
    </div>
  </div>
  <loading :state="loadState" @refresh="getAirticleDetailData"></loading>
</template>
<script>
import banner from "../../components/Banner.vue";
import { getAirticleDetail } from "../../api";
import { addCodeBtn } from "../../utils/linenum";
import markdown from "../../utils/markdown";
import loading from "../../components/Loading.vue";
import $ from "jquery";
export default {
  name: "detail",
  data() {
    return {
      detail: null,
      content: "",
      toc: "",
      showFix: false,
      scroll: "",
      activeName: "",
      loadState: {
        isShow: false,
        status: 0,
      },
      // scrollTimer: null
    };
  },
  components: {
    banner,
    loading,
  },
  computed: {
    id() {
      return this.$route.query.id || "";
    },
  },
  watch: {
    scroll() {
      this.loadScroll();
    },
  },
  mounted() {
    console.log(this.id);
    this.getAirticleDetailData();
    this.updateShowFix();
    window.addEventListener("scroll", () => {
      this.updateShowFix();
    });
  },
  unmounted() {
    window.removeEventListener("scroll", () => {});
    // if(this.scrollTimer) {
    //   clearTimeout(this.scrollTimer);
    // }
  },
  methods: {
    initLiClick() {
      let tocLi = $("#tocs ul li");
      for (let k = 0; k < tocLi.length; k++) {
        $(tocLi[k]).click(()=>{
          let domid = $(tocLi[k])[0].id
          let arr = $("#content :header");
          let dom = null;
          for(let i = 0;i<arr.length;i++) {
            if($(arr[i])[0].id == domid) {
              dom = $(arr[i]);
              break;
            }
          }
          this.scrollToLocation(dom)
        })
      }
    },
    scrollToLocation(dom) {
      let top = dom[0].offsetTop
      window.scrollTo({top: top - 50, behavior: 'smooth'});
    },
    loadScroll() {
      // if(this.scrollTimer) {
      //   clearTimeout(this.scrollTimer);
      // }
      // this.scrollTimer = setTimeout(() => {
        let arr = $("#content :header"); // 找到所有的h1,h2...
        for (let i = arr.length - 1; i >= 0; i--) {
          if (this.scroll >= arr[i].offsetTop - 100) {
            // 距离调整一下
            this.activeName = arr[i].id;
            // console.log(this.scroll, arr[i].offsetTop);
            break;
          }
        }
        let tocLi = $("#tocs ul li");
        for (let k = 0; k < tocLi.length; k++) {
          if (this.activeName !== "" && tocLi[k].id == this.activeName) {
            for (let j = 0; j < tocLi.length; j++) {
              if ($(tocLi[j]).hasClass("active")) {
                $(tocLi[j]).removeClass("active");
              }
            }
            $(tocLi[k]).addClass("active"); //找到li添加active
            break;
          }
        }
      // }, 300);
    },
    updateShowFix() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      this.scroll = top;
      // console.log(top)
      if (top <= 363) {
        this.showFix = true;
      } else {
        this.showFix = false;
      }
    },
    async getAirticleDetailData() {
      try {
        this.loadState.isShow = true;
        this.loadState.status = 0;
        const params = {
          id: this.id,
        };
        const { data } = await getAirticleDetail(params);
        setTimeout(() => {
          this.loadState.isShow = false;
        }, 2000);
        if (data.code == 0) {
          this.detail = data.data;
          const article = markdown.marked(data.data.content);
          article.then((res) => {
            this.content = res.content;
            this.toc = res.toc;
            this.$nextTick(()=>{
              this.initLiClick()
            })
            // console.log(res.toc);
            this.$nextTick(() => {
              addCodeBtn();
            });
          });
        } else {
          this.$message({
            type: "error",
            message: data.message,
          });
        }
      } catch {
        this.loadState.isShow = true;
        this.loadState.status = 2;
        this.$message({
          type: "error",
          message: "网络错误（getAirticleDetail）",
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  display: flex;
  transition: all 2s;
}
.toc-wrap {
  margin-top: 20px;
  box-sizing: border-box;
  width: 250px;
  padding: 8px;
}

.content-wrap {
  box-sizing: border-box;
  margin-top: 20px;
  padding: 30px 40px 30px;
  background: #fff;
  border-radius: 10px;
  width: calc(100% - 250px);
}
:deep(.content-wrap) {
  h1,
  h2,
  h3 {
    padding-top: 60px; /*和顶部fixed的高度一致*/
    margin-top: -40px; /*和顶部fixed的高度一致*/
  }
}
.toc-wrap {
  overflow: hidden;
  overflow-y: auto;
  max-height: calc(100vh - 58px);
}
:deep(.toc-wrap) div > .anchor-ul {
  padding: 0.1px 0 20px;
  margin-left: 5px;
  position: relative;
  > li {
    cursor: pointer;
    display: inline-block;
    position: relative;
    margin: 20px 0 5px -5px;
    padding-right: 16px;
    filter: drop-shadow(0 1px 0 rgba(31, 45, 61, 0.2))
      drop-shadow(0 -1px 0 #fff) drop-shadow(5px 6px 5px rgba(31, 45, 61, 0.1));
    color: #8492a6;
    .toc-item {
      max-width: 180px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      font-weight: 700;
      background: linear-gradient(90deg, #fff, #f0f2f7 6px, #d8e0ea);
      font-size: 14px;
      line-height: 34px;
      height: 34px;
      padding: 0 12px 0 20px;
      border-bottom-left-radius: 5px;
      vertical-align: bottom;
      text-shadow: 0 1px #fff;
      -webkit-transition: 0.25s;
      transition: 0.25s;
      cursor: pointer;
    }
    .toc-item::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      display: inline-block;
      border: 17px solid #d8e0ea;
      border-left-width: 8px;
      border-right: 8px solid transparent;
      border-bottom: 17px solid transparent;
      vertical-align: bottom;
    }
  }
  > li.active {
    color: #fff;
    filter: drop-shadow(0 1px 0 #0394ff)
      drop-shadow(6px 7px 8px rgba(32, 160, 255, 0.4));
    .toc-item {
      background: linear-gradient(90deg, #76d5ff, #20baff 6px, #0394ff);
      text-shadow: 0 1px #0084e6;
      color: #fff;
    }
    .toc-item::after {
      content: "";
      border: 17px solid #0394ff;
      border-left-width: 8px;
      border-right: 8px solid transparent;
      border-bottom: 17px solid transparent;
    }
  }
  .anchor-ul li {
    text-shadow: 0 1px #fff;
    margin: 5px 0;
    .toc-item {
      display: inline-block;
      padding: 10px 0 10px 20px;
      position: relative;
      color: #657487;
      transition: 0.3s;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 205px;
      font-size: 14px;
      line-height: 36px;
      cursor: pointer;
    }
    .toc-item::before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 50%;
      border: 1px solid #cad1db;
      background: #fff;
      left: 0;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: 0.3s;
    }
  }
  .anchor-ul li.active {
    text-shadow: 0 1px #fff;
    .toc-item {
      color: #20a0ff;
      font-weight: 600;
    }
    .toc-item::before {
      content: "";
      width: 17px;
      height: 10px;
      border-radius: 4px 100% 100% 4px/4px 80% 80% 4px;
      border: 1px solid #20a0ff;
      background: #59b8ff;
      box-shadow: 0 1px #76d5ff inset, 0 2px 3px rgba(32, 160, 255, 0.3);
      left: -3px;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      transition: 0.3s;
    }
  }
  li:hover * {
    color: #409eff;
  }
  .anchor-ul li:hover * {
    color: #409eff;
  }
}
:deep(.toc-wrap) div > .anchor-ul > li:before {
  content: "";
  border: 3px solid rgba(31, 45, 61, 0.2);
  position: absolute;
  left: 0;
  top: -7px;
  border-left: 3px solid transparent;
  border-top: 3px solid transparent;
  transform-origin: bottom;
  transform: scaleY(0.8);
}

:deep(.toc-wrap) div > .anchor-ul:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 6px;
  background: linear-gradient(90deg, #fff 1px, #d8e0ea);
  border: 1px solid #cad1db;
  box-shadow: 0.5px 3px 5px rgba(31, 45, 61, 0.1);
  border-radius: 4px;
}
:deep(.markdown-body) p,
:deep(.markdown-body) pre,
:deep(.markdown-body) ul {
  margin: 1.5rem 0;
}
:deep(.markdown-body) p:first-child,
:deep(.markdown-body) pre:first-child,
:deep(.markdown-body) ul:first-child {
  margin-top: 0;
}
:deep(.markdown-body) h1 {
  font-size: 24px;
}

.toc-wrap-fix {
  position: fixed;
  top: 38px;
  left: 40px;
}
.tocs {
  width: 250px;
}
@media screen and (max-width: 990px) {
  .tocs {
    display: none;
  }
  .content-wrap {
    margin-top: 15px;
    padding: 8px;
    width: 100%;
    border-radius: 0;
  }
}
</style>


