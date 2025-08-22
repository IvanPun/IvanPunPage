<template>
    <h1 class="title">寫程式，也寫故事</h1>
    <h2 class="subtitle">I'm Ivan Pun</h2>
    <p class="description">專注於前端開發與用戶體驗設計，打造現代化網頁應用</p>
    <div class="cta">
        <CTABtn type="primary" @click="explore">探索作品</CTABtn>
        <CTABtn type="secondary" @click="contact">聯絡我</CTABtn>
    </div>
</template>
<script setup>
import CTABtn from '@/components/CTABtn.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const explore = () => {
    router.push('/projects')
}

const contact = () => {
    router.push('/contact')
}
</script>
<style scoped>
.title {
    font-size: 8rem;
    font-weight: bold;
    margin: 0;
    line-height: 1.2;
}

.subtitle {
    font-size: 6rem;
    margin: 0.5rem 0;
    color: #00bfff;
}

.description {
    font-size: 3rem;
    margin: 1.5rem 0;
    color: #ccc;
}

@media (max-width: 768px) {
    .cta {
        margin-top: 5rem;
        width: 40vw;
        display: flex;
        justify-content: space-between;
    }
}

@media (min-width: 769px) {
    .title {
        font-size: 4rem;
    }

    .subtitle {
        font-size: 2rem;
    }

    .description {
        font-size: 1rem;
    }

    .cta {
        margin-top: 0;
    }
}
</style>