<template>
<div>
  <masks></masks>
  <v-header></v-header>
  <div class="main-wrap">
    <router-view/>
  </div>
  <v-footer></v-footer>
  <!-- <music></music> -->
  <sidebar></sidebar>
</div>
</template>
<script>
import vHeader from './components/Vheader.vue'
import vFooter from './components/Vfooter.vue'
import masks from './components/Mask.vue'
import sidebar from './components/SideBar.vue'
// import music from './components/Music.vue'
export default {
  components: {
    vHeader,
    vFooter,
    masks,
    sidebar,
    // music
  }
}
</script>
<style lang="scss">
.main-wrap {
  position: relative;
  padding: 80px 40px 50px 40px;
  min-height: calc(100vh - 80px - 50px - 138px);
}
@media screen and (max-width: 990px) {
  .main-wrap {
    padding: 58px 0 10px 0;
    min-height: calc(100vh - 58px - 10px - 60px);  
  }
}
</style>
