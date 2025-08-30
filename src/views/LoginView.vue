<template>
    <section class="contact-section">
        <h2>Login</h2>
        <p>Welcome Back, Ivan</p>
        <LoginForm></LoginForm>
    </section>
</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue';



</script>

<style scoped>
.contact-section {
  width: 90%;
  margin: auto;
  text-align: center;
  padding: 4rem 4rem;
  background: #f5f5f5;
  color: #0D0D0D;
}

@media (min-width:769px) {
  .contact-section {
    width: 60%;
    padding: 4rem 1rem;
  }
}
</style>