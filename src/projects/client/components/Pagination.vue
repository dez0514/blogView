<template>
  <div class="pagination" v-show="total > 0">
    <div class="box btn" :class="current === 1 ? 'disable':''" @click="prevClick">&lt;</div>
    <div
      :class="['box', current == 1 ? 'act' : '']"
      v-if="pageCount > 0"
      @click="numClick(1)"
    >
      1
    </div>
    <div
      class="box dot dot_prev"
      v-show="showPrevDot && pageCount > 1"
      @click="dotClick('prev')"
    ></div>
    <div
      :class="['box', current == i ? 'act' : '']"
      v-for="i in countList"
      :key="i"
      @click="numClick(i)"
    >
      {{ i }}
    </div>
    <div
      class="box dot dot_next"
      v-show="showNextDot && pageCount > 1"
      @click="dotClick('next')"
    ></div>
    <div
      :class="['box', current == pageCount ? 'act' : '']"
      v-if="pageCount > 1"
      @click="numClick(pageCount)"
    >
      {{ pageCount }}
    </div>
    <div class="box btn" :class="current === pageCount ? 'disable':''" @click="nextClick" v-show="pageCount > 1">&gt;</div>
  </div>
</template>
<script>
export default {
  props: {
    pageSize: {
      type: Number,
      default: 5,
    },
    pageNum: {
      type: Number,
      default: 1,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 0,
    },
    maxPageCount: {
      type: Number,
      validator(val) {
        let valid = (val | 0) === val && val > 4 && val < 22 && val % 2 === 1;
        if (!valid) {
          console.error("maxPageCount请传入4-22之间的奇数！");
        }
        return valid;
      },
      default: 5,
    },
  },
  created() {
    if (this.currentPage > this.pageCount) {
      console.error("传入currentPage已超过最大页数！");
    } else {
      this.current = this.currentPage;
    }
  },
  data() {
    return {
      current: 1,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.pageSize);
    },
    halfMaxPageCount() {
      return (this.maxPageCount - 1) / 2;
    },
    showPrevDot() {
      let showPrevDot = false;
      if (this.pageCount > this.maxPageCount) {
        if (this.current > this.maxPageCount - this.halfMaxPageCount) {
          showPrevDot = true;
        }
      }
      return showPrevDot;
    },
    showNextDot() {
      let showNextDot = false;
      if (this.pageCount > this.maxPageCount) {
        if (this.current < this.pageCount - this.halfMaxPageCount) {
          showNextDot = true;
        }
      }
      return showNextDot;
    },
    countList() {
      let arr = [];
      if (this.showPrevDot && !this.showNextDot) {
        const startPage = this.pageCount - (this.maxPageCount - 2);
        for (let i = startPage; i < this.pageCount; i++) {
          arr.push(i);
        }
      } else if (!this.showPrevDot && this.showNextDot) {
        for (let i = 2; i < this.maxPageCount; i++) {
          arr.push(i);
        }
      } else if (this.showPrevDot && this.showNextDot) {
        const offset = Math.floor(this.maxPageCount / 2) - 1;
        for (let i = this.current - offset; i <= this.current + offset; i++) {
          arr.push(i);
        }
      } else {
        for (let i = 2; i < this.pageCount; i++) {
          arr.push(i);
        }
      }
      return arr;
    },
  },
  methods: {
    prevClick() {
      if (this.current == 1) return;
      this.current--;
      this.$emit("change", this.current);
    },
    nextClick() {
      if (this.current == this.pageCount) return;
      this.current++;
      this.$emit("change", this.current);
    },
    numClick(num) {
      this.current = num;
      this.$emit("change", this.current);
    },
    dotClick(type) {
      const maxPageOffset = this.maxPageCount - 2;
      let newPage = this.current;
      if (type === "prev") {
        newPage = this.current - maxPageOffset;
      } else if (type === "next") {
        newPage = this.current + maxPageOffset;
      }
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageCount) {
        newPage = this.pageCount;
      }
      this.current = newPage;
      this.$emit("change", this.current);
    },
  },
};
</script>
<style lang="scss" scoped>
.pagination {
  white-space: nowrap;
  padding: 2px 5px;
  color: #303133;
  font-weight: 700;
  .box {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #8492a6;
    min-width: 30px;
    border-radius: 2px;
    padding: 0 4px;
    display: inline-block;
    font-size: 13px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    user-select: none;
    &.act {
      background-color: #20a0ff;
      color: #fff;
    }
    &.disable {
      color: #d9d9e6;
      cursor:not-allowed;
    }
  }
  .dot {
    position: relative;
  }
  .dot::before {
    content: "···";
  }
  .dot:hover {
    color: #20a0ff;
  }
  .dot_prev:hover::before {
    content: "<<";
  }
  .dot_next:hover::before {
    content: ">>";
  }
}
@media screen and (max-width: 990px) {
  .pagination .box {
    margin: 0 2px;
  }
}
</style>