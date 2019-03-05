<template>
  <div class="open-box">
    <MainHeaderComponent></MainHeaderComponent>
    <div class="main">
      <div class="banner"></div>
      <div class="announcement"></div>
      <div class="flow">
        <div class="process">
          <div class="line-left"></div>
          <span>接入流程</span>
          <div class="line-right"></div>
        </div>
        <ul class="home-list">
          <li>
            <img src="../assets/stepOne.png" height="91" width="91">
            <span>申请身为开发者</span>
            <img src="../assets/step-arrow.png" height="16" width="32" class="arrow">
          </li>
          <li>
            <img src="../assets/stepTwo.png" height="91" width="91">
            <span>创建应用</span>
            <img src="../assets/step-arrow.png" height="16" width="32" class="arrow">
          </li>
          <li>
            <img src="../assets/stepThree.png" height="91" width="91">
            <span>提交审核</span>
            <img src="../assets/step-arrow.png" height="16" width="32" class="arrow">
          </li>
          <li>
            <img src="../assets/stepFour.png" height="91" width="91">
            <span>获取接口</span>
          </li>
        </ul>
        <div class="home-help"></div>
        <div style="height:60px"></div>
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
 .main{
     padding-top: 60px;

 }
 
 .banner{
     overflow: hidden;
     height:550px;
     background-image: url("../assets/301.png");
     background-size: 100% 100%;
     background-repeat: no-repeat;
     background-position: 50%;
 }
 .flow{
     padding-top: 76px;
     background: #fff;
     text-align: center;
 }
 .flow .process{
     font-size: 24px;
     font-weight: 700;
 }
 .flow .process .line-left, .flow .process .line-right{
     width: 52px;
     height: 1px;
     background: #bababa;
     display: inline-block;
     position: relative;
     top: -7px;
 }
 .flow .process span{
     margin: 0 10px;
 }
 .flow .home-list{
     overflow: hidden;
     width: 785px;
     margin:0 auto;
     margin-top: 70px;
 }
 .flow .home-list li{
     width: 123px;
     float: left;
     text-align: center;
     position: relative;
     margin-left:95px;
 }
 .flow .home-list li span{
     margin-top: 15px;
     display: block;
     font-size: 16px;
 }
 .flow .home-list li:first-child {
    margin-left: 0;
}

 .flow .home-list li .arrow{
     position: absolute;
     left:157px;
     top:38px;
 }
 li{
     list-style: none;
 }
 .home-help{
     cursor: pointer;
     width: 174px;
     height: 45px;
     margin: 0 auto;
     margin-top: 70px;
     background: url("../assets/gaid.png")
 }

</style>

<script>
 import MainHeaderComponent from './mainheaderComponent.vue'
 import MainFooterComponent from './mainfooterComponent.vue'
  export default {
   data() {
      return {
        //   activeIndex:'1',
        // activeIndex2: '1'
      };
    },
    methods: {
    //   handleSelect(key, keyPath) {
    //     console.log(key, keyPath);
    //   }
    }
    ,
    components:{
        MainHeaderComponent,
        MainFooterComponent
    }
  };
</script>
