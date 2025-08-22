<template>
  <div class="section-title">
    <h2 class="title">
      <el-icon class="icon">
        <Platform />
      </el-icon>
      Projects
    </h2>
    <p class="subtitle">這裡是我部分代表性的作品</p>
  </div>
  <Projects :style="isMobile ? { marginTop: '5vh' } : {}"></Projects>
</template>

<script setup>
import { Platform } from '@element-plus/icons-vue';
import Projects from '@/components/Projects.vue';
import { useDevice } from '@/composables/useDevice';
const { isMobile } = useDevice();
</script>

<style scoped>
.section-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 9rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
}

.icon {
  color: var(--primary-blue);
}

.subtitle {
  color: #888;
  margin-bottom: 2rem;
}

@media (min-width:769px) {
  .title {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }
}
</style>
