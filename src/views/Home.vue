<template>
  <div class="home">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Page1></Page1>
      </div>
      <div class="section">
      <Page2></Page2>
    </div>
      <div class="section">
        <Page3></Page3>
      </div>
    </full-page>
    <ul id="menu">
      <div class="menu_box">
        <div>简历</div>
        <li data-menuanchor="thirdPage"><a href="#thirdPage">个人作品</a></li>
        <li data-menuanchor="secondPage"><a href="#secondPage">专业技能</a></li>
        <li data-menuanchor="firstPage" class="active"><a href="#firstPage">个人简介</a></li>
      </div>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import Page4 from './pages/page4'

export default {
  name: 'Home',
  components: {
    Page1,
    Page2,
    Page3,
    Page4
  },
  data: () => ({
    options: {
      menu: '#menu',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      sectionsColor: ['#348f66', '#306eb4', 'rgba(100,50,50,0.7)'],
      navigation:true
    },
  }),
}
</script>
<style scoped>
  #menu{
    position:fixed;
    left: 0;
    top: 0;
    height: 50px;
    width: 100%;
    background: #5f6569;
  }
  .menu_box{
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin: 0 auto;
  }
  .menu_box>div{
    position: absolute;
    left: 10%;
    color: white;
  }
  #menu li{
    display: inline-block;
    width: 120px;
    height: 100%;

  }
  li>a{
    color: white;
    text-decoration: none;
    display: flex;
    height: 100%;
    width: 150px;
    justify-content: center;
    align-items: center;
  }
  .active>a{
    color: #91989f;
  }
</style>