<template>
  <div class="banner-swiper">
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
            <banner></banner>
        </div>
        <div class="swiper-slide">
            <banner></banner>
        </div>
        <div class="swiper-slide">
            <banner></banner>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const Swiper = window.Swiper;
import banner from './Banner.vue'
export default {
  data() {
    return {
        mySwiper: null
    };
  },
  components: {
    banner
  },
  mounted() {
    this.mySwiper = new Swiper(".swiper", {});
  },
  methods: {},
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
</style>