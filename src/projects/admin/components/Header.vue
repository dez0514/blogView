<template>
  <div class="header">
    <div class="left">
      <div class="collbtn" @click="handleCollapse">
        <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
      </div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">创建/编辑文章</el-breadcrumb-item>
        <el-breadcrumb-item v-if="$route.path !== '/'">{{$route.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-dropdown trigger="click">
        <el-avatar style="background: #409eff; color: #fff; cursor: pointer">
          user
        </el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: 'vheader',
  computed: {
    ...mapState(["isCollapse"]),
  },
  methods: {
    ...mapMutations(["updateCollapse"]),
    handleCollapse() {
      this.updateCollapse({ isCollapse: !this.isCollapse });
    },
    handleOut() {
      this.$router.push({path:'/login'})
    }
  },
};
</script>
<style lang="scss" scoped>
.header {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    .collbtn {
      margin-right: 20px;
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      cursor: pointer;
    }
    .collbtn:hover {
      background-color: rgba($color: #000000, $alpha: 0.02);
    }
  }
}
</style>