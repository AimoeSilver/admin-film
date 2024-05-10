<template>
    <div class="whole">
        <div class="main">
            <div class="img">
                <img :src="logo" alt="firm logo">
            </div>

            <div>
                <el-form class="form" ref="form" :model="form" :rules="rules">
                    <el-form-item id="tel" prop="tel" label="">
                        <el-input placeholder="请输入手机号" v-model="form.tel"></el-input>
                    </el-form-item>
                    <el-form-item id="password" prop="password" label="">
                        <el-input type="password" placeholder="请输入密码" v-model="form.password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button ref="login-buttom" id="login" type="primary" :loading=isloading
                            @click="onSubmit">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>

            <div class="other">
                <div class="register">
                    忘记密码？注册
                </div>
                <div class="captcha">
                    验证码登录
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PhoneNumberInput from '@/components/PhoneNumberInput.vue';
export default {
    name: 'Login',
    data() {
        return {
            logo: require('@/assets/logo_b.png'),
            isloading: false,
            form: {
                tel: '',
                password: '',
            },
            rules: {
                tel: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { min: 11, max: 11, message: '手机号不正确', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输密码', trigger: 'blur' },
                    { min: 8, message: '密码至少要 8 位噢', trigger: 'blur' },
                    { max: 24, message: '友友你的密码太多啦', trigger: 'blur' },
                ]

            }
        }
    },
    components: {
        PhoneNumberInput,
    },
    methods: {
        // login 提交逻辑部分
        onSubmit() {
            this.$refs.form.validate(valid => {
                if (valid) {

                    // console.log('表单验证通过，提交数据:', this.form);
                    this.isloading = true
                    // Dialog 提示
                    setTimeout(() => {
                        this.isloading = false
                        // current path 判断
                        const path = this.$router.history.current.path
                        if (path === '/login') {
                            this.$message({
                                showClose: true,
                                message: '看起来服务器好像被坏蛋偷走了',
                                type: 'warning'
                            });
                        }

                    }, 3000)
                    // 提交表单逻辑...
                    if (1) {
                        this.$router.push('/user/console')
                        // 登录成功后，清除表单数据
                        this.form.tel = ''
                        this.form.password = ''
                        this.$refs.form.resetFields()
                        setTimeout(() => {
                            this.$message({
                                showClose: true,
                                message: '欢迎回来',
                                type: 'success'
                            });
                        }, 600)
                    }
                } else {
                    console.log('表单验证失败');
                    return false;
                }
            });
        },
    },
    mounted() {



    }

}
</script>

<style lang="scss" scope>
.whole {
    background-color: #37103E;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: right;


    .main {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 604px;
        height: 634px;
        margin-right: 13%;
        background-color: #fff;
        border-radius: 9px;

        .img {
            margin-top: 83px;
            margin-bottom: 58px;
            overflow: hidden;

            img {
                width: 120px;
                height: 120px;
            }
        }

        .form {
            width: 500px;

            .el-form-item__error {
                color: #9555a1;
                font-size: 15px;
            }

            .el-input__inner:focus {
                border-color: #9555a1;
            }

            .el-form-item.is-error .el-input__inner {
                border-color: #7b3c87;
            }

            #tel,
            #password {
                margin-bottom: 38px;
                font-size: 16px;
                height: 50px;
            }

            #login {
                width: 100%;
                font-size: 18px;
                border-color: #063F5C;
                background-color: #063F5C;
            }
        }

        .other {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 500px;

            .register,
            .captcha {
                font-size: 18px;
            }

        }

    }
}
</style>