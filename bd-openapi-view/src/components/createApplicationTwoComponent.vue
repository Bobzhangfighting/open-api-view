<template>
  <div>
    <div class="app-steps">
      <el-steps finish-status="success" :active= "2" align-center>
          <el-step  title="选择应用类型"></el-step>
          <el-step title="填写应用信息"></el-step>
          <el-step title="审核"></el-step>
      </el-steps>
    </div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="应用类型" prop="app_type">
            <el-input v-model="ruleForm.app_type" disabled></el-input>
        </el-form-item>
          <el-form-item label="应用名称" prop="app_name">
            <el-input v-model="ruleForm.app_name"></el-input>
        </el-form-item>
        <el-form-item label="应用说明" prop="app_desc">
            <el-input type="textarea" v-model="ruleForm.app_desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<script>
import API from '../js/API'
import cookie from 'js-cookie'
export default {
    data() {
      return {
        type:0,
        ruleForm: {
          app_type: '',
          app_name: '',
          app_desc: '' 
        },
        rules: {
          app_name: [
            { required: true, message: '请填写应用名称', trigger: 'change' }
          ],
          app_desc: [
            { required: true, message: '请填写应用说明', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
           submitForm(formName) {
             let self = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log("立即创建中。。。。。。");
            console.log(self.$refs[formName].model.app_name);
            self.createAtNow(self.$refs[formName].model);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      //插入创建的应用信息
      createAtNow(params){
            let _self = this;
            let appinfo ={
              appName:params.app_name,
              appDesc:params.app_desc,
              appType:params.app_type,
              userId:cookie.get("userId"),
              createUser:cookie.get("userName")
            }
            let  items = {
                method: 'post',
                data:JSON.stringify(appinfo),
                url:"/saveApp"
            };
            API.teamAPI(items,function(response)
            {
                if(response.respCode=='113'){
                    _self.$message({
                    message: '服务不可用',
                    type: 'error'
                  });
                return;
                }
                if(response.respCode=='100'){
                    console.log("插入数据成功");
                    _self.appinfo = response.respData;
                     _self.$router.push({
                         path:'/createapplication/stepThree',
                         query:{state:_self.appinfo.checkState}
                       });
              };
            },function (error) {
                    console.log(error);
            });
      }
    },
    created(){
      console.log("come on");
      let _this = this;
      console.log(_this.$route.query.type);
     _this.type = _this.$route.query.type
     if(_this.type=='1'){
      _this.ruleForm.app_type="app"
     }else if(_this.type=='2'){
      _this.ruleForm.app_type="pc"
     }else{
      _this.ruleForm.app_type="others"
     }
    },
    components:{
        
    }
}
</script>
<style scoped>

</style>
