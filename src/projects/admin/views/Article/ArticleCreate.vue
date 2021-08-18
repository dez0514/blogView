<template>
  <div class="create-wrap">
    <h3 style="margin-bottom:20px">创建文章/编辑文章</h3>
    <div class="inpt-wrap">
      <div class="label">文章标题:</div>
      <el-input class="inpt" v-model="artTitle" placeholder="请输入文章标题"></el-input>
    </div>
    <div class="inpt-wrap">
      <div class="label">文章封面:</div>
      <el-input class="inpt" v-model="artCover" placeholder="请输入文章封面图片地址"></el-input>
    </div>
    <div class="inpt-wrap top tags">
      <div class="label">选择标签:</div>
      <el-select class="inpt" v-model="tagssec" placeholder="请选择标签" multiple @change="changeTags">
        <el-option
          v-for="(item,index) in tagsOptions"
          :key="index"
          :label="item.tagname"
          :value="item.tagname"
        >
        </el-option>
      </el-select>
      <el-button type="primary" class="addbtn" @click="handleAddTag">新增标签</el-button>
    </div>
    <div class="inpt-wrap top content">
      <div class="label">文章内容:</div>
      <div style="flex:1">
        <simple ref="simplemde"></simple>
      </div>
    </div>
    <div class="submit-wrap">
      <el-button type="primary" class="subbtn" @click="handleSubmit" :loading="subload">提交文章</el-button>
    </div>
    <el-dialog title="新增标签" v-model="showAddPop" :close-on-click-modal="false" @closed="closeCallBack">
      <div class="pop-cont">
        <div class="pop-flex">
          <div class="pop-label">标签名：</div>
          <div class="pop-input">
            <el-input placeholder="请输入标签名称" v-model="tagname" clearable></el-input>
          </div>
        </div>
        <div class="pop-flex margintop">
          <div class="pop-label">背景颜色：</div>
          <div class="pop-color">
            <el-color-picker v-model="tagcolor" :predefine="['#333']"></el-color-picker>
          </div>
          <div style="margin-left:20px">别使用白色，白色看不见！</div>
        </div>
        <div class="pop-flex margintop" v-show="tagcolor && tagname">
          <div class="pop-label">预览：</div>
          <div class="pop-input">
            <div class="tag-strip" :style="{color: tagcolor}">{{tagname}}</div>
          </div>
        </div>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showAddPop = false">取 消</el-button>
          <el-button type="primary" @click="confirmAdd" :loading="addload">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script>
import simple from '../../components/Simplemde.vue'
import {getTags,addTags,postAirticle,updateAirticle } from '../../api'
export default {
  data() {
    return {
      showAddPop: false,
      artTitle: '',
      artCover: 'http://localhost:5000/serverImage/1625043943540.png',
      tagssec: [],
      tagname: '',
      tagcolor: null,
      tagsOptions: [],
      addload: false,
      subload: false
    };
  },
  components: {
      simple,
  },
  methods: {
    closeCallBack(){
      this.tagname = ''
      this.tagcolor = null
    },
    async getTagsList() {
      try {
        const { data } = await getTags();
        console.log(data)
        if(data.code === 0) {
          this.tagsOptions = data.data
        }
      } catch {}
    },
    changeTags(val) {
      // console.log(val)
      this.tagssec = val
      // console.log(this.tagssec)
    },
    async addTagsData() {
      try {
        this.addload = true
        const params = {
          tagname: this.tagname,
          color: this.tagcolor
        }
        const { data } = await addTags(params);
        this.addload = false
        if(data.code === 0) {
          this.$message({
            type: 'success',
            message: data.message
          })
          this.showAddPop = false
          this.getTagsList()
        } else {
          this.$message({
            type: 'error',
            message: data.message
          })
        }
      } catch {
        this.addload = false
        this.$message({
          type: 'error',
          content: '网络错误(addTags)'
        })
      }
    },
    handleAddTag() {
      this.showAddPop = true
    },
    confirmAdd() {
      // console.log(this.tagname,this.tagcolor)
      if(!this.tagname) {
        this.$message({
          type: 'error',
          message: '请输入标签名称'
        })
        return
      }
      if(!this.tagcolor) {
        this.$message({
          type: 'error',
          message: '请输入标签颜色'
        })
        return
      }
      if(this.addload) return
      this.addTagsData()
    },
    async postAirticleData() {
      try {
        const params = {
          title: this.artTitle,
          banner: this.artCover,
          content: this.$refs.simplemde.smde.value(),
          tags: Array.from(this.tagssec).join(','),
          author: 'zwd'
        }
        const { data } = await postAirticle(params);
        this.subload = false
        this.$message({
          type: data.code == 0 ? 'success': 'error',
          message: data.message
        })
      } catch {
        this.subload = false
        this.$message({
          type: 'error',
          message: '网络错误（postAirticle）'
        })
      }
    },
    async updateAirticleData() {
      try {
        const params = {
          id: 2,
          title:"test update222 title",
        }
        const {data} = await updateAirticle(params);
        console.log(data)
        this.getAirticleList()
      } catch {}
    },
    handleSubmit() {
      if(!this.artTitle) {
        this.$message({
          type: 'error',
          message: '请输入文章标题'
        })
        return
      }
      if(!this.artCover) {
        this.$message({
          type: 'error',
          message: '请输入文章封面'
        })
        return
      }
      // console.log(Array.from(this.tagssec))
      if(!this.tagssec.length === 0) {
        this.$message({
          type: 'error',
          message: '请输入文章标签'
        })
        return
      }
      let simplemde = this.$refs.simplemde.smde.value()
      if(!simplemde) {
        this.$message({
          type: 'error',
          message: '请输入文章内容'
        })
        return
      }
      if(this.subload) return
      this.subload = true
      this.postAirticleData()
    }
  },
  mounted() {
    this.getTagsList()
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
.pop-flex {
  display: flex;
  align-items: center;
  .pop-label {
    width: 80px;
  }
  .pop-input {
    flex: 1;
  }
  &.margintop {
    margin-top: 10px;
  }
  .tag-strip {
    display: inline-block;
    position: relative;
    font-size: 10px;
    padding: 0 10px;
    line-height: 20px;
  }
  .tag-strip::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: currentColor;
    opacity: .15;
    border-radius: 20px;
  }
}
@media screen and (max-width: 1265px){
  .inpt-wrap.content {
    min-width: 718px;
    width: 90%;
  }
}
</style>