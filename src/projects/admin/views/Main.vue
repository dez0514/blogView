<template>
  <el-container style="height: calc(100vh - 40px)">
    <el-aside width="auto">
      <sidenav></sidenav>
    </el-aside>
    <el-container>
      <el-header style="border-bottom:1px solid #e6e6e6;padding-left:0">
        <vheader></vheader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import sidenav from '../components/SideNav.vue'
import vheader from '../components/Header.vue'
export default {
    name: 'Main',
    data(){
        return {

        }
    },
    computed: {
    },
    components: {
        sidenav,
        vheader
    }
}
</script>
