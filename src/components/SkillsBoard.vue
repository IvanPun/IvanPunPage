<template>
  <div class="skills-board">
    <h3 class="skills-title">⚡技能</h3>
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
.skills-board {
  width: 100%;
  text-align: center;
}

.skills-title {
  font-size: 9rem;
  margin-bottom: 3rem;
  color: #00bfff;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30vw, 1fr));
  gap: 5rem;
}

@media (min-width:769px) {
  .skills-title {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(15vw, 1fr));
    gap: 1rem;
  }
}
</style>