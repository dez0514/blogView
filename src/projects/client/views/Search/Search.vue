<template>
  <div class="home">
    <banner></banner>
    <!-- <div class="load-wrap" style="position:relative;height:300px">
      <loading></loading>
    </div> -->
    <div class="home-main">
      <div class="card-list">
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
        <card></card>
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
  data() {
    return {
      
    }
  },
  computed: {
      querywords() {
          return this.$route.query.keywords || ''
      }
  },
  mounted() {
      console.log(this.querywords)
  },
  unmounted() {
  },
  methods: {
   
  }
}
</script>
<style lang="scss" scoped>
.home {
  font-size: 14px;
}
.card-list {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(5, calc((100% - 120px) / 5));
  gap: 30px;
  padding-top: 30px;
}
.home-main {
  display: flex;
}
@media screen and (max-width:1600px) {
  .card-list {
    grid-template-columns: repeat(4, calc((100% - 90px) / 4));
    gap: 30px;
  }
}
@media screen and (max-width:1200px) {
  .card-list {
    grid-template-columns: repeat(4, calc((100% - 75px) / 4));
    gap: 25px;
  }
}
@media screen and (max-width:990px) {
  .home-main {
    padding: 0 10px;
  }
  .card-list {
    grid-template-columns: repeat(3, calc((100% - 40px) / 3));
    gap: 20px;
    padding-top: 10px;
  }
}
@media screen and (max-width:768px) {
  .card-list {
    grid-template-columns: repeat(3, calc((100% - 30px) / 3));
    gap: 15px;
  }
}
@media screen and (max-width:575px) {
  .card-list {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
  }
}
.pagination-wrap {
  margin-top: 20px;
  text-align: center;
}
</style>
