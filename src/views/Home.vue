<template>
  <div class="home">
    <ul id="menu">
      <li data-menuanchor="firstPage" class="active"><a href="#firstPage">First section</a></li>
      <li data-menuanchor="secondPage"><a href="#secondPage">Second section</a></li>
      <li data-menuanchor="thirdPage"><a href="#thirdPage">Third section</a></li>
      <li data-menuanchor="fourthPage"><a href="#fourthPage">Fourth section</a></li>
    </ul>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        First section ...
      </div>
      <div class="section">
        Second section ...
      </div>
    </full-page>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
  }
}
</script>
<style scoped>
  #menu{
    position: absolute;
    right: 100px;
    top:200px;
  }
</style>