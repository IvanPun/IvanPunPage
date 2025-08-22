<template>
    <!-- 社交平台按鈕 -->
    <div class="social-buttons">
        <a href="https://www.instagram.com/ivan_pun_6326/" target="_blank"><img src="@/assets/icons/instagram.png"
                alt="github icon" class="social-icon"/>Instagram</a>
        <a href="https://github.com/IvanPun" target="_blank"><img src="@/assets/icons/github-mark-white.png"
                alt="github icon" class="social-icon" />GitHub</a>
        <a href="#" @click.prevent="copyWechat"><img src="@/assets/icons/wechat.png"
                alt="github icon" class="social-icon" />微信</a>
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
    display: flex;
    justify-content: center;
}

.social-buttons a {
    display: flex;
    margin: 0 1.5rem;
    padding: 1rem 1.5rem;
    border-radius: 2rem;
    background: #1e3a8a;
    color: #fff;
    font-weight: bold;
    transition: all 0.3s ease;
    align-items: baseline;
    font-size: 2rem;
}

.social-buttons a:hover {
    box-shadow: 0 0 12px #00bfff, 0 0 24px #8b5cf6;
    transform: scale(1.05);
}

.social-icon {
    height: 0.8em;
    width: 0.8em;
    font-size: inherit;
    margin-right: 1rem;
}

@media (min-width:769px) {
    .social-buttons a {
        margin: 0 0.5rem;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        font-size: 1rem;
    }
}
</style>