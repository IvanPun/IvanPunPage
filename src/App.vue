<template>
  <el-container>
    <el-header height="15vh">
      <Navbar />
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>


</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style scoped>
.el-header{
  --el-header-padding: 0;
}
</style>
