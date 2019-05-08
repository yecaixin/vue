<template>
    <div id="infoModify">
      <p class="title"><i class="fa fa-edit"></i>修改信息</p>
        <el-form class="form"  :model="infoForm" :rules="infoRules" ref="infoForm" label-width="80px">
                <el-form-item label="姓名">
                    <el-input v-model="infoForm.username"  size="mini"  placeholder="请输入姓名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('infoForm')">提交</el-button>
                    <el-button @click="resetForm('infoForm')">重置</el-button>
                </el-form-item>
             </el-form>
    </div>
</template>

<script>
export default {
    data: function() {
    return {
               infoForm:{
                   username:'',
                   nickname:'',
               },
              
               infoRules: {
                    nickname: [
                        { required: true, message: '请输入昵称', trigger: 'blur' },
                        { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
                    ],
               },

    };
  },
  created(){
        // this.showUsername();
    },
    mounted() {
        // this.getInfoByUsername();
  },
 methods: {
           submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(formName == 'pwdForm'){
                            this.showMessage('success','修改密码成功~');
                        }else if(formName == 'infoForm'){ // 判断手机服务是否为空
                            this.phoneForm.phone = this.infoForm.telphone;
                            for(let key in this.phoneForm){
                                if(this.phoneForm[key] == ''){
                                    this.showMessage('warning','请您选择手机服务~');
                                    return;
                                }
                            }
                        }else if(formName == 'phoneForm'){// 判断修改信息是否为空
                            this.infoForm.telphone = this.phoneForm.phone;
                            for(let key in this.infoForm){
                                if(this.infoForm[key] == ''){
                                    this.showMessage('warning','请您修改相关信息~');
                                    return;
                                }
                            }
                        }
                        //保存修改的相关信息
						let userinfo = this.infoForm;
                        let phoneinfo = this.phoneForm;
						let userData = Object.assign(userinfo, phoneinfo);
                        console.log(userData);
                        axios({
                            type:'get',
                            path:'/api/user/infoModify',
                            data:userData,
                            fn:data=>{
								console.log(data);
								if(data.status == 1){
									this.showMessage('success','修改密码成功~');
                                    this.$router.push('/infoList');

								}else{
									 this.$message.error('修改失败请重试')
								}

							},
							errFn:(res)=>{
                                this.showMessage('error',res.message);
                            }
						})

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }, 
        }
  
};
</script>

<style lang="less" scoped>
.info_container{
        padding: 10px;
        margin: 0 10px;
        overflow: auto;
    }
     .title{
        text-align:center;
        width:100%;
        height:30px;
        line-height:30px;
        cursor: pointer;
        background-color: #3bc5ff;
        border:1px solid #3bc5ff;
        color: white;
        display: block;
        .fa{
          margin-right:5px;
       }
    }
   .info_row{
        .area{
           border:1px solid #dfdfdf;
           height:100%;
           font-size:14px;
           padding:10px;
           .form{
               width:90%;
               margin-top:20px;
           }
        }
   }
</style>