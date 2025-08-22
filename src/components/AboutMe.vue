<template>
    <div class="main">
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
</template>

<script setup>
import { UserFilled } from '@element-plus/icons-vue';
</script>

<style scoped>
.main{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.section-title {
  font-size: 9rem;
  font-weight: bold;
  color: #00bfff;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.intro {
  font-size: 3rem;
  line-height: 1.8;
}

.highlight {
  margin-top: 1.2vh;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--primary-purple);
}

@media (min-width:769px) {
    .main{
        display: block;
    }
    
    .section-title{
        font-size: 3rem;
    }

    .intro{
        font-size: 1.5rem;
    }

    .highlight{
        font-size: 1.3rem;
    }
}
</style>