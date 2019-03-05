<template>
  <div class="open-box">
        <MainHeaderComponent></MainHeaderComponent>
        <div class="s-developer pt-60">
            <div class="title">开发者信息</div>
            <div class="mainwarp">
                <div class="container">
                    <div class="detail company">
                        <div class="container-info info-type">
                             <p class="title">详细信息</p>
                            <div class="lists">
                                    <div class="list">
                                        <div class="label">姓名</div>
                                        <div class="content">
                                            <div class="info">{{userinfo.userName}}</div>
                                        </div>
                                    </div>
                                    <div class="list">
                                        <div class="label">工号</div>
                                        <div class="content">
                                            <div class="info">{{userinfo.id}}</div>
                                        </div>
                                    </div>
                                    <div class="list">
                                        <div class="label">电话</div>
                                        <div class="content">
                                            <div class="info">{{userinfo.moblie}}</div>
                                        </div>
                                    </div>
                                    <div class="list">
                                        <div class="label">邮箱</div>
                                        <div class="content">
                                            <div class="info">{{userinfo.email}}</div>
                                        </div>
                                    </div>
                            </div>  
                        </div> 
                    </div> 
                </div>
            </div>
        </div>
        <MainFooterComponent></MainFooterComponent>
  </div>
</template>
<style>
  body{
  margin: 0px;    
  }
  .open-box{
      min-height: 850px;
      padding-bottom: 90px;
      position: relative;
  }  
  .pt-60 {
    padding-top: 60px;
}

.s-developer {
    max-width: 1240px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
    background: #fff;
}
 .s-developer >.title {
    padding-top: 16px;
    line-height: 34px;
    border-bottom: 1px solid #e5e5e5;
    font-size: 18px;
}
.s-developer .detail {
    padding-bottom: 80px;
}
.s-developer .detail .container-info.info-type {
    border-bottom: 1px dashed #dbdbdb;
}
.s-developer .detail .container-info {
    font-size: 12px;
    padding: 25px 0;
}
.s-developer .detail .container-info .title {
    margin: 0 0 25px;
    padding-left: 6px;
    height: 16px;
    line-height: 16px;
    border-left: 2px solid #ff5454;
    font-size: 16px;
}
.s-developer .detail .container-info .list {
    display: flex;
    margin-bottom: 30px;
    line-height: 28px;
}
.s-developer .detail .container-info .list .label {
    width: 180px;
    padding-right: 20px;
    text-align: right;
    flex-shrink: 0;
}
.s-developer .detail .container-info .list .content {
    display: flex;
}
.s-developer .detail .container-info .list .content .info {
    position: relative;
}
</style>

<script>
 import API from '../js/API'
 import MainHeaderComponent from './mainheaderComponent.vue'
 import MainFooterComponent from './mainfooterComponent.vue'

  export default {
   data() {
      return {
       userinfo:{
        userName:'',
        id:'',
        moblie:'',
        email:''
       }
      };
    },
    methods: {
      
    },created(){//加载个人信息数据
        let token = sessionStorage.getItem("token");
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
    components:{
        MainHeaderComponent,
        MainFooterComponent
    }
  };
</script>
