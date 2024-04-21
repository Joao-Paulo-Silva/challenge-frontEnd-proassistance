<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps({
  name: String,
  pathImage: {
    type: String,
    default: undefined
  }
})
</script>

<template>
  <div class="container">
    <header class="header-container">
      <div class="icon-header">
        <v-icon name="fa-hand-holding-heart" />
      </div>

      <div class="title-container">
        <p class="title-secondary">Pro</p>
        <p class="title-primary">Assistência</p>
      </div>
    </header>
    <div class="session-type-container">
      <div>
        <p>Viçosa</p>
        <RouterLink to="/" class="return-session">
          <v-icon class="return-icon" name="md-arrowbackios-round" /> Coordenação
        </RouterLink>
      </div>
    </div>
    <nav class="itens-container">
      <RouterLink to="/home" class="item-menu">
        <v-icon class="icon-menu" name="md-home" /> Início
      </RouterLink>
      <RouterLink to="/" class="item-menu">
        <v-icon class="icon-menu" name="md-assignment-round" /> Cadastro
      </RouterLink>
      <RouterLink to="/agenda" class="item-menu">
        <v-icon class="icon-menu" name="md-event-round" /> Agenda
      </RouterLink>
      <RouterLink to="/profile" class="item-menu">
        <v-icon class="icon-menu" name="md-person-round" /> Perfil
      </RouterLink>
      <RouterLink to="/reports" class="item-menu">
        <v-icon class="icon-menu" name="md-inventory-round" /> Relatórios
      </RouterLink>
    </nav>
    <footer class="footer-container">
      <div class="profile-img-container" v-if="pathImage">
        <img :src="pathImage" alt="" />
      </div>
      <div class="profile-img-container" v-else>
        <v-icon name="md-person-round" />
      </div>
      <p class='profile-name'>{{ name?.slice(0, 50) }}</p>
    </footer>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: fit-content;
  max-width: 250px;
  background-color: var(--background-primary);
  box-shadow: 5px 0px 10px 0px var(--hover-background);
}

.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7em 1em;
  border-bottom: 1px solid var(--border-container);
}

.session-type-container {
  padding: 0.8em 0.5em;
  border-bottom: 1px solid var(--border-container);
  font-size: 0.75rem;
}
.return-session {
  display: flex;
  align-items: center;
  color: var(--text-black);
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.1em;
  border-radius: 5px;
}

.return-session:hover {
  background-color: var(--hover-background);
}
.return-icon {
  margin-top: 0em;
  height: 0.7rem;
}

.icon-header {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: var(--background-secondary);
  color: var(--text-white);
  width: 30px;
  height: 30px;
  margin-right: 1em;
}

.title-container {
  display: flex;
  font-size: 1.2rem;
}

.title-primary {
  color: var(--text-title);
  font-weight: 600;
}
.title-secondary {
  color: var(--text-black);
  font-weight: 300;
}
.itens-container {
  display: flex;
  flex-direction: column;
}

.item-menu {
  width: 100%;
  padding: 0.2em 1em;
  margin: 0.1em 0;
  font-size: 1.1rem;
  text-decoration: none;
  color: var(--text-black);
}

.item-menu.router-link-exact-active {
  color: var(--text-white);
  background-color: var(--background-secondary) !important;
  cursor: default;
  font-weight: 600;
}

.item-menu:hover {
  background-color: var(--hover-background);
}

.icon-menu {
  margin-right: 0.3rem;
}

.footer-container {
  display: flex;
  align-items: center;
  bottom: 0;
  margin-top: auto;
  padding: 0.5em 0.5em;
  border-top: 1px solid var(--border-container);
  color: var(--text-black);
}

.profile-name{
  font-size: 0.9rem;
  font-weight: 600;
  width: fit-content;
  line-height: 1.2;
  max-width: 250px;
}

.profile-img-container {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 100%;
  border: 2px solid var(--background-secondary);
  margin-right: 0.5em;
}

.profile-img-container img {
  width: auto;
  height: auto;
  min-width: 100%;
  min-height: 100%;
  margin: auto;
}
</style>
