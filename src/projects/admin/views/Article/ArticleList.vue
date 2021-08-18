<template>
  <div>
    <h3 style="margin-bottom:20px">文章列表</h3>
    <div class="article-wrap">
      <div class="articles">
        <Card></Card>
      </div>
    </div>
    <div class="pagination-wrap">
      <el-pagination background layout="prev, pager, next" :total="1000">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import Card from '../../components/Card.vue'
import { getAirticle } from '../../api'
export default {
  data() {
    return {
      list: [],
      pageNum: 1,
      pageSize: 10
    };
  },
  components: {
    Card
  },
  mounted() {
    this.getAirticleData()
  },
  methods: {
    // todo search filter
    async getAirticleData() {
      try {
        const params = {
          pageNum: this.pageNum,
          pageSize: this.pageSize
        }
        const { data } = await getAirticle(params)
        if(data.code == 0) {
          this.list = data.data
        } else {
          this.$message({
            type: 'error',
            message: data.message
          })
        }
      } catch {
        this.$message({
          type: 'error',
          message: '网络错误（postAirticle）'
        })
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.article-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .articles {
    width: 255px;
  }
}
.pagination-wrap {
    margin-top: 20px;
    text-align: center;
}
</style>