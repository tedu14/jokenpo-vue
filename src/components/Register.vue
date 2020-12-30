<template>
  <div id="register" class="box col">
    <h1 class="animate__animated animate__rubberBand">Jokenpo</h1>
    <p>Digite seu nome:</p>
    <input
      v-model="name"
      type="text"
      name="name"
      id="player_name"
      placeholder="Nome..."
    />

    <router-link @click="registerPlayer" class="btn success" to="/game" exact>
      <fa icon="play" class="icon"></fa>
      Jogar
    </router-link>

    <router-link class="btn blue" to="/" exact>
      <fa icon="arrow-left" class="icon"></fa>
      Voltar
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: "Padauã",
    };
  },
  methods: {
    registerPlayer() {
      localStorage.setItem("player:name", this.name);
    },
  },
};
</script>

<style scoped>
#register input {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  outline: none;

  width: 90%;
  margin: 0 auto 0.8rem;

  padding: 0.8rem;

  border-radius: 0.4rem;
}

#register p {
  margin: 0 auto 0.8rem;

  font-size: 1.5rem;

  text-align: left;

  text-shadow: 1px 1px 5px var(--shadow-dark);
}
</style>