<template>
    <div class="skill-card">⚡ {{ label }}</div>
</template>

<script setup>
const progs = defineProps({
    label: String
})
</script>

<style scoped>
.skill-card {
    background: rgba(30, 58, 138, 0.2);
    border: 1px solid rgba(0, 191, 255, 0.4);
    border-radius: 0.8rem;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 12px #00bfff, 0 0 20px #8b5cf6;
}
</style>