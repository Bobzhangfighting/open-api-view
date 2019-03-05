<template>
    <div class="open-box">
        <MainHeaderComponent></MainHeaderComponent>
        <div class="application" style="padding-top:60px;">
        <el-container style="height: auto; border: 1px solid #eee">
            <div class="contanier-main">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/createapplication/stepThree' }">我的应用</el-breadcrumb-item>
                    <el-breadcrumb-item>{{info}}</el-breadcrumb-item>
                </el-breadcrumb>
                <div class="content" >
                   <router-view  @resetBread="getinfo"></router-view>
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
export default {
    data() {
      return {
        activeIndex:0,
        info:''||'创建应用',
      };
    },
    methods: {
        getRequest(){
             let _this = this;
            let  items = {
                method: 'post',
                data: {"token":token},
                url:"/user/userInfo"
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
                    _this.userinfo = response.respData;
                    return _this.userinfo
                };
            },function (error) {
                    console.log(error);
            });
        },
        getinfo(message){
            console.log(message);
             this.info=message;
        }
    },
    created(){
        //获取当前应用状态
        let _this = this;
        _this.activeIndex = this.$route.query.active;
        console.log("当前state为："+_this.activeIndex);

    },
    components:{
        MainHeaderComponent,
        MainFooterComponent,
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
  .el-breadcrumb{
      height: 60px;
      line-height: 60px;
      border-bottom: 1px solid #e5e5e5;
  }
  .contanier-main{
    width: 100%;
    padding: 0 20px 20px;
    background: #fff;
    box-sizing: border-box;
  }
  .app-steps{
    margin-top: 16px;
    padding: 30px 0 26px;
    background: #f9f9f9;
  }
  li,ul{
      list-style: none;
  }
 .types{
    margin-top: 25px;
 }
.types .type-list{
    position: relative;
    display: inline-block;
    width: 386px;
    height: 246px;
    padding: 30px;
    margin-right: 20px;
    margin-bottom: 30px;
    box-sizing: border-box;
    border: 1px solid #eee;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.08);
    line-height: 1;
    text-align: center;
    overflow: hidden;
    cursor: pointer;
}
.type-list img{
    width: 70px;
    height: 70px;
}
img{
    border: 0;
}
.type-name{
    margin-top: 14px;
    font-size: 18px;
    color: #000;
}
.type-desc{
    margin-top: 22px;
    line-height: 18px;
    font-size: 14px;
    color: #666;  
}
.demo-ruleForm{
    margin-top: 30px;
}

</style>
