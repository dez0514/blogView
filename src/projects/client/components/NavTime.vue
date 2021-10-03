<template>
  <div class="time-nav">
    <div
      class="items-wrap"
      :class="index===0 ? 'all':''"
      v-for="(item, index) in list"
      :key="index"
      @click="handleOpenTab(index)"
    >
      <div class="nav-wrap">
        <div class="nav-item" :class="tabOutIndex === index ? 'active' : ''">
          <div class="item-txt">{{ item.name }}</div>
          <div class="item-month-list" v-show="openIndex === index">
            <div
              class="item-month"
              :class="tabOutIndex === index && tabIndex === idx ? 'active' : ''"
              v-for="(inner, idx) in item.month"
              :key="idx"
              @click="handleClickTab(index, idx)"
            >
              {{ inner.name }}
            </div>
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
        { name: "全部",year: 0, },
        { name: "2021年",year: 2021, 
          month: [
          {name: "全年",month: 0},
          {name: "12月",month: 12}
         ] 
        },
        { name: "2020年",year: 2020, 
          month: [
          {name: "全年",month: 0},
          {name: "12月",month: 12}
         ]
        }
      ],
      openIndex: 0,
      tabOutIndex: 0,
      tabIndex: -1
    };
  },
  mounted(){
    this.getDataList()
  },
  methods: {
    handleOpenTab(index) {
      if (this.openIndex === index) return;
      this.openIndex = index;
      if(index === 0) { //  全部
        this.tabIndex = -1
        this.tabOutIndex = 0
        this.getDataList()
      }
    },
    handleClickTab(index, idx) {
      this.tabIndex = idx
      this.tabOutIndex = index
      this.getDataList()
    },
    getDataList() {
      let year = 0; // 全部
      let month = 0; // 全年
      if(this.tabOutIndex > 0 && this.tabIndex > -1) {
        year = this.list[this.tabOutIndex].year
        month = this.list[this.tabOutIndex]['month'][this.tabIndex].month
      }
      console.log(year,month)
    }
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
.time-nav {
  box-sizing: border-box;
  width: 100%;
}
.items-wrap {
  box-sizing: border-box;
  cursor: pointer;
}
.nav-item {
  box-sizing: border-box;
  overflow: hidden;
  .item-txt {
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 20px;
    line-height: 60px;
    height: 60px;
    padding-left: 20px;

  }
  .item-month-list {
    overflow: hidden;
    box-sizing: border-box;
    padding-left: 40px;
    font-size: 16px;
    color: #99a9bf;
    transition: all 0.5s;
  }
  .item-month {
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
  }
}
.nav-item.active {
  color: #20a0ff;
}
.item-month.active {
  color: #20a0ff;
}
.item-txt:hover {
  color: #20a0ff;
}
.item-month:hover {
  color: #20a0ff;
}
@media screen and (max-width: 990px) {
  .time-nav{
    background-color: #fff;
  }
  .all {
    box-shadow: 0 5px 7px rgba(31, 45, 61, 0.1);
  }
  .item-month-list {
    box-shadow: inset 0 0 7px rgba(31, 45, 61, 0.1);
  }
}
</style>