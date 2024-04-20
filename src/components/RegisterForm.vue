<script setup lang="ts"></script>

<template>
  <session class="content">
    <h1 class="title">Cadastro</h1>
    <h2 class="text-container">Identificação da pessoa</h2>
  </session>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: 100%;
}
.title {
  color: var(--text-primary);
  font-weight: 600;
  font-size: 1.5rem;
}

.text-container {
  font-size: 1.1rem;
  min-width: 100%;
  padding: 0.2em 0.5em;
  color: var(--text-white);
  background-color: var(--background-secondary);
  font-size: 600;
  border-radius: 5px;
  margin: 1em 0;
}
</style>
