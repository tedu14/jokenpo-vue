<template>
  <div class="col">
    <div class="box-board col">
      <div class="moves">
        <div>
          <fa
            class="icon animate__wobble animate__animated"
            icon="hand-rock"
          ></fa>
        </div>
        <span class="vs">vs</span>
        <div>
          <fa
            class="icon animate__wobble animate__animated"
            icon="hand-scissors"
          ></fa>
        </div>
      </div>
      <span class="result" v-bind:class="classColors">
        {{ checkGameMessage() }}
      </span>
    </div>
  </div>
</template>

<script>
const gameMessages = {
  win: "Você ganhou!",
  lose: "Você perdeu!",
  tie: "Deu empate!",
  wait: "Esperando jogada...",
};

export default {
  name: "Board",
  props: {
    playerMove: Object,
    computerMove: Object,
    winner: String,
  },
  computed: {
    classColors() {
      return {
        win: this.winner === "p1",
        lose: this.winner === "bot",
        tie: this.winner === "tie",
      };
    },
  },
  data() {
    return {
      message: gameMessages.wait,
    };
  },
  methods: {
    checkGameMessage() {
      if (this.winner) {
        switch (this.winner) {
          case "p1":
            this.message = gameMessages.win;
            break;
          case "bot":
            this.message = gameMessages.lose;
            break;
          default:
            this.message = gameMessages.tie;
        }
      } else {
        this.message = gameMessages.wait;
      }

      return this.message;
    },
  },
};
</script>

<style scoped>
.box-board {
  width: 95%;
  max-width: 480px;

  padding: 1.2rem 0.8rem;
  margin: 0 auto 1.2rem;

  background-color: var(--color-primary-dark);

  border-radius: 0.4rem;

  position: relative;
}

.result {
  width: 80%;

  margin: 0 auto;
  padding: 0.8rem 1.2rem;

  box-shadow: 1px 1px 5px var(--shadow-clean);

  background-color: #ffd166;

  border-radius: 0.4rem;
}

.win {
  background-color: var(--color-success);
}

.lose {
  background-color: var(--color-danger);
}

.tie {
  background-color: #e85d04;
}

.moves {
  width: 100%;

  margin: 0 auto 0.8rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.icon {
  width: 45px;
  height: 45px;
}

.vs {
  font-weight: bold;
  text-transform: uppercase;

  font-size: 1.5rem;
}
</style>