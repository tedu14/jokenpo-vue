<template>
  <div class="container-player col">
    <img
      class="player-profile"
      src="../assets/player.png"
      alt="Player profile"
    />
    <span class="player-name">{{ name }}</span>
    <span class="text">Escolha sua jogada:</span>
    <div class="player-moves">
      <fa icon="hand-rock" class="icon" @click="handleMove('rock')"></fa>
      <fa icon="hand-paper" class="icon" @click="handleMove('paper')"></fa>
      <fa icon="hand-peace" class="icon" @click="handleMove('peace')"></fa>
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",
  data() {
    return {
      name: "",
    };
  },
  beforeMount() {
    this.name = localStorage.getItem("player:name");
  },
  methods: {
    handleMove(move) {
      this.$emit("player-choose", move);
    },
  },
};
</script>

<style scoped>
.container-player {
  width: 95%;
  max-width: 200px;
  margin: 0 auto;

  background-color: var(--color-primary-dark);

  padding: 0.8rem;
  border-radius: 0.4rem;

  text-shadow: 1px 1px 5px var(--shadow-dark);
}

.player-profile {
  width: 50px;
  height: 50px;

  margin: 0 auto;
}

.player-moves {
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.player-name {
  margin: 0.8rem auto;

  font-size: 1rem;
}

.icon {
  width: 25px;
  height: 25px;

  cursor: pointer;
  transition: 0.6s;
}

.icon:hover {
  color: #ffd166;
}

.text {
  margin: 0 auto 0.4rem;
}
</style>