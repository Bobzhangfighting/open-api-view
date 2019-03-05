<!-- 登陆组件 -->
<template>
  <div class="login-component">
    <p class="p">数据应用接口授权中心</p>
    <div class="login-group">
      <div class="login-item">
        <!-- <input @mouseover="hoverIpt=1" @mouseout="hoverIpt=0" :class="hoverIpt===1?'hover-ipt':''" @focus="hoverIpt=1" class="item-ipt" v-model="info.number" type="text" placeholder="员工编号"/> -->
        <input class="item-ipt" @blur="hoverIpt=0"  :class="hoverIpt===1?'hover-ipt':''" @focus="hoverIpt=1"  v-model="info.username" type="text" placeholder="员工编号"/>
      </div>
      <div class="login-item">
        <input  class="item-ipt" @blur="hoverIpt=0"  :class="hoverIpt===3?'hover-ipt':''" @focus="hoverIpt=3" v-model="info.password" type="password" placeholder="密码">
      </div>
      <!-- <div class="login-item">
        <input @mouseover="hoverIpt=2" @mouseout="hoverIpt=0" :class="hoverIpt===2?'hover-ipt':''" @focus="hoverIpt=2" class="item-ipt item-verification" maxlength="4" @input="verficate" v-model="info.verification" type="text" placeholder="请输入验证码">
        <img class="verification" :src="verificationImg" />
        <img class="refresh cursor-pointer" :src="isRefresh" @mouseover="overRefresh" @mouseout="outRefresh" @click="refreshVerification">
      </div> -->
      <div class="login-item btn-item cursor-pointer no-focus" @click="clickLogin">
        {{loginText}}
      </div>
      <p class="error-text">{{loginPageLoginErrorMsg}}</p>
    </div>
  </div>
</template>

<script>
import CryptoJS from 'crypto-js'
import API from '../js/API'
import cookie from 'js-cookie'
export default {
  data () {
    return {
      hoverIpt: 0, // 文本框hover
      loginPageLoginErrorMsg: '', // 登陆提示
      loginText: '登录', // 按钮名
      info: { // 登录信息
        username: null,
        password: null
      },
      axiosItem:{
         url:"/user/login",
           params: {
         },
         reflesh: 0,
           keyPath: []
       }
    }
  },
  methods: {
    // 验证输入信息
    checkform () {
      if (this.info.username === null || this.info.username === '') {
        this.loginPageLoginErrorMsg = '请输入您的员工编号'
        return false
      }
      if (this.info.password === null || this.info.password === '') {
        this.loginPageLoginErrorMsg = '请输入您的密码'
        return false
      }
      this.loginPageLoginErrorMsg = ''
      return true
    },
    clickLogin () {
      let flag = this.checkform()
      if (!flag) {
        return
      }
      // let key = CryptoJS.enc.Utf8.parse(this.aesKey)
      // let iv = CryptoJS.enc.Utf8.parse(this.aesKey)
      // let srcs = CryptoJS.enc.Utf8.parse(this.info.password)
      // let encrypted = CryptoJS.AES.encrypt(srcs, key, {iv, mode: CryptoJS.mode.CBC})
      // let encPassword = encrypted.toString()
      // this.doLogin(this.info.number, encPassword, 'Y', this.info.verification)
      let _this = this
      console.log("参数问题"+JSON.stringify(this.info));
      let  items = {
        method: 'post',
        data: JSON.stringify(this.info),
        url:"/user/login"
      };
      API.teamAPI(items,function(response)
      {
  
          if(response.respCode=='112'){
          _this.$message({
            message: '账号密码不匹配',
            type: 'error'
          });
          return;
        }
        if(response.respCode=='113'){
          _this.$message({
            message: '当前服务不可用',
            type: 'Current Service is unavailable'
          });
          return;
          console.log("当前服务不可用");
        }
        if(response.respCode=='100'){
          console.log("建立联系中");
          _this.token=response.respData.token;
          console.log("token是："+_this.token);
          sessionStorage.setItem("token",_this.token);
          let expireDays = 24 * 60 * 60 ;
          cookie.set('openapi_token',_this.token,expireDays); //设置Cookies
          cookie.set("userId",response.respData.id)
          cookie.set("userName",response.respData.userName);
            // localStorage.setItem("userId",response.respData.id);
            // localStorage.setItem("userName",response.respData.userName);
          _this.$router.push({
                 path: '/'//跳转页面
          });
        };
      },function (error) {
        console.log(error);
      });

    },
    loginKeydown (key) {
      key.keyCode === 13 && this.clickLogin()
    }
  },
  created () {
    const _this = this
    // 监听enter
    window.addEventListener('keydown', _this.loginKeydown, false)
  },
  beforeDestroy () {
    const _this = this
    // 删除监听enter
    window.removeEventListener('keydown', _this.loginKeydown)
  }
}
</script>
<style lang="less">
// @import "~assets/style/variable";
// @import "~assets/style/mixin";
.login-component {
  width: 250px;
  .p {
    color: #ffffff;
    font-size: 18px;
    padding: 0 20px;
    line-height: 25px;
  }
}
.cursor-pointer{
  cursor: pointer;
}
.login-group {
  margin-top: 40px;
  .login-item {
    width: 250px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    .item-ipt {
      border-radius: 20px;
      height: 40px;
      width: 100%;
      font-size: 14px;
      padding: 0 20px;
      background: #fff;
      opacity: 0.8;
      color: #333;
      cursor: pointer;
      &:hover{
        opacity: 1;
      }
    }
    .item-ipt::-webkit-input-placeholder { /* WebKit browsers */
      color:#666;
    }
    .item-ipt:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color:#666;
    }
    .item-ipt::-moz-placeholder { /* Mozilla Firefox 19+ */
      color:#666;
    }
    .item-ipt:-ms-input-placeholder { /* Internet Explorer 10+ */
      color:#666;
    }
    .hover-ipt {
      opacity: 1 !important;
    }
    .item-verification {
      width: 84px;
    }
  }
  .verification {
    width: 70px;
    height: 28px;
  }
  .btn-item {
    height: 40px;
    width: 250px;
    text-align: center;
    line-height: 40px;
    border-radius: 20px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .no-focus {
    border: 1px solid #fff;
    color: #fff;
    &:hover{
      background: #1A93FF;
      border: 1px solid #1A93FF;
    }
  }
  .refresh {
    width: 32px;
    height: 32px;
  }
  .login-btn {
    margin-top: 30px;
  }
  .btn-item {
    text-align: center;
  }
}
.error-text {
  margin-top: 20px;
  color: #d93f30;
  font-size: 12px;
  width: 250px;
  text-align: center;
}
</style>
