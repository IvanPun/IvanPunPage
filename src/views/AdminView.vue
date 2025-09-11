<template>
    <div class="main">
        <h1>WELCOME BACK IVAN</h1>
        <div class="btn-group">
            <button class="tech-btn" @click="editSkills">Edit Skills</button>
            <button class="tech-btn" @click="editProjects">Edit Projects</button>
        </div>
        

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const editSkills = () => {
  router.push('/editSkills')
}

const editProjects = () => {
  router.push('/editProjects')
}

</script>

<style scoped>
.main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10vh;
}

@font-face {
    font-family: 'catFont';
    src: url('@/assets/fonts/catFont.otf') format('opentype');
}

h1{
    font-size: 8rem;
    font-weight: bold;
    margin: 0;
    line-height: 1.2;

    font-family: 'catFont';
}

.btn-group{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    margin-top: 5vh;
}

.btn-group button {
  position: relative;
  padding: 12px 32px;
  font-size: 16px;
  color: #A855F7;
  background: transparent;
  border: 2px solid #A855F7;
  border-radius: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 229, 255, 0.6);
}

.btn-group button::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0,229,255,0.2) 0%, transparent 60%);
  transform: rotate(25deg);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.btn-group button:hover {
  color: #0D0D0D;
  background: #A855F7;
  box-shadow: 0 0 20px #A855F7, 0 0 40px #A855F7;
}

.btn-group button:hover::before {
  opacity: 1;
  animation: glow-move 2s linear infinite;
}

@keyframes glow-move {
  from {
    transform: translateX(-50%) translateY(-50%) rotate(25deg);
  }
  to {
    transform: translateX(-30%) translateY(-30%) rotate(25deg);
  }
}

@media (min-width: 769px) {
    h1 {
        font-size: 4rem;
    }

    .btn-group{
        flex-direction: row;
    }
}
</style>