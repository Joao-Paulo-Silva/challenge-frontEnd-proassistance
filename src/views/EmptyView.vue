<template>
  <main class="container">
    <v-icon class="icon" name="fc-vlc" animation="float"  scale="4"/>
    <p class="text">A página solicitada ainda não foi implementada.</p>
    <RouterLink to="/" class="btn btn-primary">Voltar</RouterLink>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}
.icon{
  margin: 0.5rem;
}
.text{
  font-size: 1.1rem;
  margin: 0.5em;
}
</style>
