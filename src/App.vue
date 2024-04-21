<script setup lang="ts">
  import { RouterView } from 'vue-router'

  import SideBar from '@/components/common/SideBar.vue'
</script>

<template>
  <section class="main">
    <SideBar name="João Paulo" path-image="https://avatars.githubusercontent.com/u/88985821?v=4" />
    <RouterView />
  </section>
</template>

<style scoped>
  .main {
    display: flex;
    width: 100vw;
    height: 100vh;
  }
</style>
