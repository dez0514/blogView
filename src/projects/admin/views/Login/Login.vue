<template>
  <div class="login-wrap">
    <div class="login-box">
      <div class="title">博客管理系统</div>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="56px"
        class="login-form"
      >
        <el-form-item label="用户名" prop="user">
          <el-input class="ipt" v-model.number="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input class="ipt" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    let checkUser = (rule,value,callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      setTimeout(()=>{
        callback();
      },1000)
    };
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        setTimeout(()=>{
          callback();
        },1000)
      }
    };
    return {
      ruleForm: {
        user: "",
        pass: "",
      },
      rules: {
        user: [{ validator: checkUser, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push("/")
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style lang="scss" scoped>
.login-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 40px);
  .login-box {
    box-sizing: border-box;
    padding: 20px 20px 0 20px;
    width: 360px;
    border-radius: 10px;
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
    .title {
      padding-bottom: 20px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
    }
    .login-form .login-btn {
      margin-left: -56px;
      width: calc(100% + 56px);
    }
  }
}
</style>
