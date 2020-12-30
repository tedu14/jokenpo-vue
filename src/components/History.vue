<template>
  <div class="box-history box col">
    <h1 class="animate__animated animate__rubberBand">Jokenpo</h1>
    <div v-if="data.length < 1">
      <p>Ainda não há jogadas feitas</p>
    </div>
    <div class="content-players" v-if="data.length >= 1">
      <div class="content-player" v-for="item in data" :key="item.name">
        <span>
          <img src="../assets/player.png" alt="player profile" />
          <span> {{ item.name }}</span>
        </span>
        <span> Jogada: <fa class="icon" :icon="item.move.icon"></fa> </span>
        <span> Resultado: {{ checkResult(item.winner) }} </span>
      </div>
    </div>
    <router-link class="btn blue" to="/">
      <fa class="icon" :icon="'arrow-left'"></fa>
      Voltar
    </router-link>
  </div>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      data: [],
    };
  },
  beforeMount() {
    const data = JSON.parse(localStorage.getItem("player:storage"));

    if (data) {
      this.data = data;
    }
  },
  methods: {
    checkResult(result) {
      if (result === "p1") {
        return "Ganhou";
      } else if (result === "bot") {
        return "Perdeu";
      } else {
        return "Empate";
      }
    },
  },
};
</script>

<style scoped>
.box-history {
  width: 95%;
  max-width: 600px;
  height: 400px;
}

.box-history p {
  text-align: center;

  font-size: 1.5rem;

  margin: 1.6rem auto;

  text-shadow: 1px 1px 5px var(--shadow-dark);
}

.content-players {
  width: 100%;
  margin: 0 auto 1.2rem;

  overflow-y: scroll;
}

.content-players::-webkit-scrollbar {
  width: 10px;
}

.content-players::-webkit-scrollbar-track {
  background-color: var(--color-secondary);
  border-radius: 0.4rem;
}

.content-players::-webkit-scrollbar-thumb {
  background-color: var(--color-secondary-dark);
  border-radius: 0.4rem;
}

.content-player {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  padding: 0.4rem 0;

  border-bottom: 1px solid var(--color-secondary-dark);
}

.content-player img {
  width: 40px;
  height: 40px;

  border-radius: 50%;
}

.content-player span {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  text-shadow: 1px 1px 2px var(--shadow-dark);
}
</style>