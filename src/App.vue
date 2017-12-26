<template>
  <div id="app">
    <my-top :fatherComponent = 'msg'></my-top>
    <my-nav @nav-type='changeTop'></my-nav>
    <router-view/>
  </div>
</template>

<script>
import top from '@/components/top'
import nav from '@/components/nav'
export default {
  name: 'app',
  data () {
    return {
      msg: 'home'
    }
  },
  components:{
    'my-nav': nav,
    'my-top': top
  },
  methods:{
    changeTop: function(pval){
      this.msg = pval
    }
  }
}
</script>

<style>
html,body{
  background: #eeeeee;
}
*{
  margin: 0;
  padding: 0;

}
ul{
  list-style: none;
}
.pull-left{
  float: left;
}
.pull-right{
  float: right;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

}
a{
  text-decoration: none;
}
</style>
