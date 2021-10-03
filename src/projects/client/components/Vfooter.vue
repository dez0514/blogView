<template>
    <div class="footer-wrap">
        <!-- <div class="visitor">博客已运行：00天00小时00分00秒</div> -->
        <div class="copy-right">保留版权作者 Wintermelon</div>
        <div class="bn-num"><span class="bspan">昨天太近、明天太远</span>鄂ICP备2020019488号-1</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
.footer-wrap {
    box-sizing: border-box;
    height: 138px;
    width: 100%;
    background-color: #e6eaf0;
    padding-top: 40px;
    box-shadow: 0 1px rgba(255, 255, 255, 0.5) inset;
    border-top: 1px solid #d8e0ea;
    box-sizing: border-box;
    .visitor {
        font-size: 14px;
        color: #99a9bf;
        text-align: center;
        margin-bottom: 15px;
    }
    .copy-right,.bn-num ,.devide {
        color: #99a9bf;
        font-size: 12px;
        text-align: center;
    }
    .bn-num {
        margin-top: 10px;
    }
    .bspan {
        display: inline-block;
        margin-right: 10px;
    }
}
@media screen and (max-width: 990px) {
  .footer-wrap {
    height: 60px;
    padding-top: 14px;
    .visitor {
        display: none;
    }
    .bn-num {
        margin-top: 0;
    }
  }
}
</style>