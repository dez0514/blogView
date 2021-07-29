<template>
    <div class="masks-pop" :class="showMask ? 'act':''" v-show="showMask" @click="hideMask"></div>
</template>
<script>
import { mapState,mapMutations } from 'vuex';
export default {
    computed: {
        ...mapState(["showMask"])
    },
    methods: {
        ...mapMutations(["updateMaskStatus","updateSideBarStatus"]),
        hideMask() {
            this.updateMaskStatus({ showMask:false })
            this.updateSideBarStatus({ sideBarShow:false })
        }
    }
}
</script>
<style lang='scss' scoped>
.masks-pop {
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(31, 45, 61, 0.5);
  animation: fademaskIn .5s ease;
  .act {
    animation: fademaskOut .5s ease forwards;
  }
}
@keyframes fademaskIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fademaskOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>