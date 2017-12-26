<template>
  <div class="nav">
    <ul>
      <li @click="selectNav('home')"><router-link to="/"><i class="iconfont icon-home icon"></i><span>微博</span></router-link></li>
      <li @click="selectNav('message')"><router-link to="/message"><i class="iconfont icon-xinfeng icon"></i><span>消息</span></router-link></li>
      <li @click="selectNav('')"><router-link to="/"><i class="iconfont icon-jia icon icon-add"></i></router-link></li>
      <li @click="selectNav('')"><router-link to="/discovery"><i class="iconfont icon-fangdajing1 icon"></i><span>发现</span></router-link></li>
      <li @click="selectNav('mine')"><router-link to="/mine"><i class="iconfont icon-wo icon"></i><span>我</span></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mynav',
  data () {
    return {
      
    }
  },
  methods: {
    selectNav :function( type ){
       this.$emit('nav-type',type);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.nav{
  width: 100%;
  height: 2rem;
  position: fixed;
  bottom: 0px;
  left: 0px;
  padding: .25rem 0rem;
  box-shadow: .05rem .05rem .25rem #ccc;
  background: #fff;
}
ul {
  list-style-type: none;

  li{
    width: 20%;
    text-align: center;
    float: left;

    i.icon{
      
      width: 1.5rem;
      height: 1.2rem;
      display: block;
      margin: 0 auto;
      font-size: 1.2rem;
      color: #323232;

      &.icon-add{
        color: #ff8200;
        font-size: 1.4rem;
        margin-top: .25rem;
      }
    }
    span{
      display: block;
      width: 100%;
      color: #323232;
      font-size: .5rem;
    }
  }
}

</style>
