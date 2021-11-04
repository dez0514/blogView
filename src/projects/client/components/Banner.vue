<template>
    <div class="banner-wrap">
        <div class="ban-cover">
            <div class="cover" :style="{backgroundImage: `url(${require('../assets/me.jpeg')})`}"></div>
        </div>
        <div class="banner-content">
            <div class="ban-left">
                <h1 class="title">{{title || $route.meta.title || ''}}</h1>
                <div class="small-tit" v-if="smalltit">{{smalltit}}</div>
                <div class="tags" v-if="tags.length > 0">
                    <div class="tag-name" v-for="(item,index) in tags" :key="index">{{item}}</div>
                </div>
                <!-- <div class="detail-btn">
                    <i class="el-icon-right"></i>
                    <div>阅读全文</div>
                </div> -->
            </div>
            <div class="ban-right">
                <img :src="require('../assets/me.jpeg')" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        // 详情页 有title,tags,cover,右小图, 外层无背景图,无smalltit
        // 非首页路由 有title,背景图，无右小图，无cover,无tags,可能有smalltit
        // 首页 是个swiper //再写一个
        pic: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        smalltit: {
            type: String,
            default: ''
        },
        tags: {
            type: Array,
            default: () => []
        }
    },
    data(){
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
.banner-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    min-height: 320px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 15px 20px rgba(31, 45, 61, 0.2);
}
.banner-content {
    flex: 1;
    box-sizing: border-box;
    height: 100%;
    padding: 0 50px;
    display: flex;
    align-items: center;
}
.ban-left {
    flex: 1;
    display: flex;
    margin-right: 20px;
    height: 100%;
    flex-direction: column;
    justify-content: center;
}
.ban-right {
    width: 280px;
    height: 250px;
    box-shadow: 0 8px 15px #000;
    border-radius: 13px;
    flex-shrink: 0;
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}
.title {
    font-size: 28px;
    color: #fff;
}
.small-tit {
    text-shadow: 0 2px 3px rgba(31, 45, 61, 0.5);
    color: #fff;
    margin-top: 15px;
    opacity: .6;
    position: relative;
    font-size: 80%;
}
.small-tit::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 1px;
    background-color: #fff;
    left: 0;
    top: -10px;
}
.tags {
    display: flex;
    text-shadow: 0 2px 3px rgba(31, 45, 61, 0.5);
    opacity: .6;
    font-size: 16px;
    margin: 4px 0;
    flex-wrap: wrap;
    .tag-name {
        margin: 0 8px;
        padding: 3px 0;
        color: #fff;
    }
}
.detail-btn {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    width: 102px;
    text-decoration: none;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 7px;
    -webkit-transition: .25s;
    transition: .25s;
    margin-top: 5px;
    i {
        margin-right: 5px;
    }
}
.detail-btn:hover {
    background-color: #fff;
    color: #20a0ff;
}
.ban-cover {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 15px 20px rgba(31, 45, 61, 0.2);
    border-radius: 10px;
    -webkit-filter: brightness(50%);
    filter: brightness(50%);
    transform: scale(1.1);
    z-index: -1;
}
.cover {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    background-size: cover;
    background-position: 50%;
    filter: blur(15px);
}
@media screen and (max-width: 990px) {
    .banner-wrap {
        min-height: 220px;
        border-radius: 0;
    }
    .banner-content {
        padding: 30px 20px;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    }
    .ban-right {
        width: 152px;
        height: 152px;
        margin-bottom: 20px;
    }
    .ban-left {
        height: auto;
        width: 100%;
        flex: inherit;
        align-items: center;
        margin-right: 0;
    }
    .ban-cover {
        border-radius: 0;
        box-shadow: none;
    }
    .title {
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
    }
    .tags {
        box-sizing: border-box;
        margin: 0 0;
        font-size: 16px;
        align-items: center;
        justify-content: center;
        .tag-name {
            padding: 0 0;
        }
    }
}
</style>