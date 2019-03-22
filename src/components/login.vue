<template>
    <div class="login posA allBox">
        
        <div class="loginBox posA allBox">
            <h3>{{mingcheng}}</h3>
            <el-form :label-position="labelPosition" :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="70px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="uid">
                    <el-input type="text" v-model="loginForm.uid" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="pwd">
                    <el-input type="password" v-model="loginForm.pwd" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item style="text-align:center;">
                    <el-button type="primary" @click="submitForm('loginForm')" style="width:200px;" >提交</el-button>
                </el-form-item>
            </el-form>
            
        </div>

    </div>
</template>

<script>
export default {
    name:'login',
    data() {
        return {
            mingcheng:"vue基础使用说明",
            labelPosition:'top',
            loginForm: {
                uid: '',
                pwd: ''
            },
            rules: {
            uid: [
                { required: true, message:'请输入用户名', trigger: 'blur' }
            ],
            pwd: [
                { required: true, message:'请输入用户名', trigger: 'blur' }
            ]
            }
        }
    },
    mounted() {
    },
    methods:{
        submitForm(val){
            let that = this;
        }
    }
}
</script>

<style>
.el-form-item__label{ line-height: 30px;}
</style>
