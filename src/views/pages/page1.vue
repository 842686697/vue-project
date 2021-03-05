<template>
    <div class="page">
        <v-avatar
            size="80"
        >
            <img
                    src="../../assets/icon.jpg"
            >
        </v-avatar>
        <h1>彭曦</h1>
        <div class="info_box">
            <div class="info">
                <div>性别 | 男</div>
                <div>学校 | 重庆科技学院</div>
                <div>专业 | 计算机科学与技术</div>
                <div>手机 | 13330221130</div>
                <div>邮箱 | 842686697@qq.com</div>
            </div>
            <div class="info">
                <div>我是一个做事认真，吃苦耐劳的人</div>
                <div>拥有快速学习的能力</div>
                <div>在工作上也能用心对待</div>
                <div>希望能给予我一个宝贵的机会</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "page1"
    }
</script>

<style scoped>
    *{
        margin: 0 auto;
        color: white;
    }
    h1{
        margin-top: 10px;
    }
    .page{
        display: flex;
        flex-direction: column;

    }
    .info{
        margin:30px 0 0 80px;
    }
    .info>div{
        margin-top: 5px;
    }
    .info_box{
        display: flex;

    }
</style>