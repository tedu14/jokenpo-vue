<template>
  <div class="col">
    <div class="box-board col">
      <div class="moves">
        <div>
          <fa
            class="icon animate__animated"
            :class="playerAnimated"
            :icon="playerMove"
          ></fa>
        </div>
        <span class="vs">vs</span>
        <div>
          <fa
            class="icon animate__animated"
            :icon="computerMove"
            :class="botAnimated"
          ></fa>
        </div>
      </div>
      <span
        class="result animate__animated"
        v-bind:class="[classColors, classAnimated]"
      >
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
    playerMove: String,
    computerMove: String,
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
    classAnimated() {
      return {
        animate__shakeY: this.winner === "p1",
        animate__shakeX: this.winner === "bot",
        animate__swing: this.winner === "tie",
      };
    },
    playerAnimated() {
      return {
        animate__shakeY: this.winner === "p1",
        animate__tada: this.winner !== "p1",
      };
    },
    botAnimated() {
      return {
        animate__shakeY: this.winner === "bot",
        animate__tada: this.winner !== "bot",
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
  width: 480px;

  padding: 1.2rem 0.8rem;
  margin: 0.8rem auto;

  background-color: var(--color-primary-dark);

  border-radius: 0.4rem;

  position: relative;
}

.result {
  width: 80%;

  margin: 0.8rem auto 0;
  padding: 0.8rem 1.2rem;

  box-shadow: 1px 1px 5px var(--shadow-clean);

  background-color: #ffd166;

  border-radius: 0.4rem;

  font-size: 1.2rem;
  font-weight: bold;
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

  margin: 0 auto;

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

@media screen and (max-width: 726px) {
  .moves {
    flex-direction: column;
  }

  .vs {
    margin: 0.8rem auto;
  }
}
</style>