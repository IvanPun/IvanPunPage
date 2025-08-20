<template>
  <el-row>
    <el-col :span="16" class="left-part">
      <h1 class="title">寫程式，也寫故事</h1>
      <h2 class="subtitle">I'm Ivan Pun</h2>
      <p class="description">專注於前端開發與用戶體驗設計，打造現代化網頁應用</p>
      <div class="cta">
        <CTABtn type="primary" @click="explore">探索作品</CTABtn>
        <CTABtn type="secondary" @click="contact">聯絡我</CTABtn>
      </div>
    </el-col>
    <el-col :span="8" class="right-part">
      <div class="avatar-wrapper">
        <img src="@/assets/image/icon.jpg" alt="My Avatar" class="avatar" />
      </div>
    </el-col>
  </el-row>
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
.left-part {
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  font-size: 4vw;
  font-weight: bold;
  margin: 0;
  line-height: 1.2;
}

.subtitle {
  font-size: 2vw;
  margin: 0.5rem 0;
  color: #00bfff;
}

.description {
  font-size: 1vw;
  margin: 1.5rem 0;
  color: #ccc;
}

.right-part {
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.avatar-wrapper {
  position: relative;
}

.avatar {
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  border: 4px solid #1E3A8A;
  object-fit: cover;
  transition: all 0.3s ease;
}

.avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(0,191,255,0.3), 0 0 60px rgba(139,92,246,0.2);
}
</style>
