<template>
    <div class="page">
        <div class="box">
            <div>基于vue开发的小说阅读网站</div>
            <v-divider class="divider"></v-divider>
            <div>
                <div class="content_item">项目时间 : 2021-4-20 - 至今</div>
                <div class="content_item">技术负责 :
                    <div class="content_item_in">1.负责前端页面的开发</div>
                    <div class="content_item_in">2.负责后台服务端接口开发</div>
                    <div class="content_item_in">3.负责数据库的设计</div>
                </div>
                <div class="content_item">项目描述 :
                    <div class="content_item_in">1.服务端在遇到多个异步请求时，使用async解决了异步问题</div>
                    <div class="content_item_in">2.该项目通过mongodbApi实现了书籍的搜索</div>
                </div>
            </div>
            <v-divider class="divider"></v-divider>
            <div class="button_box">
                <v-btn href="http://1.15.39.17" target="_blank" width="100px" depressed>
                    在线预览
                </v-btn>
                <v-btn href="https://github.com/842686697/novel" style="margin-left:10px" target="_blank" width="100px" depressed>
                    git仓库地址
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page3"
    }
</script>

<style scoped>
    .page{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        color: white;
        font-size: 20px;
    }
    .box{
        display: grid;
        grid-template-columns: 300px;
        position: relative;
        left: 0;
        top: 0;
        padding: 10px;
        background-color: #818683;
        transition:0.3s;
        box-shadow: 8px 8px 3px #818683;
    }
    .box:hover{
        position:relative;
        left: 3px;
        top: 3px;
        box-shadow: 5px 5px 2px #818683;
    }
    .content_item{
        font-size: 16px;
    }
    .content_item_in{
        margin-left: 80px;
    }
    .divider{
        margin:10px 0;
    }
    .button_box{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
</style>