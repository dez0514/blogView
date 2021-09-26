<template>
  <div class="detail">
    <banner></banner>
    <div class="container">
      <div class="tocs">
        <div class="toc-wrap" v-if="toc && showFix">
          <div v-html="toc"></div>
        </div>
        <div class="toc-wrap toc-wrap-fix" v-if="toc && !showFix">
          <div v-html="toc"></div>
        </div>
      </div>
      <div class="content-wrap">
        <div class="markdown-body" v-html="content"></div>
      </div>
    </div>
  </div>
</template>
<script>
import banner from "../../components/Banner.vue";
import { getAirticleDetail } from "../../api";
import { addCodeBtn } from "../../utils/linenum";
import markdown from "../../utils/markdown";
export default {
  name: "detail",
  data() {
    return {
      detail: null,
      content: "",
      toc: "",
      showFix: false,
      scroll: "",
      activeName: ''
    };
  },
  components: {
    banner,
  },
  computed: {
    id() {
      return this.$route.query.id || "";
    },
  },
  watch: {
    //监听scroll变量，只要滚动条位置变化就会执行方法loadScroll
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
  },
  methods: {
    loadScroll() {
      //1. id=toc##11, href=id 一一对应
      //2. id在可视区域内 给对应href的父元素 高亮
      // let sections = document.getElementsByClassName("section");
      // for (var i = sections.length - 1; i >= 0; i--) {
      //   if (this.scroll >= sections[i].offsetTop - 100) {
      //     this.activeName = "tab" + i;
      //     break;
      //   }
      // }
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
        const params = {
          id: this.id,
        };
        const { data } = await getAirticleDetail(params);
        if (data.code == 0) {
          this.detail = data.data;
          const article = markdown.marked(data.data.content);
          article.then((res) => {
            this.content = res.content;
            this.toc = res.toc;
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
:deep(.toc-wrap) div > .anchor-ul {
  padding: 0.1px 0 20px;
  margin-left: 5px;
  position: relative;
  > li {
    cursor: pointer;
    display: inline-block;
    position: relative;
    margin: 20px 0 5px -5px;
    filter: drop-shadow(0 1px 0 rgba(31, 45, 61, 0.2))
      drop-shadow(0 -1px 0 #fff) drop-shadow(5px 6px 5px rgba(31, 45, 61, 0.1));
    color: #8492a6;
    .toc-item {
      max-width: 180px;
      display: inline-block;
      font-weight: 700;
      background: linear-gradient(90deg, #fff, #f0f2f7 6px, #d8e0ea);
      font-size: 14px;
      line-height: 34px;
      height: 34px;
      padding: 0 12px 0 20px;
      border-bottom-left-radius: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: bottom;
      text-shadow: 0 1px #fff;
      -webkit-transition: 0.25s;
      transition: 0.25s;
    }
    .toc-item::after {
      content: "";
      position: absolute;
      right: -16px;
      display: inline-block;
      border: 17px solid #d8e0ea;
      border-left-width: 8px;
      border-right: 8px solid transparent;
      border-bottom: 17px solid transparent;
      vertical-align: bottom;
    }
  }
  .anchor-ul li {
    text-shadow: 0 1px #fff;
    margin: 5px 0;
    .toc-item {
      display: inline-block;
      padding: 10px 0 10px 20px;
      position: relative;
      color: rgba(31, 45, 61, 0.2);
      transition: 0.3s;
      a {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 205px;
        font-size: 14px;
        line-height: 36px;
      }
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
  li:hover * {
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


