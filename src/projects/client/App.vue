<template>
<div class="container" :class="showMask ? 'disable-scroll':''">
  <masks></masks>
  <v-header></v-header>
  <div :class="['main-wrap',animal == 'in' ? 'anim': animal == 'out' ? 'animb':'']">
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
import { mapMutations, mapState } from 'vuex'
export default {
  data(){
    return {
      animal: ''
    }
  },
  watch:{
    sideBarShow(val){
      if(val) {
        this.animal = 'in'
      } else {
        this.animal = 'out'
      }
    }
  },
  computed:{
    ...mapState(['sideBarShow','showMask'])
  },
  methods:{
    ...mapMutations(['updateMaskStatus','updateSideBarStatus'])
  },
  mounted(){
    window.addEventListener('resize',()=>{
      let w = window.innerWidth;
      if(w > 990) {
        this.updateMaskStatus({ showMask: false });
        this.updateSideBarStatus({ sideBarShow: false });
      }
    })
  },
  unmounted(){
    window.removeEventListener('resize',()=>{})
  },
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
.container {
  overflow: hidden;
  width: 100%;
}
.main-wrap {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  padding: 80px 40px 50px 40px;
  min-height: calc(100vh - 138px);
  transform-origin: left 450px;
  transition: transform .5s;
}
@media screen and (max-width: 990px) {
  .main-wrap {
    padding: 58px 0 10px 0;
    min-height: calc(100vh - 60px);  
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
.disable-scroll {
  overflow: hidden;
  height: 100vh;
}
</style>
