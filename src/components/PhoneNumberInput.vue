<template>
    <div>
        <el-input 
        v-model="input" 
        @input="handleInput" 
        placeholder="请输入手机号">
        </el-input>
        
    </div>
</template>

<script>
export default {
    name: "PhoneNumberInput",
    data() {
        return {
            input: '',
        }
    },
    methods: {
        handleInput(value) {
            // 手机号正则校验
            const phoneRegex = /^1[3-9]\d{9}$/;
            if (!phoneRegex.test(value) && value.length > 10) {
                // 触发表单验证失败的回调
                
                // this.$message.error('请输入正确的手机号码');
                
                // 如果你的表单使用了validate方法，可能需要手动触发验证
                // this.$refs['yourFormName'].validateField(this.prop);
            }
        }
    }
}
</script>

<style></style>