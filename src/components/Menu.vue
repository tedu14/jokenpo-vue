<template>
  <div id="menu" class="box col">
    <h1 class="animate__animated animate__rubberBand">Jokenpo</h1>
    <router-link exact class="btn success" to="/register">
      <fa icon="play" class="icon"></fa>
      Jogar
    </router-link>
    <router-link exact class="btn blue-dark" to="/history">
      <fa icon="users" class="icon"></fa>
      Histórico
    </router-link>
    <a
      target="_blank"
      rel="noopener noreferrer"
      class="btn blue"
      href="https://github.com/tedu14/jokenpo-vue"
    >
      <fa icon="code" class="icon"></fa>
      Codebase
    </a>
  </div>
</template>

<script>
export default {
  name: "Menu",
};
</script>
    
<style scoped>
</style>