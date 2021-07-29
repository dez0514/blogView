<template>
  <div class="archive">
    <banner></banner>
    <div class="archive-main">
      <div class="archive-nav"></div>
      <div class="card-list">
        <div class="card-item">
          <cardline></cardline>
        </div>
        <div class="card-item">
          <cardline></cardline>
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
import cardline from '../../components/CardLine.vue'
export default {
  data(){
    return {

    }
  },
  components: {
    banner,
    cardline,
    pagination
  }
}
</script>
<style lang="scss" scoped>
.card-list {
  display: grid;
  grid-template-columns: repeat(2, calc((100% - 18px) / 2));
  gap: 18px;
  padding-top: 30px;
}
.pagination-wrap {
  margin-top: 20px;
  text-align: center;
}
</style>
