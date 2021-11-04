<template>
  <div class="home">
    <swiperbanner></swiperbanner>
    <!-- <banner></banner> -->
    <!-- <div class="load-wrap" style="position:relative;height:300px">
      <loading></loading>
    </div> -->
    <div class="home-main">
      <div class="home-nav">
        <div :class="['nav-wraper',showFix ? 'fix-nav':'']">
          <navtags></navtags>
        </div>
      </div>
      <div class="card-list">
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
      </div>
    </div>
    <div class="pagination-wrap">
      <pagination :total="20"></pagination>
    </div>
  </div>
</template>

<script>
import banner from '../../components/Banner.vue'
import swiperbanner from '../../components/BannerSwiper.vue'
import pagination from '../../components/Pagination.vue'
import loading from '../../components/Loading.vue'
import card from '../../components/Card.vue'
import navtags from '../../components/NavTags.vue'
import { getArtList } from '../../api/index'
export default {
  name: 'Home',
  components: {
    pagination,
    loading,
    card,
    banner,
    swiperbanner,
    navtags
  },
  data() {
    return {
      scroll: '',
      showFix: false
    }
  },
  watch: {
    scroll() {
      this.updateShowFix();
    },
  },
  mounted() {
    this.updateShowFix();
    window.addEventListener("scroll", () => {
      this.updateShowFix();
    });
    getArtList().then(res => {
      console.log(res)
    })
  },
  unmounted() {
    window.removeEventListener("scroll", () => {});
  },
  methods: {
    onchange(val) {
      console.log(val)
    },
    updateShowFix() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      this.scroll = top;
      // console.log(top)
      if (top > 363) {
        this.showFix = true;
      } else {
        this.showFix = false;
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.home {
  font-size: 14px;
}
.card-list {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(5, calc((100% - 120px) / 5));
  gap: 30px;
  padding-top: 30px;
}
.home-main {
  display: flex;
}

.home-nav {
  box-sizing: border-box;
  padding-top: 15px;
  width: 200px;
}
.nav-wraper {
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
  max-height: calc(100vh - 58px - 138px - 50px);
}
.fix-nav {
  position: fixed;
  top: 58px;
}
@media screen and (max-width:1600px) {
  .card-list {
    grid-template-columns: repeat(4, calc((100% - 90px) / 4));
    gap: 30px;
  }
}
@media screen and (max-width:1200px) {
  .card-list {
    grid-template-columns: repeat(4, calc((100% - 75px) / 4));
    gap: 25px;
  }
}
@media screen and (max-width:990px) {
  .home-main {
    padding: 0 10px;
  }
  .home-nav {
    display: none;
  }
  .card-list {
    grid-template-columns: repeat(3, calc((100% - 40px) / 3));
    gap: 20px;
    padding-top: 10px;
  }
}
@media screen and (max-width:768px) {
  .card-list {
    grid-template-columns: repeat(3, calc((100% - 30px) / 3));
    gap: 15px;
  }
}
@media screen and (max-width:575px) {
  .card-list {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
  }
}
.pagination-wrap {
  margin-top: 20px;
  text-align: center;
}
</style>
