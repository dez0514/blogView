<template>
  <div class="tags-nav">
    <div class="top-nav">
      <div class="items-wrap" @click="handleClickTab(-1)">
        <div class="nav-wrap">
          <div class="nav-item" :class="tabIndex === -1 ? 'active' : ''">
            <div class="item-icon">
              <el-icon class="el-icon-reading"></el-icon>
            </div>
            <div class="item-txt">最新</div>
          </div>
        </div>
      </div>
    </div>
    <div class="title">导航</div>
    <div class="bot-nav">
      <div
        class="items-wrap"
        v-for="(item, index) in list"
        :key="index"
        @click="handleClickTab(index)"
      >
        <div class="nav-wrap">
          <div class="nav-item" :class="tabIndex === index ? 'active' : ''">
            <div class="item-icon">
              <el-icon class="el-icon-reading"></el-icon>
            </div>
            <div class="item-txt">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { icon: "", name: "javascript" },
        { icon: "", name: "react" },
        { icon: "", name: "vue" },
        { icon: "", name: "webpack" },
        { icon: "", name: "node" },
        { icon: "", name: "源码解读" },
        { icon: "", name: "mongodb" },
        { icon: "", name: "生活随笔" },
      ],
      tabIndex: -1,
    };
  },
  methods: {
    handleClickTab(index) {
      if (this.tabIndex === index) return;
      this.tabIndex = index;
    },
  },
};
</script>
<style lang="scss" scoped>
.title {
  margin-top: 15px;
  font-size: 12px;
  line-height: 30px;
  color: #8492a6;
  border-top: rgba(31, 45, 61, 0.1) 1px solid;
}
.tags-nav {
  box-sizing: border-box;
  padding: 0 20px;
  max-width: 200px;
}
.items-wrap {
  margin-top: 15px;
  cursor: pointer;
}
.nav-wrap {
  display: inline-block;
}
.nav-item {
  box-sizing: border-box;
  padding: 0 15px;
  line-height: 38px;
  transition: all 0.3s;
  height: 38px;
  font-size: 14px;
  border-radius: 19px;
  display: flex;
  align-items: center;
  .item-icon {
    width: 18px;
    margin-right: 10px;
    flex-shrink: 0;
  }
  .item-txt {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.nav-item.active {
  color: #fff;
  background-color: #20a0ff;
  -webkit-box-shadow: 0 8px 10px rgba(32, 160, 255, 0.3);
  box-shadow: 0 8px 10px rgba(32, 160, 255, 0.3);
}
.items-wrap:hover .nav-item {
  background: rgba(32, 160, 255, 0.1);
  color: #20a0ff;
}
.items-wrap:hover .nav-item.active {
  color: #fff;
  background-color: #20a0ff;
}
</style>