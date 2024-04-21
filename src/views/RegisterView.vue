<script setup lang="ts">
  import RegisterForm from '@/components/RegisterForm.vue'
</script>

<template>
  <main class="main-container">
    <RegisterForm />
  </main>
</template>

<style scoped>
  .main-container {
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 0 1em;
    padding-top: 1.2rem;
  }
</style>
