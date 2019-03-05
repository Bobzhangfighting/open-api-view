<template>
    <div>
        <div class="app-steps">
            <el-steps finish-status="success" :active= "1" align-center>
                <el-step  title="选择应用类型"></el-step>
                <el-step title="填写应用信息"></el-step>
                <el-step title="审核"></el-step>
            </el-steps>
        </div>
        <ul class="types" style="padding-left: 0px;">
            <li class="type-list" @click="choose(1)">
                <img src="../assets/application.png" class="type-icon">
                <p class="type-name">移动端数据</p>
                <p class="type-desc">进行商品、订单、物流、售后和营销等电商管理</p>
            </li>
            <li class="type-list" @click="choose(2)">
                <img src="../assets/application.png" class="type-icon">
                <p class="type-name">PC端数据</p>
                <p class="type-desc">进行商品、订单、物流、售后和营销等电商管理</p>
            </li>
            <li class="type-list" @click="choose(3)">
                <img src="../assets/application.png" class="type-icon">
                <p class="type-name">主流平台数据</p>
                <p class="type-desc">进行商品、订单、物流、售后和营销等电商管理</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
     props:{
        type:''
    },
    data(){
        return{

        }
    },
    methods:{
        choose(type){
            console.log("选择平台");
            console.log("type---->"+type);
            this.$router.push({
                path:'/createapplication/stepTwo',
                query:{type:type}
            })
            }
        }
    }
</script>
<style>
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
</style>
