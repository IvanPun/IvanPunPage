// composables/useDialog.js
import { ref, computed, onMounted, onUnmounted } from 'vue'

export function useDialog() {
  const screenWidth = ref(window.innerWidth)

  const updateWidth = () => {
    screenWidth.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  const dialogWidth = computed(() => {
    if (screenWidth.value < 768) return '90%'   // 小螢幕
    if (screenWidth.value < 1200) return '70%'  // 中螢幕
    return '800px'                              // 大螢幕固定寬度
  })

  return {
    dialogWidth
  }
}
