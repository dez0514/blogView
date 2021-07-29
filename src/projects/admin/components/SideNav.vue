<template>
  <div>
    <el-menu
      class="el-menu-vertical"
      :style="{ boxSizing: 'border-box', height: 'calc(100vh - 40px)' }"
      :default-active="$route.path"
      router="router"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <div class="logo" @click="$router.push('/')">
        <i class="logo-icon el-icon-milk-tea"></i>{{ isCollapse ? "" : "博客管理系统" }}
      </div>
      <el-scrollbar :style="{height: 'calc(100vh - 40px - 60px)'}">
        <el-menu-item
          v-for="(item, index) in tablist"
          :key="index"
          :index="item.path"
        >
          <i :class="item.iconClass"></i>
          <template #title>{{ item.txt }}</template>
        </el-menu-item>
      </el-scrollbar>
    </el-menu>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "sidenav",
  data() {
    return {
      tablist: [
        {
          path: "/",
          txt: "创建/编辑文章",
          iconClass: "el-icon-edit",
        },
        {
          path: "/articleList",
          txt: "文章列表",
          iconClass: "el-icon-menu",
        },
        {
          path: "/commentManage",
          txt: "留言管理",
          iconClass: "el-icon-message",
        }
      ],
    };
  },
  computed: {
    ...mapState(["isCollapse"]),
  },
};
</script>
<style lang="scss" scoped>
.logo {
  overflow: hidden;
  box-sizing: border-box;
  padding: 0 20px 0 20px;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #909399;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  .logo-icon {
    position: relative;
    top: 1px;
    font-size: 18px;
    color:#fff;
    margin-right:5px;
    width: 24px;
    text-align: center;
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
</style>