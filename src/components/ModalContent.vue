<script setup lang="ts">
  import { defineProps } from 'vue'
  const props = defineProps({
    closeModal: { 
      type: Function as () => void, 
      default: () => {} 
    }
  })
</script>

<template>
  <div class="content">
    <v-icon class="icon" name="md-checkcircle-round" scale="4" />
    <h1 class="text">Cadastro Realizado com Sucesso!</h1>
    <button @click="props.closeModal" class="btn btn-primary btn-width">Fazer novo cadastro</button>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em 1.5em;
}
.icon {
  color: var(--text-sucess);
}

.btn-width {
  width: 100%;
}

.text {
  font-weight: 600;
  margin: 1em;
}
</style>
