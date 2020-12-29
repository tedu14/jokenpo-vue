<template>
  <div class="container">
    <h1 class="animate__animated animate__rubberBand">Jokenpo</h1>
    <Board :winner="''" />
    <div class="flex-evenly">
      <router-link class="btn blue" to="/register" exact>
        <fa icon="arrow-left" class="icon"></fa>
        Voltar
      </router-link>
      <span class="btn success">
        <fa icon="user-plus" class="icon"></fa>
        Novo jogador
      </span>
    </div>
  </div>
</template>

<script>
import Board from "./Board";

export default {
  name: "Game",
  components: {
    Board,
  },
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

.container {
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;

  padding: 0 15px;
}
</style>