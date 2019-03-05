<template>
    <div class="application-detail">
        <div class="detail-title">
            <img class="icon-logo" src="../assets/title-icon.jpeg">
            <div class="title">
                <span class="text">{{appinfo.app_name}}</span>
                <p class="type">{{appinfo.app_type}}</p>
            </div>
        </div>
        <div class="detail-content">
            <div class="detail-list">
                <p class="plabel label">client_id：</p>
                <div class="info">{{appinfo.app_id}}</div>
            </div>
            <div class="detail-list">
                <p class="plabel label">client_secret：</p>
                <div class="info">{{appinfo.client_secret_encode}}</div>
            </div>
            <div class="detail-list">
                <p class="plabel label">应用简介</p>
                <div class="info">{{appinfo.app_desc}}</div>
            </div>
            <div class="detail-list">
                <p class="plabel label">应用创建时间</p>
                <div class="info">{{appinfo.create_time}}</div>
            </div>
        </div>
    </div>
                
</template>
<script>
import API from '../js/API'
export default {
    data() {
      return {
          appinfo:{
              app_id:'',
              app_type:'',
              app_desc:'',
              app_name:'',
              client_secret_encode:'',
              create_time:''
          }
      };
    },
    methods: {
        loadData(appId){
            console.log("hahahahah");
            let _this = this;
           let  items = {
                method: 'post',
                data: {"appId":appId},
                url:"/user/queryAppById"
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
                    _this.appinfo = response.respData[0];
                    return _this.appinfo
                };
            },function (error) {
                    console.log(error);
            });
        }
    },created(){
        let _this = this;
       console.log( _this.$route.query.appId);
        _this.loadData( _this.$route.query.appId);
    },
    components:{
       
    }
}
</script>
<style>
.application-detail{
    margin-top:30px;
    margin-left: 150px;
    margin-right: 150px;
}
.detail-title {
    position: relative;
    display: flex;
    padding-bottom: 30px;
    border-bottom: 1px solid #ededed;
}
.detail-title .icon-logo {
    display: block;
    width: 60px;
    height: 60px;
    margin-right: 22px;
    border-radius: 6px;
    overflow: hidden;
}
.detail-title .text {
    font-size: 16px;
    font-weight: 700;
}
.detail-title .type {
    margin-top: 18px;
    color: #666;
}
.detail-content {
    padding-top: 30px;
}
.plabel{
    margin-bottom: 0px;
    margin-top: 0px;
}
.detail-content .detail-list {
    display: flex;
    margin-bottom: 16px;
}
.detail-content .detail-list .label {
    width: 105px;
    padding-right: 20px;
    line-height: 30px;
    text-align: right;
    font-size: 13px;
    color: #666;
}
.detail-content .detail-list .info {
    position: relative;
    flex-grow: 1;
    line-height: 30px;
    font-size: 13px;
}
</style>
