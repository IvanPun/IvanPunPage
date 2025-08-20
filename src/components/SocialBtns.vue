<template>
    <!-- 社交平台按鈕 -->
    <div class="social-buttons">
        <a href="https://www.instagram.com/ivan_pun_6326/" target="_blank">Instagram</a>
        <a href="https://github.com/IvanPun" target="_blank">GitHub</a>
        <a href="#" @click.prevent="copyWechat">微信</a>
    </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
const copyWechat = () => {
    navigator.clipboard.writeText('IvanPun6326')
    ElMessage.success('微信號已複製！')
}
</script>

<style scoped>
.social-buttons {
    margin-bottom: 2rem;
}

.social-buttons a {
    display: inline-block;
    margin: 0 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: #1e3a8a;
    color: #fff;
    font-weight: bold;
    transition: all 0.3s ease;
}

.social-buttons a:hover {
    box-shadow: 0 0 12px #00bfff, 0 0 24px #8b5cf6;
    transform: scale(1.05);
}
</style>