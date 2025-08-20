<template>
  <section class="contact-section">
    <h2>Contact (聯繫方式)</h2>
    <p>有任何問題或合作意向，歡迎聯繫我！</p>

    <!-- Email -->
    <a href="mailto:whitetiger123asd@gmail.com" class="contact-link">whitetiger123asd@gmail.com</a>

    <SocialBtns></SocialBtns>

    <Form></Form>

    <!-- Footer -->
    <footer class="footer">
      © 2025 IvanPun
    </footer>
  </section>
</template>

<script setup>
import SocialBtns from '@/components/SocialBtns.vue'
import Form from '@/components/Form.vue'


</script>

<style scoped>
.contact-section {
  width: 60%;
  margin: auto;
  text-align: center;
  padding: 4rem 1rem;
  background: #f5f5f5;
  color: #0D0D0D;
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
  display: inline-block;
  margin-bottom: 2rem;
  font-weight: bold;
  color: #00bfff;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-link:hover {
  text-shadow: 0 0 8px #00bfff, 0 0 16px #8b5cf6;
}

.footer {
  margin-top: 4rem;
  font-size: 0.9rem;
  color: #666;
}
</style>
