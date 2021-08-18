<template>
    <div class="comment-editor">
        <textarea class="comment-mde" ref="commentmde" v-model="content" @input="onTextChange" placeholder="写点痕迹..." rows="5"></textarea>
        <div class="btn-wraps">
            <div class="btn-box">
                <div class="btn emojo" @click="handleShowEmoji">
                    <svg class="icon">
                        <svg id="iconbiaoqing" viewBox="0 0 1025 1024"><path d="M512.001664 1024C229.238048 1024 0.001664 794.763648 0.001664 512 0.001664 229.236352 229.238048 0 512.001664 0 794.765312 0 1024.001664 229.236352 1024.001664 512 1024.001664 794.763648 794.765312 1024 512.001664 1024ZM512.001664 64C264.571264 64 64.001664 264.5696 64.001664 512 64.001664 759.4304 264.571264 960 512.001664 960 759.432064 960 960.001664 759.4304 960.001664 512 960.001664 264.5696 759.432064 64 512.001664 64ZM401.345664 782.24C448.769664 800.896 501.217664 801.344 548.993664 783.52 596.705664 765.728 658.081664 731.328 681.377664 686.56 691.521664 666.976 698.241664 657.728 717.921664 667.776 737.601664 677.888 740.577664 691.328 730.401664 710.88 697.985664 773.184 643.553664 821.12 577.217664 845.856 544.769664 857.952 510.785664 864 476.833664 864 441.185664 864 406.017664 856.128 371.777664 844.064 350.561664 836.576 327.713664 794.56 339.201664 770.752 348.769664 750.88 380.769664 774.112 401.345664 782.24ZM584.776064 304.555168C555.23312 314.995424 538.470304 318.686112 512.004672 318.686112 481.66512 318.686112 459.37488 314.80768 419.043616 304.364672 413.900288 303.030016 401.38432 299.809664 398.17712 299.013984 368.017632 291.531808 345.520352 288 320.001664 288 178.508704 288 130.431616 297.83168 128.523616 349.505344 128.528576 352.001184 128.523616 417.946528 134.623808 439.344608 153.3024 504.864992 216.077984 543.232 320.001664 543.232 387.378944 543.232 432.442176 524.36064 470.709728 488.72368 477.84608 482.077888 509.811872 451.386816 512.108192 451.379392 512.17872 451.379168 531.49456 480.652192 536.24912 486.177632 568.58464 523.756032 619.221344 543.232 704.001664 543.232 799.174176 543.232 857.726464 505.707392 882.649408 442.870464 893.405792 415.750944 895.978688 392.948672 895.9776 360.856128 895.9776 299.342304 828.487776 281.364192 704.001664 281.364192 660.625824 281.364192 588.509312 303.231712 584.776064 304.555168ZM831.9776 360.574464C831.978432 385.424608 830.14736 401.652544 823.157984 419.274464 808.167808 457.068416 773.584416 479.232 704.001664 479.232 636.624832 479.232 603.861312 466.630464 584.76144 444.433696 581.92576 441.13824 569.168672 422.133984 567.122496 419.173504 552.868448 398.550112 536.858464 387.298976 511.901152 387.379744 491.433024 387.445952 475.074016 395.497888 458.759456 410.193568 452.897504 415.473824 432.257568 437.0784 427.093312 441.88768 400.32944 466.811776 370.670976 479.232 320.001664 479.232 242.406752 479.232 207.468512 457.045312 195.586784 419.863456 190.644064 404.396032 189.525056 361.769312 192.237376 360.93568 194.506944 360.238144 261.100448 352 320.001664 352 339.432224 352 357.212384 354.791264 382.766688 361.130976 385.756544 361.872704 397.80144 364.97216 403.00112 366.32144 448.151744 378.01232 475.013184 382.686112 512.004672 382.686112 546.967456 382.686112 570.305792 377.54768 606.100768 364.897984 609.963872 363.528512 669.042976 345.364192 704.001664 345.364192 787.940896 345.364192 831.9776 357.094816 831.9776 360.574464Z"></path></svg>
                    </svg>
                    <div class="emoji-list-wrap" v-show="showEmoji">
                        <ul class="emoji-list">
                            <li class="emoji-item" v-for="(item,index) in faceList" :key="index" @click.prevent="handleClickEmoji(item)">
                                <img :src="require(`../assets/face/${item.url}`)" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="btn preview" @click="handlePreview">
                    <svg class="icon">
                        <svg id="iconeditor-preview" viewBox="0 0 1024 1024"><path d="M232.107 19.505h90.892c14.19 0 24.283 7.314 30.525 19.505a34.23 34.23 0 0 1-0.975 34.864 34.475 34.475 0 0 1-31.696 18.042c-46.275-0.195-92.745-0.195-139.069 0-19.7 0-38.522 4.047-55.588 14.287-35.304 21.456-53.882 53.443-54.467 95.232-0.537 37.742-0.195 75.484-0.195 113.226 0 7.948-0.976 15.506-5.315 22.674a35.596 35.596 0 0 1-39.985 16.238A35.889 35.889 0 0 1 0.195 319.098c0-49.542-0.536-99.28 0.195-148.821 0.585-50.323 21.65-90.6 60.709-120.93 22.04-17.067 47.055-26.575 74.41-29.452 2.097-0.39 4.535-0.39 7.022-0.39h89.576z m526.384 0h-90.94c-14.239 0-24.333 7.314-30.574 19.505a34.23 34.23 0 0 0 0.975 34.864c6.973 11.996 17.603 18.042 31.695 18.042 46.275-0.195 92.745-0.195 139.07 0 19.699 0 38.521 4.047 55.588 14.287 35.303 21.456 53.882 53.443 54.467 95.232 0.536 37.742 0.195 75.484 0.195 113.226 0 7.948 0.975 15.506 5.315 22.674a35.596 35.596 0 0 0 39.985 16.238 35.889 35.889 0 0 0 26.039-34.475c0-49.542 0.585-99.28-0.196-148.821-0.585-50.323-21.65-90.6-60.708-120.93a144.14 144.14 0 0 0-74.41-29.452 95.28 95.28 0 0 0-7.169-0.39h-89.332zM232.107 996.937h90.892c14.19 0 24.283-7.314 30.525-19.505a34.23 34.23 0 0 0-0.975-34.864 34.475 34.475 0 0 0-31.696-18.042c-46.275 0.195-92.745 0.195-139.069 0-19.7 0-38.522-4.048-55.588-14.288-35.304-21.455-53.882-53.443-54.467-95.232-0.537-37.741-0.195-75.483-0.195-113.225a41.545 41.545 0 0 0-5.315-22.674 35.596 35.596 0 0 0-39.985-16.238A35.889 35.889 0 0 0 0.195 697.295c0 49.591-0.536 99.328 0.195 148.87 0.585 50.323 21.65 90.6 60.709 120.93a144.14 144.14 0 0 0 81.627 29.842h89.38z m526.384 0h-90.94c-14.239 0-24.333-7.314-30.574-19.505a34.23 34.23 0 0 1 0.975-34.864 34.475 34.475 0 0 1 31.695-18.042c46.275 0.195 92.745 0.195 139.07 0 19.699 0 38.521-4.048 55.588-14.288 35.303-21.455 53.882-53.443 54.467-95.232 0.536-37.741 0.195-75.483 0.195-113.225 0-7.948 0.975-15.506 5.315-22.674a35.596 35.596 0 0 1 39.985-16.238 35.889 35.889 0 0 1 26.039 34.426c0 49.591 0.585 99.328-0.196 148.87-0.585 50.323-21.65 90.6-60.708 120.93a144.14 144.14 0 0 1-81.628 29.842h-89.331zM202.313 700.611c5.657 14.531 17.262 23.016 30.915 23.016h520.875c9.265 0 17.457-3.901 24.088-11.606 6.632-7.753 13.507-17.213 13.507-28.282V345.088c0-29.403-11.995-44.13-25.648-49.932-13.654-5.998-28.087-1.512-37.547 11.215l-181.59 246.004a30.769 30.769 0 0 1-25.648 13.75 30.769 30.769 0 0 1-25.6-13.75l-80.847-109.568a31.354 31.354 0 0 0-25.844-13.751c-10.24 0-18.92 4.876-25.747 13.946l-155.794 215.04a43.74 43.74 0 0 0-5.12 42.569z"></path></svg>
                    </svg>
                </div>
            </div>
            <div class="btn-box">
                <div class="btn tips">
                    <svg class="icon">
                        <svg id="iconinfo" viewBox="0 0 1024 1024"><path d="M512 128a384 384 0 1 1-0.042667 768.042667A384 384 0 0 1 512 128z m-19.2 553.258667l76.501333-248.362667-16-1.408-91.52 11.690667-4.693333 13.994666c3.754667 0.085333 6.954667 0.256 9.6 0.512a17.066667 17.066667 0 0 1 13.226667 7.253334c2.986667 4.266667 4.266667 9.088 3.84 14.293333-0.725333 8.277333-3.584 20.48-8.533334 36.565333l-51.754666 166.954667c-4.181333 13.312-6.656 24.277333-7.424 33.109333-1.152 13.226667 1.28 24.533333 7.338666 33.792a33.28 33.28 0 0 0 26.282667 15.402667c30.08 2.645333 61.098667-26.112 93.269333-86.229333l-8.362666-7.936c-13.141333 22.016-24.106667 37.077333-32.853334 45.184-3.285333 3.328-6.4 4.864-9.429333 4.565333-1.834667-0.128-3.413333-1.365333-4.778667-3.797333a12.714667 12.714667 0 0 1-1.706666-7.509334c0.384-4.437333 2.688-13.866667 6.954666-28.074666zM554.496 384a41.301333 41.301333 0 0 0 30.293333-12.458667A41.301333 41.301333 0 0 0 597.333333 341.333333a41.429333 41.429333 0 0 0-12.373333-30.208 41.344 41.344 0 0 0-30.421333-12.458666 40.96 40.96 0 0 0-30.165334 12.458666A41.429333 41.429333 0 0 0 512 341.333333c0 11.776 4.138667 21.845333 12.501333 30.208 8.405333 8.277333 18.346667 12.458667 30.037334 12.458667z"></path></svg>
                    </svg>
                    <div>可使用部分markdown语法</div>
                </div>
                <div class="btn cancel">取消回复</div>
                <div class="btn submit">
                    <svg class="icon">
                        <svg id="iconfabu" viewBox="0 0 1024 1024"><path d="M817.657468 775.758196 454.710202 664.079674l362.949312-418.788062-474.627834 418.788062L63.836911 552.403199 957.255877 77.775364 817.657468 775.758196 817.657468 775.758196zM454.710202 943.275467 454.710202 747.839333l111.673405 55.838749L454.710202 943.275467 454.710202 943.275467z"></path></svg>
                    </svg>
                    <div>发布评论</div>
                </div>
            </div>
        </div>
        <div class="markdown-body" v-html="htmlContent"></div>
    </div>
</template>
<script>
import { addCodeBtn } from "../utils/linenum";
import markdown from "../utils/markdown";
export default {
    data() {
        return {
            content: '',
            htmlContent: '',
            showEmoji: false,
            faceList:[
                {'title':'微笑','url':'weixiao.gif'},
                {'title':'嘻嘻','url':'xixi.gif'},
                {'title':'哈哈','url':'haha.gif'},
                {'title':'可爱','url':'keai.gif'},
                {'title':'可怜','url':'kelian.gif'},
                {'title':'挖鼻','url':'wabi.gif'},
                {'title':'吃惊','url':'chijing.gif'},
                {'title':'害羞','url':'haixiu.gif'},
                {'title':'挤眼','url':'jiyan.gif'},
                {'title':'闭嘴','url':'bizui.gif'},
                {'title':'鄙视','url':'bishi.gif'},
                {'title':'爱你','url':'aini.gif'},
                {'title':'泪','url':'lei.gif'},
                {'title':'偷笑','url':'touxiao.gif'},
                {'title':'亲亲','url':'qinqin.gif'},
                {'title':'生病','url':'shengbing.gif'},
                {'title':'太开心','url':'taikaixin.gif'},
                {'title':'白眼','url':'baiyan.gif'},
                {'title':'右哼哼','url':'youhengheng.gif'},
                {'title':'左哼哼','url':'zuohengheng.gif'},
                {'title':'嘘','url':'xu.gif'},
                {'title':'衰','url':'shuai.gif'},
                {'title':'吐','url':'tu.gif'},
                {'title':'哈欠','url':'haqian.gif'},
                {'title':'抱抱','url':'baobao.gif'},
                {'title':'怒','url':'nu.gif'},
                {'title':'疑问','url':'yiwen.gif'},
                {'title':'馋嘴','url':'chanzui.gif'},
                {'title':'拜拜','url':'baibai.gif'},
                {'title':'思考','url':'sikao.gif'},
                {'title':'汗','url':'han.gif'},
                {'title':'困','url':'kun.gif'},
                {'title':'睡','url':'shui.gif'},
                {'title':'钱','url':'qian.gif'},
                {'title':'失望','url':'shiwang.gif'},
                {'title':'酷','url':'ku.gif'},
                {'title':'色','url':'se.gif'},
                {'title':'哼','url':'heng.gif'},
                {'title':'鼓掌','url':'guzhang.gif'},
                {'title':'晕','url':'yun.gif'},
                {'title':'悲伤','url':'beishang.gif'},
                {'title':'抓狂','url':'zhuakuang.gif'},
                {'title':'黑线','url':'heixian.gif'},
                {'title':'阴险','url':'yinxian.gif'},
                {'title':'怒骂','url':'numa.gif'},
                {'title':'互粉','url':'hufen.gif'},
                {'title':'书呆子','url':'shudaizi.gif'},
                {'title':'愤怒','url':'fennu.gif'},
                {'title':'感冒','url':'ganmao.gif'},
                {'title':'心','url':'xin.gif'},
                {'title':'伤心','url':'shangxin.gif'},
                {'title':'猪','url':'zhu.gif'},
                {'title':'熊猫','url':'xiongmao.gif'},
                {'title':'兔子','url':'tuzi.gif'},
                {'title':'OK','url':'ok.gif'},
                {'title':'耶','url':'ye.gif'},
                {'title':'GOOD','url':'good.gif'},
                {'title':'NO','url':'no.gif'},
                {'title':'赞','url':'zan.gif'},
                {'title':'来','url':'lai.gif'},
                {'title':'弱','url':'ruo.gif'},
                {'title':'草泥马','url':'caonima.gif'},
                {'title':'神马','url':'shenma.gif'},
                {'title':'囧','url':'jiong.gif'},
                {'title':'浮云','url':'fuyun.gif'},
                {'title':'给力','url':'geili.gif'},
                {'title':'围观','url':'weiguan.gif'},
                {'title':'威武','url':'weiwu.gif'},
                {'title':'话筒','url':'huatong.gif'},
                {'title':'蜡烛','url':'lazhu.gif'},
                {'title':'蛋糕','url':'dangao.gif'},
                {'title':'发红包','url':'fahongbao.gif'}
            ],
        }
    },
    methods: {
        //显示隐藏表情列表
        handleShowEmoji() {
            this.showEmoji = !this.showEmoji
        },
        // 点击表情
        handleClickEmoji(item) {
            let str = '[' + item.title + ']'
            let obj = this.$refs.commentmde
            if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
                let startPos = obj.selectionStart;
                let endPos = obj.selectionEnd;
                let tmpStr = this.content;
                this.content = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos, tmpStr.length);
            } else {
                this.content += str;
            }
            obj.focus()
        },
        // 点击预览
        handlePreview() {
            let regAll = /\[[\u4e00-\u9fa5]+\]/g;
            let reg = /\[[\u4e00-\u9fa5]+\]/;
            let matchList = this.content.match(regAll);
            let str = this.content;
            if(matchList){
                for(let i=0;i<matchList.length;i++){
                    for(let j=0;j<this.faceList.length;j++){
                        if("["+this.faceList[j].title +"]" == matchList[i]){
                            str = str.replace(reg, '<img src="'+ require(`../assets/face/${this.faceList[j].url}`) +'"/>');
                        }
                    }
                    
                }
            }
            // this.htmlContent = res.content
            // 支持解析markdown
            const markDesc = markdown.marked(str);
            markDesc.then((res) => {
                console.log(res)
                this.htmlContent = res.content
                this.$nextTick(() => {
                    // 新增代码复制 和 代码行号 
                    //todo：代码头部标题滚动 定位 有问题
                    addCodeBtn();
                });
            });

        },
        onTextChange(val) {

        }
    }
}
</script>
<style lang="scss" scoped>
.comment-editor {
    margin-bottom: 30px;
}
.comment-mde {
    box-sizing: border-box;
    width: 100%;
    display: block;
    color: #738192;
    background-color: #e6eaf0;
    resize: none;
    padding: 6px 12px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 1.42858;
    border: 1px solid transparent;
    outline: none;
    -webkit-transition: all .5s cubic-bezier(.645,.045,.355,1);
    transition: all .5s cubic-bezier(.645,.045,.355,1);
}
.comment-mde:focus {
    box-shadow: 0 0 0 3px rgba(32, 160, 255, 0.2);;
    border-color: #20a0ff;
    background-color: #fff;
}
.btn-wraps {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
  overflow: hidden;
  font-size: 14px;
}
.btn-box,.btn {
    display: flex;
    align-items: center;
}
.emojo {
    position: relative;
    margin-right: 15px;
    cursor: pointer;
}
.preview {
    cursor: pointer;
}
.tips {
    font-size: 12px;
    margin-right: 20px;
    .icon {
        width: 16px;
        height: 16px;
    } 
}
.cancel {
    font-size: 14px;
    color: #8492a6;
    margin-right: 10px;
    transition: color .25s;
    cursor: pointer;
}
.cancel:hover {
    color: #20a0ff;
}
.submit {
    background: linear-gradient(90deg,#20a0ff,#3dc3ff);
    box-shadow: 0 3px 5px rgba(32, 160, 255, 0.3);
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 14px;
    transition: box-shadow .5s;
    cursor: pointer;
    .icon {
        width: 16px;
        height: 16px;
        margin-right: 5px;
    }
}

.emoji-list-wrap {
    z-index: 10;
    position: absolute;
    top: calc(100% + 10px);
    left: -10px;
    background: #fff;
    border: 1px solid #e6eaf0;
    padding: 10px;
    border-radius: 5px;
    .emoji-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        overflow: hidden;
        overflow-y: auto;
        width: 390px;
        max-height: 200px;
        .emoji-item {
            overflow: hidden;
            width: 26px;
            height: 26px;
            img {
                display: block;
                margin: 2px auto;
            }
        }
    }
}
.emoji-list-wrap::before {
    content: '';
    position: absolute;
    left: 10px;
    top: -9px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #e6eaf0;
    width: 0;
}
@media screen and (max-width: 990px) {
    .tips {
        display: none;
    }
}
</style>