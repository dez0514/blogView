<template>
  <div class="home">
    home
    <hello msg="hahaha"></hello>
  </div>
</template>

<script>
import hello from '@admin/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    hello
  }
}
</script>
<style lang="scss" scoped>
.home {
  font-size: 24px;
}
</style>
