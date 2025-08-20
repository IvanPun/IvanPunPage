<template>
  <div class="section-title">
    <h2 class="title">
      <span class="title-flex">
        <el-icon class="icon">
          <Platform />
        </el-icon>
        Projects
      </span>
    </h2>
    <p class="subtitle">這裡是我部分代表性的作品</p>
  </div>
  <Projects></Projects>
</template>

<script setup>
import { Platform } from '@element-plus/icons-vue';
import Projects from '@/components/Projects.vue';
</script>

<style scoped>
.section-title{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 2.5vw;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.title-flex {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  font-size: 2.2vw;
  color: var(--primary-blue);
}

.subtitle {
  color: #888;
  margin-bottom: 2vw;
}
</style>
