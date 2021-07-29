<template>
  <div class="home">
    <banner></banner>
    <!-- <div class="load-wrap" style="position:relative;height:300px">
      <loading></loading>
    </div> -->
    <div class="home-main">
      <div class="home-nav"></div>
      <div class="card-list">
        <div style="width:255px">
          <card></card>
        </div>
      </div>
    </div>
    <div class="pagination-wrap">
      <pagination :total="20"></pagination>
    </div>
  </div>
</template>

<script>
import banner from '../../components/Banner.vue'
import pagination from '../../components/Pagination.vue'
import loading from '../../components/Loading.vue'
import card from '../../components/Card.vue'
export default {
  name: 'Home',
  components: {
    pagination,
    loading,
    card,
    banner
  },
  methods: {
    onchange(val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  font-size: 14px;
}
.card-list {
  padding-top: 30px;
}
.pagination-wrap {
  margin-top: 20px;
  text-align: center;
}
</style>
