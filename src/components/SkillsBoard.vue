<template>
  <Loading :loading="loading"></Loading>
  <div class="skills-board" v-if="!loading">
    <h3 class="skills-title">⚡技能</h3>
    <div class="skills-grid">
      <SkillCard v-for="skill in skillList" :label="skill.name"></SkillCard>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SkillCard from './SkillCard.vue';
import { getSkills } from '@/composables/useSkills';
import Loading from './Loading.vue';

const loading = ref(true)

const skillList = ref([])

onMounted(async () => {
  loading.value = true
  const skills = await getSkills();
  skillList.value = skills || [];
  loading.value = false
});

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