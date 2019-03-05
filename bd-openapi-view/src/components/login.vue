<template>
  <div id="index" class="login">
    <div id="p0" class="index-u" >
      <div class="index-u-item index-u0-item">
        <div class="logo-box">
           <img class="logo-img" src="../assets/logo@2x.png"/>
          精品洗涤缔造精致生活, 一心一意做洗涤
        </div>
      </div>
      <div class="index-mask" ></div>
      <LoginComponent class="login-component"></LoginComponent>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Vue from 'vue'
  import LoginComponent from './loginComponent.vue'
  // 导入组件
  export default {
    data () {
      return {
        login_loading: false,
        dialogVisible: false
      }
    },
    methods: {
    },
    components: {
      LoginComponent
    }
  }


</script>


<style scoped lang="less">
  .index-u {
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: url("../assets/4@2x.jpg");
    background-size: 100%;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .login-component {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 250px;
    height: 350px;
    z-index: 10000;
  }
  .index-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #213B60;
    opacity: 0.8;
  }
  .index-u-item {
    z-index: 3000;
    position: relative;
  }
  .index-u0-item {
    position: absolute;
    top: 20px;
    left: 40px;
    .logo-box {
      font-size: 14px;
      width: 400px;
      color: #FFFFFF;
      .logo-img {
        height: 40px;
        width: 108.6px;
        margin-right: 10px;
      }
    }
  }

</style>
