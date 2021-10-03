<template>
  <div class="archive">
    <banner></banner>
    <div class="archive-main">
      <div class="archive-nav">
        <div :class="['nav-wraper',showFix ? 'fix-nav':'']">
          <navtime></navtime>
        </div>
      </div>
      <div class="card-list">
        <div class="card-item">
          <cardline></cardline>
        </div>
        <div class="card-item">
          <cardline></cardline>
        </div>
        <div class="card-item">
          <cardline></cardline>
        </div>
        <div class="card-item">
          <cardline></cardline>
        </div>
        <div class="card-item">
          <cardline></cardline>
        </div>
        <div class="card-item">
          <cardline></cardline>
        </div>
        <div class="card-item">
          <cardline></cardline>
        </div>
        <div class="card-item">
          <cardline></cardline>
        </div>
        <div class="card-item">
          <cardline></cardline>
        </div>
        <div class="card-item">
          <cardline></cardline>
        </div>
      </div>
    </div>
    <div class="pagination-wrap">
      <pagination :total="20"></pagination>
    </div>
  </div>
</template>
<script>
import banner from '../../components/Banner.vue'
import pagination from '../../components/Pagination.vue'
import cardline from '../../components/CardLine.vue'
import navtime from '../../components/NavTime.vue'
export default {
  data(){
    return {
      scroll: '',
      showFix: false
    }
  },
  components: {
    banner,
    cardline,
    pagination,
    navtime
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
  },
  unmounted() {
    window.removeEventListener("scroll", () => {});
  },
  methods: {
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
.card-list {
  flex: 1;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(2, calc((100% - 18px) / 2));
  gap: 18px;
  padding-top: 30px;
}
.pagination-wrap {
  margin-top: 20px;
  text-align: center;
}
.archive-main {
  display: flex;
}
.archive-nav {
  box-sizing: border-box;
  padding-top: 30px;
  width: 150px;
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
@media screen and (max-width: 990px) {
  .card-list {
    margin-top: 20px;
    padding: 0 10px;
    grid-template-columns: repeat(1, 100%);
    gap: 0;
  }
  .archive-nav {
    display: none;
  }
}
</style>
