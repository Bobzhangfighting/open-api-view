<template>
    <div class="header" style="font-size: 12px">
      <div class="content">
        <i class="iconhead"></i>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#213B60"
          text-color="#fff" active-text-color="#fff" @select="handleSelect">
          <el-menu-item index="1" style="border-bottom:none">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">文档中心</template>
            <el-menu-item index="2-1">开发者文档</el-menu-item>
            <el-menu-item index="2-2">API文档</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">控制台</template>
            <el-menu-item index="3-1" @click="myApplication">我的应用</el-menu-item>
          </el-submenu>
            <!--登录-->
            <el-menu-item index="4" v-if="loginOrNot == false">
                <template slot="title">
                <i class="avatar"></i>
                <span>登录</span>
                </template>
            </el-menu-item>
            <!--登录-->
            <!--登录成功-->
            <el-submenu index="4" v-if="loginOrNot">
            <template slot="title">
              <i class="avatar"></i>
              <span>{{name}}</span>
            </template>
              <el-menu-item index="4-1" @click="personInfo">个人信息</el-menu-item>
              <el-menu-item index="4-2" @click="loginOut">退出登录</el-menu-item>
            </el-submenu>
            <!--登录成功-->
        </el-menu>
      </div>
      <div class="login-modal"></div>
    </div>
</template>
<script>
import cookie from 'js-cookie'
 import API from '../js/API'
export default {
   data() {
      return {
          activeIndex:'1',
          loginOrNot:false,
          name:''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
       if (key=="4") {
           console.log("跳转登录页面");
           this.$router.replace('/login')
       } else if(key=="1"){
            console.log("首页");
            this.$router.replace('/')
       }else if(key=="2-1"){
            console.log(key);
            console.log("开发者文档");
       }else if(key=="2-2"){
            console.log(key)
            console.log("API文档");
       }else if(key=="3-1"){
            console.log(key)
            console.log("我的应用");
       }
      },
      loginOut(){//退出登录
          console.log("退出登录");
          sessionStorage.removeItem("token");
           cookie.set("openapi_token","");
           cookie.set("userId","");
           cookie.set("userName","");
            this.loginOrNot = false;
          this.$router.push({
          path: '/'//跳转主页面
        })
      },
      personInfo(){
          console.log("去到个人页面");
          this.$router.push({
          path: '/userInfo'//跳转个人信息页面
        })
      },
      myApplication(){//我的应用
        console.log("去到我的应用中");
         //查询数据库用来判断用户是否创建了应用
          let _this = this;
            let userId = cookie.get("userId");
            console.log("userId--->"+userId);
            let  items = {
                method: 'post',
                data: {"userId":userId},
                url:'/user/queryApplicationByUserId'
            };
            API.teamAPI(items,function(response)
            {
                if(response.respCode=='113'){
                    _this.$message({
                    message: '服务不可用',
                    type: 'error'
                });
                return;
                }
                if(response.respCode=='100'){
                    console.log("获取数据成功");
                    _this.datalist = response.respData;
                    console.info(" _this.datalist--->"+ _this.datalist.length);
                    if(_this.datalist.length>0){//应用已经创建
                        console.log("已经创建应用了");
                         _this.$router.push({
                            path: '/createapplication/stepThree',//跳转应用信息页面
                            query:{state:0}
                        })
                    }               
                };
                if(response.respCode=='107'){
                  _this.$router.push({
                        path: '/application',//跳转创建应用信息页面
                        query:{state:999}    
                    });
                }
            },function (error) {
                    console.log(error);
            });
      }
    },
    created()
    {
        this.name = cookie.get("userName");
         if((this.name||"")!="")
          {
              this.loginOrNot = true
              return this.name;
          }
    }
}
</script>
<style>
.header{
     position: fixed;
     width: 100%;
     background: #213B60;
     z-index: 12;
 }
 .header .content{
     position: relative;
     max-width: 1280px;
     height: 20px;
     margin: 0 auto;
     padding: 20px 0;
     line-height: 20px;
     color: #fff;
 }

 .header .content .iconhead{
 position: absolute;
 top: 10px;
 left: 0;
 width: 80px;
 height: 40px;
 background: url("../assets/logo@2x.png") no-repeat center;
 background-size: 100%;
 overflow: hidden;

 }
 .header .content .iconhead a{
     display: inline-block;
     width: 100%;
     height: 100%;
 }

 a{
     color:#000;
     text-decoration: none;
 }
 a:hover{
     cursor: pointer;
 }
 .el-menu-item:hover{
     background: rgba(108, 145, 198, 0.44) !important;
 }
 .el-submenu__title:hover{
 background: rgba(108, 145, 198, 0.44) !important;
 }
 .el-menu--horizontal .el-menu-item:first-child{
     border-top:none;
 }
 .header .content .el-menu{
     position: absolute;
     top: 0;
     right: 20px;
 }
.el-menu--horizontal>.el-menu-item.is-active{
    border-bottom: 0px;
}
 .el-menu{
     list-style: none;
     margin: 0px;
     padding-left: 0;
 }
 .el-menu--horizontal{
     border-bottom:none !important;
 }
 .header .content > .el-menu > .el-menu-item, .header .content > .el-menu .el-submenu{
     position: relative;
     min-width: 120px;
     text-align: center;
     font-size: 14px;
     color: #fff;
 }

 .el-menu--horizontal .el-menu-item{
     float: left;
     height: 60px;
     line-height: 60px;
     margin: 0;
     cursor: pointer;
     box-sizing: border-box;
 }

 .el-menu--horizontal .el-submenu{
     float: left
 }
 .el-menu--horizontal .el-submenu .el-submenu__title{
     height: 60px;
     line-height: 60px;
     border-bottom: 2px solid transparent;
     border-bottom-color: transparent;
     color: #fff;
     background-color: rgb(255, 84, 84);
 }
 .el-menu--horizontal .el-submenu .el-submenu__title:hover{
     color: #fff;
 }
 .el-icon-arrow-down:before{
     content:none;
 }
 .el-menu-item, .el-submenu__title{
     padding: 0 20px;
     white-space: nowrap;
     cursor: pointer;
     position: relative;
 }
 .el-submenu__title{
     font-size: 14px;
     box-sizing: border-box;
 }
 .header .content > .el-menu > .el-menu-item .el-icon-arrow-down, .header .content > .el-menu .el-submenu .el-icon-arrow-down{
     width: 0;
     height: 0;
     margin-top: 0;
     border-left: 7px solid transparent;
     border-right: 7px solid transparent;
     border-top: 7px solid #fff;
 }
 .el-menu--horizontal .el-submenu .el-submenu__icon-arrow{
     position: static;
     vertical-align: middle;
     margin-left: 8px;
 }
 .el-submenu__icon-arrow{
     position: absolute;
     top: 48%;
     right: 15px;
     font-size: 12px;
 }
 .avatar{
     display: inline-block;
     width: 30px;
     height: 30px;
     margin-right: 3px;
     background: url("../assets/person.png") no-repeat center;
 }
</style>
