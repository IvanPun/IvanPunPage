<template>
  <div class="navbar">
    <el-menu
      mode="horizontal"
      :default-active="active"
      class="el-menu-demo"
      @select="handleSelect"
      :ellipsis="false"
    >
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
      <el-menu-item index="/projects">Projects</el-menu-item>
      <el-menu-item index="/contact">Contact</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const active = ref(route.path) // 預設高亮當前路由

const handleSelect = (path) => {
  active.value = path
  router.push(path)
}

// 監聽路由變化，更新高亮
onMounted(() => {
  router.afterEach((to) => {
    active.value = to.path
  })
})
</script>

<style scoped>
.navbar{
  height: 15vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.el-menu-demo {
  background: transparent;
  border-bottom: none;
}

.el-menu-demo .el-menu-item {
  color: #E0E0E0;
  font-weight: bold;
  position: relative;
  margin: 0 1rem;
  transition: all 0.3s ease;
  user-select: none;
}

/* hover + active neon effect */
.el-menu-demo .el-menu-item:hover,
.el-menu-demo .el-menu-item.is-active {
  color: #00BFFF;
  text-shadow: 0 0 8px #00BFFF, 0 0 16px #8B5CF6, 0 0 24px #8B5CF6;
}

.el-menu-demo .el-menu-item::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0%;
  height: 3px;
  background: linear-gradient(90deg, #00BFFF, #8B5CF6);
  transition: width 0.3s ease;
}

.el-menu-demo .el-menu-item:hover::after,
.el-menu-demo .el-menu-item.is-active::after {
  width: 100%;
}

.el-menu-demo .el-menu-item:active {
  box-shadow: 0 0 12px #00BFFF, 0 0 24px #8B5CF6, 0 0 32px #8B5CF6 inset;
  transform: scale(0.98);
}
</style>
