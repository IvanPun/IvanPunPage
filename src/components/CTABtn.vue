<template>
    <button @click="$emit('click')" :class="btnType"><slot></slot></button>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: 'primary' }
})
const btnType = props.type
</script>

<style scoped>
button {
  cursor: pointer;
  border: none;
  padding: 0.8rem 1.5rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  font-weight: bold;
  transition: all 0.3s ease;
}

.primary {
  background: linear-gradient(90deg, #00bfff, #8b5cf6);
  color: #fff;
  box-shadow: 0 0 8px #00bfff, 0 0 16px #8b5cf6;
}

.primary:hover {
  transform: scale(1.05);
  box-shadow: 0 0 12px #00bfff, 0 0 24px #8b5cf6;
}

.secondary {
  background: transparent;
  color: #00bfff;
}

.secondary:hover {
  background: #1E3A8A;
  color: #fff;
}
</style>