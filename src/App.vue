<template>
  <el-container>
    <el-header height="15vh">
      <Navbar v-if="!isMobile"/>
      <Slidebar v-else></Slidebar>
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>


</template>

<script setup>
import Navbar from './components/Navbar.vue'
import { useDevice } from "@/composables/useDevice";
import Slidebar from './components/Slidebar.vue';
const { isMobile } = useDevice();
</script>

<style scoped>
.el-header{
  --el-header-padding: 0;
}
</style>
