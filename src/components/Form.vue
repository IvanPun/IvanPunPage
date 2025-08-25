<template>
    <!-- 簡單留言表單 -->
    <el-form ref="contactForm" :model="form" class="contact-form" @submit.prevent="sendEmail">
        <el-form-item prop="name">
            <el-input v-model="form.name" placeholder="你的名字"></el-input>
        </el-form-item>
        <el-form-item prop="email">
            <el-input v-model="form.email" placeholder="你的Email"></el-input>
        </el-form-item>
        <el-form-item prop="message">
            <el-input type="textarea" v-model="form.message" placeholder="你的留言" :rows="4"></el-input>
        </el-form-item>
        <div class="btn-area">
            <el-button type="primary" @click="sendEmail">發送留言</el-button>
        </div>
    </el-form>
</template>

<script setup>
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import emailjs from 'emailjs-com'

const props = defineProps({
    loading: Boolean
})

const emit = defineEmits(['update-loading'])

const form = reactive({
    name: '',
    email: '',
    message: ''
})

const SERVICE_ID = 'service_x65w5bw'
const TEMPLATE_ID = 'template_c7loinn'
const PUBLIC_KEY = 'rB0arMFNNuaYOSTHl'

const sendEmail = async () => {
    if (!form.name || !form.email || !form.message) {
        ElMessage.warning('請完整填寫表單！')
        return
    }

    emit('update-loading', true)

    try {
        const result = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                name: form.name,
                email: form.email,
                message: form.message
            },
            PUBLIC_KEY
        )
        ElMessage.success('留言已發送！')
        console.log(result)
        form.name = ''
        form.email = ''
        form.message = ''
        emit('update-loading', false)
    } catch (err) {
        ElMessage.warning('留言發送失敗')
        console.log(err)
        emit('update-loading', false)
    }
}


</script>

<style scoped>
.contact-form {
    max-width: 500px;
    margin: 0 auto 2rem;
    text-align: left;
}

.btn-area {
    display: flex;
    justify-content: center;
}

@media (min-width:769px) {
    .btn-area {
        display: block;
    }
}
</style>