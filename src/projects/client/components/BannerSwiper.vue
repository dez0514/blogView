<template>
  <div class="banner-swiper">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="mobile-banner">
            <div class="pic-wrap">
              <img src="../assets/1625043943540.png" />
            </div>
            <div class="title-wrap">
              <div>文章标题</div>
              <div>文章标题</div>
            </div>
          </div>
          <div class="pc-banner">
            <banner></banner>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="mobile-banner">
            <div class="pic-wrap">
              <img src="../assets/1625043943540.png" />
            </div>
            <div class="title-wrap">
              <div>文章标题</div>
              <div>文章标题</div>
            </div>
          </div>
          <div class="pc-banner">
            <banner></banner>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="mobile-banner">
            <div class="pic-wrap">
              <img src="../assets/1625043943540.png" />
            </div>
            <div class="title-wrap">
              <div>文章标题</div>
              <div>文章标题</div>
            </div>
          </div>
          <div class="pc-banner">
            <banner></banner>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Swiper } from "swiper";
import "swiper/swiper.min.css";
import banner from "./Banner.vue";
export default {
  data() {
    return {
      mySwiper: null,
    };
  },
  components: {
    banner,
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      if(this.mySwiper) {
        this.mySwiper = null
      }
      this.mySwiper = new Swiper(".swiper", {
        watchSlidesProgress: true, //查看slide的progress
        followFinger: false,
        resistanceRatio: 0, //禁止边缘移动
        loop: true,
        on: {
          init: function () {
            console.log("=====", document.body.offsetWidth);
            let isPc = document.body.offsetWidth > 990;
            if (!isPc) {
              let slides = this.slides;
              for (let i = 0; i < slides.length; i++) {
                let slide = slides.eq(i);
                slide.css("zIndex", 100 - i); //设置slide的z-index层级
              }
            }
          },

          resize: function (swiper) {
            swiper.update();
          },

          setTranslate: function () {
            let isPc = document.body.offsetWidth > 990;
            if (!isPc) {
              let slides = this.slides;
              let offsetAfter = this.width * 0.95; //每个slide的位移值
              for (let i = 0; i < slides.length; i++) {
                let slide = slides.eq(i);
                let progress = slides[i].progress;

                if (progress <= 0) {
                  //右边slide位移
                  slide.transform(
                    "translate3d(" +
                      progress * offsetAfter +
                      "px, 0, 0) scale(" +
                      (1 - Math.abs(progress) / 20) +
                      ")"
                  );
                  slide.css("opacity", progress + 3); //最右边slide透明
                }

                if (progress > 0) {
                  slide.transform("rotate(" + -progress * 5 + "deg)"); //左边slide旋转
                  slide.css("opacity", 1 - progress); //左边slide透明
                }
              }
            }
          },
          setTransition: function (swiper, transition) {
            let isPc = document.body.offsetWidth > 990;
            if (!isPc) {
              for (let i = 0; i < this.slides.length; i++) {
                let slide = this.slides.eq(i);
                slide.transition(transition);
              }
            }
          },
        },
      });
    },
  },
};
</script>
<style>
.banner-swiper {
  min-height: 200px;
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-container {
  width: 100%;
}
.swiper-slide {
  text-align: center;
}
.swiper-slide .pic-wrap {
  width: 172px;
  border-radius: 7px;
  margin: 10px auto 0;
}
.swiper-slide .pic-wrap img {
  width: 100%;
  display: block;
  border-radius: 7px;
}
.title-wrap {
  padding-top: 20px;
  background-color: #f1f2f7;
}
@media screen and (max-width: 990px) {
  .mobile-banner {
    display: block;
  }
  .pc-banner {
    display: none;
  }
}
@media screen and (min-width: 991px) {
  .mobile-banner {
    display: none;
  }
  .pc-banner {
    display: block;
  }
}
</style>