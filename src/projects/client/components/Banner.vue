<template>
    <div class="banner-wrap">
        <div>baaner</div>
    </div>
</template>
<script>
export default {
    props: {
        bg: {
            type: String,
            default: ''
        },
        pic: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        desc: {
            type: String,
            default: ''
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
    height: 320px;
    width: 100%;
    // background-color: pink;
    background: url('../assets/me.jpeg') no-repeat;
    background-position: 0 0;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 0 15px 20px rgba(31, 45, 61, 0.2);
}
@media screen and (max-width: 990px) {
    .banner-wrap {
        height: 220px;
        border-radius: 0;
    }
}
</style>