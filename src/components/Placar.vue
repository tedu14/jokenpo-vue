<template>
  <div class="placar">
    <span>{{ name }}: {{ placarPlayer }}</span>
    <span> - </span>
    <span>Bot: {{ placarBot }}</span>
  </div>
</template>

<script>
export default {
  name: "Placar",
  props: {
    placarPlayer: String,
    placarBot: String,
  },
  data() {
    return {
      name: "",
    };
  },

  beforeMount() {
    this.name = localStorage.getItem("player:name");
  },
};
</script>

<style scoped>
.placar {
  width: 95%;
  max-width: 480px;
  margin: 0 auto;

  padding: 0.4rem 1.2rem;

  background-color: var(--color-primary-dark);

  border-radius: 0.4rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
</style>