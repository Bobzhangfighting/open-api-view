<template>
    <div class="open-box">
        <MainHeaderComponent></MainHeaderComponent>
        <div class="application"  style="padding-top:60px;">
            <el-container style="height: 500px; border: 1px solid #eee">
                <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                    <el-menu :default-openeds="['1', '3']">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-star-off"></i>我的应用</template>
                        <el-menu-item-group>
                        <template slot="title">移动端</template>
                        <el-menu-item index="1-1" @click="appphone">移动应用</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="PC端">
                        <el-menu-item index="1-3" @click="webapp">网站应用</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    </el-menu>
                </el-aside>
        
                <div class="container-right">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">我的应用</el-breadcrumb-item>
                    </el-breadcrumb>
                    <div class="">
                        <div class="create">
                            <p class="text">您还未创建应用</p>
                        <el-button type="danger" round @click="createapp">创建应用</el-button>
                        </div>
                    </div>
                </div>
            </el-container>
        </div>
        <MainFooterComponent></MainFooterComponent>
    </div>
</template>
<script>
 import API from '../js/API'
 import MainHeaderComponent from './mainheaderComponent.vue'
 import MainFooterComponent from './mainfooterComponent.vue'
 import createApplicationThreeComponent from './createApplicationThreeComponent.vue'
export default {
    data() {
      return {
        state:0,
        step:''
      }
    },
    methods: {
     createapp(){
         console.log("创建应用");
         this.$router.push({
               path: '/createapplication/stepOne',//跳转应用页面
               query:{active:1}
        })
     },
     appphone(){
            console.log("移动应用");
            if(this.state==999){
                return ;
            }else{
            this.$router.push({
                path:'/createapplication/appType',
                query:{type:'app'}
            });
            }

     },
     webapp(){
         console.log("网站应用");
         if(this.state==999){
             
             return ;
         }else{
          this.$router.push({
                path:'/createapplication/appType',
                query:{type:'web'}
            });
         }
     }
    },
    created(){
       let _this = this;
       _this.state = _this.$route.query.state;
       console.log("wei--->"+_this.state);
    },
    components:{
        MainHeaderComponent,
        MainFooterComponent,
        createApplicationThreeComponent
    }
}
</script>
<style>
  body{
  margin: 0px;    
  }
  .open-box{
      min-height: 850px;
      padding-bottom: 90px;
      position: relative;
  } 
  .application{
    max-width: 1280px;
    margin: 0 auto;
    border: 1px solid #e8e8e8;
    border-top: none;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .el-breadcrumb{
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #e5e5e5;
  }
  .el-breadcrumb .el-breadcrumb__item .el-breadcrumb__inner{
      font-size: 14px;
  }
  .container-right{
      width: 1040px;
      padding: 0 20px 20px;
  }
  .create{
    padding-top: 124px;
    text-align: center;
  }
  .text{
     font-size: 18px;
    color: #7f7f7f; 
  }
  .container-right .create .el-button{
    padding: 7px 20px;
    margin-top: 26px;
  }
</style>
