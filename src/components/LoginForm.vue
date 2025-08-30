<template>
    <!-- 簡單留言表單 -->
    <el-form ref="contactForm" :model="form" class="contact-form" @submit.prevent="loginSubmit">
        <el-form-item>
            <el-input v-model="form.userId" placeholder="帳戶" ></el-input>
        </el-form-item>
        <el-form-item>
            <el-input v-model="form.password" placeholder="密碼" type="password" show-password ></el-input>
        </el-form-item>
        <div class="btn-area">
            <el-button type="primary" @click="loginSubmit">Login</el-button>
        </div>
    </el-form>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import router from '@/router'
import { login, checkLogin } from '@/composables/useUser';

const props = defineProps({
    loading: Boolean
})

const emit = defineEmits(['update-loading'])

const form = reactive({
    userId: '',
    password: '',
})

const loginSubmit = async () => {
    if (!form.userId || !form.password ) {
        ElMessage.warning('請完整填寫表單！')
        return
    }

    let res = await login(form.userId, form.password);
    if(res.success){
        //console.log(res.data);
        router.push("/admin")
    }else{
        console.error("登入失敗", res.error);
    }
    
}

onMounted(() => {
    if(checkLogin) router.push("/admin")
})


</script>

<style scoped>
.contact-form {
    max-width: 500px;
    margin: 2rem auto 2rem;
    text-align: left;
}

.btn-area {
    display: flex;
    justify-content: center;
}

.el-form-item{
    margin-bottom: 2rem;
}

@media (min-width:769px) {
    .btn-area {
        display: block;
    }
}
</style>