<template>
  <div class="create-wrap">
    <h3 style="margin-bottom:20px">创建文章/编辑文章</h3>
    <div class="inpt-wrap">
      <div class="label">文章标题:</div>
      <el-input class="inpt" placeholder="请输入文章标题"></el-input>
    </div>
    <div class="inpt-wrap">
      <div class="label">文章封面:</div>
      <el-input class="inpt" placeholder="请输入文章封面图片地址"></el-input>
    </div>
    <div class="inpt-wrap top tags">
      <div class="label">选择标签:</div>
      <el-select class="inpt" v-model="tags" placeholder="请选择标签" multiple>
        <el-option
          v-for="item in tagsOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button type="primary" class="addbtn" @click="handleTest1">新增标签</el-button>
    </div>
    <div class="inpt-wrap top content">
      <div class="label">文章内容:</div>
      <div style="flex:1">
        <simple></simple>
      </div>
    </div>
    <div class="submit-wrap">
      <el-button type="primary" class="subbtn" @click="handleTest">提交文章</el-button>
    </div>
  </div>
</template>
<script>
import simple from '../../components/Simplemde.vue'
import {getAirticle,postAirticle,updateAirticle } from '../../api'
export default {
  data() {
    return {
      tags: [],
      tagsOptions: [
        {
          value: "1",
          label: "黄金糕",
        },
        {
          value: "2",
          label: "双皮奶",
        },
        {
          value: "3",
          label: "蚵仔煎",
        }
      ],
    };
  },
  components: {
      simple
  },
  methods: {
    async getAirticleList() {
      try {
        const data = await getAirticle({
          tags: 'react',
          id: "1",
          tag: "1"
        });
        console.log(data)
      } catch {}
    },
    async postAirticleData() {
      try {
        const params = {
          title:"test post title12",
          content:"test post content12",
          tags:"react"
        }
        const data = await postAirticle(params);
        console.log(data)
        this.getAirticleList()
      } catch {}
    },
    async updateAirticleData() {
      try {
        const params = {
          id: 2,
          title:"test update222 title",
        }
        const data = await updateAirticle(params);
        console.log(data)
        this.getAirticleList()
      } catch {}
    },
    handleTest() {
      // this.postAirticleData()
    },
    handleTest1(){
      // this.updateAirticleData()
    }
  },
  mounted() {
    // this.getAirticleList()
  }
};
</script>
<style lang="scss" scoped>
.inpt-wrap {
  display: flex;
  align-items: center;
  width: 600px;
  margin-bottom: 20px;
  &.tags {
    width: 718px;
  }
  &.content {
    width:1000px;
    margin-bottom: 10px;
  }
  &.top {
    align-items: flex-start;
  }
  .label {
    word-wrap: none;
    padding-right: 20px;
  }
  &.top .label {
      margin-top: 9px;
  }
  .inpt {
    flex: 1;
  }
  .addbtn {
      margin-left: 20px;
  }
}
@media screen and (max-width: 1265px){
  .inpt-wrap.content {
    min-width: 718px;
    width: 90%;
  }
}
</style>