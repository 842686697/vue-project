<template>
  <div class="app">
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        First section ...
      </div>
      <div class="section">
        Second section ...
      </div>
    </full-page>
    <ul id="menu">
      <li data-menuanchor="fourthPage"><a href="#fourthPage">Fourth section</a></li>
      <li data-menuanchor="thirdPage"><a href="#thirdPage">Third section</a></li>
      <li data-menuanchor="secondPage"><a href="#secondPage">Second section</a></li>
      <li data-menuanchor="firstPage" class="active"><a href="#firstPage">First section</a></li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    options: {
      menu: '#menu',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      sectionsColor: ['#41b883', '#00C5FF', '#0798ec'],
      navigation:true
    },
  }),
};
</script>
<style scoped>
#menu{
  position:fixed;
  left: 0;
  top: 0;

}
li>a{
  color: #636363;
  text-decoration: none;
}
.active>a{
  color: black;
}
#menu{
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
}
#menu>li{
  display: inline-block;
  width: 150px;
  height: 50px;
}
</style>