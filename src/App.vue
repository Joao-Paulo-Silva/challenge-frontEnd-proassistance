<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <section class="main"> 

    <RouterView />
  </section>
</template>

<style scoped>
  .main{
    display: flex;
    width: 100vh;
    height: 100vh;
  }

</style>

