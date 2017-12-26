<template>
  <div class="container">
    <router-view/>
    <ul>
      <li><router-link to="/home"><i class="iconfont icon-home icon"></i><span>微博</span></router-link></li>
      <li><router-link to="/message"><i class="iconfont icon-xinfeng icon"></i><span>消息</span></router-link></li>
      <li><router-link to="/"><i class="iconfont icon-jia icon icon-add"></i></router-link></li>
      <li><router-link to="/discovery"><i class="iconfont icon-fangdajing1 icon"></i><span>发现</span></router-link></li>
      <li><router-link to="/mine"><i class="iconfont icon-wo icon"></i><span>我</span></router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'container',
  data () {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.container{
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  padding: 5px 0px;
  box-shadow: 1px 1px 5px #ccc;
}
ul {
  list-style-type: none;

  li{
    width: 20%;
    text-align: center;
    float: left;

    i.icon{
      
      width: 30px;
      height: 30px;
      display: block;
      margin: 0 auto;
      font-size: 28px;
      color: #323232;

      &.icon-add{
        color: #ff8200;
        font-size: 35px;
        margin-top: 5px;
      }
    }
    span{
      display: block;
      width: 100%;
      color: #323232;
      font-size: 14px;
    }
  }
}

</style>
