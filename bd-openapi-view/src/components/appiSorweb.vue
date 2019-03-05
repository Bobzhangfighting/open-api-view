<template>
        <div>
        <div class="app-steps">
            <el-steps finish-status="success" :active= "3" align-center>
                <el-step  title="选择应用类型"></el-step>
                <el-step title="填写应用信息"></el-step>
                <el-step title="审核"></el-step>
            </el-steps>
        </div>
        <div class="card">
            <div class="application-card create"  @click="createApp">
                <i class="icon-add" style="display:block;margin:0 auto;"></i>
                <p style="display:block;">创建应用</p>
            </div>
            <div id="items" v-for="(item,index) in items">
                <div class="application-card">
                    <div class="card-title">
                        <img src="../assets/title-icon.jpeg" class="icon-logo"/>
                        <div class="title">
                            <span class="text">{{item.appName}}</span>
                             <span class="message published" v-if="item.checkState=='1'">应用信息已审核</span>
                            <span class="message published" v-if="item.checkState!='1'">应用信息待审核</span>
                            <p class="type">{{item.appDesc}}</p>
                        </div>
                    </div>
                    <div class="card-content">
                        <el-button class="link" :disabled="false" v-if="item.checkState=='1'">
                            <span @click="queryDetail(item.appId)">查看详情</span>
                        </el-button>
                        <el-button class="link" :disabled="true" v-if="item.checkState!='1'">
                            <span>查看详情</span>
                        </el-button>
                    </div>
                </div>
            </div>
    </div>
    </div>
</template>
<script>
 import API from '../js/API'
 import cookie from 'js-cookie'
export default {
    data(){
        return {
            app_type:'',
             buttonDisabled:false,
             title:'',
             items:[{
                appName:'',
                appDesc:'',
                checkState:'',
                appId:''
             }]
        }
    },methods:{
        queryDetail(appId){
            this.$router.push({
            path: '/createapplication/appDetail',//跳转详细信息页面
            query:{appId:appId}
            })
            this.$emit('resetBread','应用信息');
        },
        createApp(){
            this.$router.push({
                path:'/createapplication/stepOne',
                query:{code:1}
            })    
        },
        loadData(app_type){
            console.log("456789");
            let _self = this;
            let  params = {
                method: 'post',
                data: {"app_type":app_type},
                url:"/user/queryAppByAppType"
            };
            API.teamAPI(params,function(response)
            {
                if(response.respCode=='113'){
                    _this.$message({
                    message: '服务不可用',
                    type: 'error'
                });
                return;
                }
                if((response.respCode=='100')&&response.respData.length>0){
                    console.log("获取数据成功");
                    _self.items = response.respData;
                    
                };
            },function (error) {
                    console.log(error);
            });
        }
    }
    ,created(){
            let _this = this
            _this.app_type = _this.$route.query.type
            _this.loadData(_this.app_type);
    }
}
</script>
<style scoped>
.card{
    display:flex;
    justify-content:space-between;
   flex-wrap: wrap;

    margin-top: 30px;
}
.application-card{
    width: 600px;
    margin-bottom: 30px;
    padding: 28px 28px 26px;
    background: #fff;
    border: 1px solid #eee;
    border-radius: 10px;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    display:flex;
    flex-wrap: wrap;
    flex-shrink: 0;
    height: 216px;
    flex-direction: column;
}
.application-card.create {
    padding-top: 66px;
    cursor: pointer;
    justify-content: center;
    align-content: center;
    flex-direction: column;
}
.create{
     text-align: center;
}

.application-card.create .icon-add {
    display: inline-block;
    width: 30px;
    height: 30px;
    background: url("../assets/add.png") no-repeat 50%;
}
.application-card.create p {
    margin-top: 18px;
    font-size: 18px;
    color: #999;
}
.application-card .card-title {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-bottom: 30px;
    border-bottom: 1px dashed #ededed;
}
.application-card .card-title .icon-logo {
    display: block;
    width: 60px;
    height: 60px;
    margin-right: 22px;
    border-radius: 6px;
    overflow: hidden;
}
.application-card .card-title .title {
    padding-top: 3px;
}
.application-card .card-title .text {
    display: inline-block;
    max-width: 215px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: middle;
    font-size: 16px;
    font-weight: bold;
}
.application-card .card-title .message.published {
    border-color: #28b003;
    color: #28b003;
}
.application-card .card-title .message {
    display: inline-block;
    margin-left: 10px;
    padding: 0 5px;
    line-height: 18px;
    border: 1px solid #333;
    vertical-align: middle;
}
.application-card .card-title .type {
    margin-top: 15px;
    color: #666;
}
.application-card .card-content {
    text-align: center;
}
.application-card .card-content .link {
    width: 130px;
    margin-top: 26px;
    padding: 10px 20px;
    background: linear-gradient(360deg, #f2f2f2, #fff);
    border-color: #ababab;
    color: #333;
}
</style>
