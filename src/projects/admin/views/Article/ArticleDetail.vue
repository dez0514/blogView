<template>
  <div class="detail-wrap">
    <div class="title">{{detail && detail.title}}</div>
    <div class="info" v-show="detail">
      <span>作者：{{detail && detail.author}}</span>
      <span>标签：{{detail && detail.tags}}</span>
      <span>创建时间：{{detail && detail.createTime}}</span>
      <span v-show="detail && (detail.createTime != detail.updateTime)">更新时间：{{detail && detail.updateTime}}</span>
    </div>
    <div class="content-wrap">
      <div class="banner" :style="{background:`url(${detail && detail.banner}) no-repeat`,backgroundPosition:'center',backgroundSize: 'cover'}"></div>
      <div class="markdown-body" v-html="content"></div>
    </div>
    <div class="toc-wrap" v-show="toc">
      <div v-html="toc"></div>
    </div>
  </div>
</template>
<script>
import { getAirticleDetail } from '../../api'
import { addCodeBtn } from "../../utils/linenum";
import markdown from "../../utils/markdown";
export default {
  name: 'articledetail',
  data() {
    return {
      detail: null,
      content: '',
      toc: ''
    };
  },
  computed:{
    id(){
      return this.$route.query.id || ''
    }
  },
  components: {
    
  },
  mounted() {
    this.getAirticleDetailData()
  },
  methods: {
    async getAirticleDetailData() {
      try {
        const params = {
          id: this.id
        }
        const { data } = await getAirticleDetail(params)
        if(data.code == 0) {
          this.detail = data.data
          const article = markdown.marked(data.data.content);
          article.then((res) => {
            this.content = res.content;
            this.toc = res.toc
            console.log(res.toc)
            this.$nextTick(() => {
              addCodeBtn();
            });
          });
        } else {
          this.$message({
            type: 'error',
            message: data.message
          })
        }
      } catch {
        this.$message({
          type: 'error',
          message: '网络错误（getAirticleDetail）'
        })
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.title {
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  line-height: 80px;
}
.content-wrap {
  padding: 0 50px 0 300px;
}
.info {
  text-align: center;
  margin-bottom: 20px;
  span{
    margin-right: 20px;
  }
}
.banner {
  overflow: hidden;
  height: 200px;
  border-radius: 10px;
}
:deep(.toc-wrap) {
  position: fixed;
  top: 216px;
  border: 1px solid #eaeaea;
  padding: 10px;
  box-shadow: 5px 5px 3px #eee;
  border-radius: 4px;
  li {
    overflow: hidden;
    max-width: 260px;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .anchor-ul {
    box-sizing: border-box;
  }
  .anchor-ul li  a {
    text-decoration: none;
    color: #666666;
    font-size: 14px;
  }
  .anchor-ul > .anchor-ul {
    padding-left: 12px;
  }
  .anchor-ul > .anchor-ul li a {
    font-size: 12px;
  }
}
</style>