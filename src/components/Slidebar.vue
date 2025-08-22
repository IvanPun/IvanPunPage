<template>
  <div class="slideBar">
    <div @click="drawer = true" class="drawer-btn"><el-icon :size="25">
        <Fold />
      </el-icon>
    </div>
  </div>
  <el-drawer v-model="drawer" :with-header="false" size="25rem" class="myDrawer" style="padding: none;">
    <el-menu class="drawer-menu" @select="handleSelect" :default-active="active">
      <el-menu-item index="/">Home</el-menu-item>
      <el-menu-item index="/about">About</el-menu-item>
      <el-menu-item index="/projects">Projects</el-menu-item>
      <el-menu-item index="/contact">Contact</el-menu-item>
    </el-menu>
  </el-drawer>
</template>
<script setup>
import { Fold } from '@element-plus/icons-vue';
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const active = ref(route.path) // 預設高亮當前路由
const drawer = ref(false)
const handleSelect = (path) => {
  active.value = path
  router.push(path)
  drawer.value = false;
}

// 監聽路由變化，更新高亮
onMounted(() => {
  router.afterEach((to) => {
    active.value = to.path
  })
})
</script>

<style>
.el-drawer__body {
  padding: 0;
  background: linear-gradient(#1E3A8A, #0D0D0D 70%);
}
</style>

<style scoped>
.slideBar {
  height: 10vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.drawer-btn {
  cursor: pointer;
  margin-right: 5rem;
}

/* Drawer 菜單樣式 */
.drawer-menu {
  border: none;
  background: transparent;
}

.drawer-menu .el-menu-item {
  color: var(--text-main);
  font-weight: bold;
  margin: 0.5rem 0;
}

.drawer-menu .el-menu-item.is-active {
  color: #00BFFF;
  text-shadow: 0 0 8px #00BFFF, 0 0 16px #8B5CF6;
  background: linear-gradient(145deg, rgba(23, 59, 136, 0.652), #8B5CF655);
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3), inset 1px 1px 3px rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  border-radius: 6px;
}
</style>