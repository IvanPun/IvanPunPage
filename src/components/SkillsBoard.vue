<template>
    <div class="skills-board">
        <h3 class="skills-title">技能 </h3>
        <div class="skills-grid">
            <SkillCard v-for="skill in skillList" :label="skill"></SkillCard>
        </div>
      </div>
</template>

<script setup>
import SkillCard from './SkillCard.vue';

const progs = defineProps({
    skillList: Array
})
</script>

<style scoped>
.skills-board{
  width: 80%;
  text-align: center;
}

.skills-title {
  font-size: 3vw;
  margin-bottom: 1rem;
  color: #00bfff;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
}


</style>