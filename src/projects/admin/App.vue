<template>
<div class="router-container">
  <router-view/>
</div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
    };
  }
};
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
}
body {
  background-color: #f5f5f5;
}
</style>
<style lang="scss" scoped>
.router-container {
  overflow: hidden;
  margin: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 17px rgba(0,0,0,.35)
}
</style>
