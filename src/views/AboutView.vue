<template>
  <el-row>
    <el-col :span="12" class="left-part">
      <div>
        <h2 class="section-title"><el-icon>
            <UserFilled style="color: var(--primary-purple);" />
          </el-icon>About Me</h2>
        <p class="intro">
          我是一名前端開發者，擅長使用 Vue 打造流暢的使用者體驗。<br />
          就讀於華東師範大學軟件工程系，曾參與多個個人與團隊項目。<br />
          除了Coding，我也喜歡攝影和閱讀，讓我保持創造力與專注力。
        </p>
        <p class="highlight">✨ 我的特點：注重細節、樂於學習、擁抱新技術。</p>
      </div>

    </el-col>
    <el-col :span="12" class="right-part">
      <SkillsBoard :skillList="skillList"></SkillsBoard>
    </el-col>
  </el-row>
</template>
<script setup>
import { UserFilled } from '@element-plus/icons-vue';
import SkillsBoard from '@/components/SkillsBoard.vue';
const skillList = ["Vue3", "JavaScript / TypeScript", "HTML5", "CSS", "Git / GitHub", "UI 設計",
  "Java", "Python", "C / C++", "攝影"];
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

.section-title {
  font-size: 3vw;
  font-weight: bold;
  color: #00bfff;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.intro {
  font-size: 1.5vw;
  line-height: 1.8;
}

.highlight {
  margin-top: 1.2vh;
  font-size: 1.3vw;
  font-weight: bold;
  color: var(--primary-purple);
}
</style>