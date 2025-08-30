<template>
  <section class="contact-section">
    <h2>Contact (聯繫方式)</h2>
    <p>有任何問題或合作意向，歡迎聯繫我！</p>

    <!-- Email -->
    <a href="mailto:whitetiger123asd@gmail.com" class="contact-link">whitetiger123asd@gmail.com</a>

    <SocialBtns></SocialBtns>

    <Form :loading = "loading" @update-loading="updateLoading"></Form>

    <!-- Footer -->
    <footer class="footer">
      © 2025 IvanPun
    </footer>
  </section>
  <div class="loading" v-show="loading" v-loading="loading" element-loading-text="郵件發送中..." :element-loading-spinner="svg"
    element-loading-svg-view-box="-10, -10, 50, 50"></div>
</template>

<script setup>
import SocialBtns from '@/components/SocialBtns.vue'
import Form from '@/components/ContactForm.vue'
import { ref, watch } from 'vue';

const loading = ref(false)

const updateLoading = (val) => {
  loading.value = val
}

const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
watch(loading, (val) => {
  if (val) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
})
</script>

<style>
body.no-scroll {
  overflow: hidden !important;
}
</style>

<style scoped>
.contact-section {
  width: 90%;
  margin: auto;
  text-align: center;
  padding: 4rem 4rem;
  background: #f5f5f5;
  color: #0D0D0D;
}

.contact-section h2 {
  font-size: 5rem;
  margin-bottom: 1rem;
}

.contact-section p {
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.contact-link {
  display: inline-block;
  margin-bottom: 2rem;
  font-weight: bold;
  color: #00bfff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 3rem;
}

.contact-link:hover {
  text-shadow: 0 0 1px #00bfff, 0 0 2px #8b5cf6;
  background-color: transparent;
}

.footer {
  margin-top: 4rem;
  font-size: 1.5rem;
  color: #666;
}

.loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (min-width:769px) {
  .contact-section {
    width: 60%;
    padding: 4rem 1rem;
  }

  .contact-section h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .contact-section p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }

  .contact-link {
    font-size: 1.5rem;
  }

  .footer {
    font-size: 0.9rem;
  }
}
</style>
