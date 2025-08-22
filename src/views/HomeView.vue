<template>
  <el-row v-if="!isMobile">
    <el-col :span="16" class="left-part">
      <Welcome></Welcome>
    </el-col>
    <el-col :span="8" class="right-part">
      <Avatar></Avatar>
    </el-col>
  </el-row>
  <div v-else class="mobile-main">
    <Avatar></Avatar>
    <div class="welcome">
      <Welcome></Welcome>
    </div>
    
  </div>
</template>

<script setup>
import Avatar from '@/components/Avatar.vue'
import Welcome from '@/components/Welcome.vue';
import { useDevice } from '@/composables/useDevice';
const { isMobile } = useDevice();

</script>

<style scoped>
.left-part {
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.right-part {
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mobile-main{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
}

.welcome{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
}
</style>
