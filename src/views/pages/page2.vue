<template>
    <div class="page">
        <div class="text_box">
            <div class="title">专业技能</div>
            <v-divider></v-divider>
            <div class="text">前端基础：(均熟悉) html、css、javascript，(了解) es6</div>
            <div class="text">前端框架：(熟悉) Vue及Vue-cli、vue-router </div>
            <div class="text">组件库：(熟悉) vuetify 库,(了解) bootstrap 库 </div>
            <div class="text">后端：(了解) express </div>
            <div class="text">版本管理：(熟悉) git </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page2"
    }
</script>

<style scoped>
    .page{
        color: #ffffff;
    }
    .text_box{
        background-color: #818683;
        padding: 10px;
        width:600px ;
        margin:0 auto;
    }
    .title{
        margin-bottom: 10px;
        font-size: 23px;
    }
    .text{
        margin-top: 10px;
        font-size: 16px;
    }
</style>