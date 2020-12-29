<template>
  <div>
    <h1 class="animate__animated animate__rubberBand">Jokenpo</h1>
    <div class="flex-evenly">
      <router-link class="btn blue" to="/" exact>Voltar</router-link>
      <span class="btn success">Novo jogador</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
};
</script>

<style scoped>
.flex-evenly {
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>