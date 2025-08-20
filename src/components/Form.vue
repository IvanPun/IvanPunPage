<template>
    <!-- 簡單留言表單 -->
    <el-form ref="contactForm" :model="form" class="contact-form" @submit.prevent="submitForm">
        <el-form-item prop="name">
            <el-input v-model="form.name" placeholder="你的名字"></el-input>
        </el-form-item>
        <el-form-item prop="email">
            <el-input v-model="form.email" placeholder="你的Email"></el-input>
        </el-form-item>
        <el-form-item prop="message">
            <el-input type="textarea" v-model="form.message" placeholder="你的留言" :rows="4"></el-input>
        </el-form-item>
        <el-button type="primary" @click="submitForm">發送留言</el-button>
    </el-form>
</template>

<script setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
const form = reactive({
    name: '',
    email: '',
    message: ''
})

const submitForm = () => {
    if (!form.name || !form.email || !form.message) {
        ElMessage.warning('請完整填寫表單！')
        return
    }

    // 這裡可接後端 API 或發送 Email
    console.log('表單提交', form)
    ElMessage.success('留言已發送！')

    // 清空表單
    form.name = ''
    form.email = ''
    form.message = ''
}
</script>

<style scoped>
.contact-form {
  max-width: 500px;
  margin: 0 auto 2rem;
  text-align: left;
}
</style>