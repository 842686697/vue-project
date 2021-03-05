<template>
    <div class="page">
        <div class="box">微信小程序</div>
        <div class="box">官网</div>
    </div>
</template>

<script>
    export default {
        name: "page3"
    }
</script>

<style scoped>
    .page{
        color: white;
        font-size: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .box{
        position: relative;
        left: 0;
        top: 0;
        height: 200px;
        width: 200px;
        padding: 10px;
        background-color: #818683;
        transition:0.3s;
        box-shadow: 8px 8px 5px #818683;
    }
    .box:hover{
        position:relative;
        left: 3px;
        top: 3px;
        box-shadow: 5px 5px 2px #818683;
    }
</style>