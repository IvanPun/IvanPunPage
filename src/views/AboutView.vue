<template>
  <el-row v-if="!isMobile">
    <el-col :span="12" class="left-part">
      <AboutMe></AboutMe>
    </el-col>
    <el-col :span="12" class="right-part">
      <SkillsBoard :skillList="skillList"></SkillsBoard>
    </el-col>
  </el-row>
  <div class="mobile" v-else>
    <AboutMe></AboutMe>
    <div style="width: 80vw;margin-top: 5vh;">
      <SkillsBoard :skillList="skillList"></SkillsBoard>
    </div>
  </div>
</template>
<script setup>
import AboutMe from '@/components/AboutMe.vue';
import SkillsBoard from '@/components/SkillsBoard.vue';
import { useDevice } from '@/composables/useDevice';
import skillsData from '@/assets/data/skills.json';

const skillList = skillsData.skills;

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

.mobile{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10vh;
}


</style>