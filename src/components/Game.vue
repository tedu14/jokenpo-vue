<template>
  <div class="container">
    <h1 class="animate__animated animate__rubberBand">Jokenpo</h1>
    <Placar :placarPlayer="placar.player" :placarBot="placar.bot" />
    <div class="content-board">
      <Player @player-choose="playerMove" />
      <Board
        :winner="winner"
        :playerMove="playerChoose"
        :computerMove="computerChoose"
      />
      <div class="bot-content col">
        <img class="bot-profile" src="../assets/bot.png" alt="Bot profile" />
        <span class="bot-name">Bot</span>
      </div>
    </div>
    <div class="flex-evenly">
      <router-link class="btn blue" to="/register" exact>
        <fa icon="arrow-left" class="icon"></fa>
        Voltar
      </router-link>
    </div>
  </div>
</template>

<script>
import Board from "./Board";
import Player from "./Player";
import Placar from "./Placar";

const moves = {
  rock: {
    value: 0,
    icon: "hand-rock",
  },

  paper: {
    value: 1,
    icon: "hand-paper",
  },

  peace: {
    value: 2,
    icon: "hand-peace",
  },
};

export default {
  name: "Game",
  components: {
    Board,
    Player,
    Placar,
  },
  data() {
    return {
      playerChoose: "question",
      computerChoose: "question",
      winner: "",
      placar: {
        player: 0,
        bot: 0,
      },
    };
  },
  methods: {
    playerMove(move) {
      const player = moves[move];
      const bot = this.genBotMove();

      this.playerChoose = player.icon;
      this.computerChoose = bot.icon;

      this.winner = this.checkWinner(player.value, bot.value);

      const storageFormat = {
        name: localStorage.getItem("player:name"),
        move: player,
        winner: this.winner,
      };

      const playerStorage = JSON.parse(localStorage.getItem("player:storage"));

      if (playerStorage) {
        playerStorage.push(storageFormat);

        localStorage.setItem("player:storage", JSON.stringify(playerStorage));
      } else {
        localStorage.setItem("player:storage", JSON.stringify([storageFormat]));
      }
    },

    genBotMove() {
      const optionNumber = Math.floor(Math.random() * 3);

      return Object.keys(moves)
        .map((move) => moves[move])
        .filter((move) => move.value === optionNumber)
        .reduce((_, obj) => {
          return obj;
        }, {});
    },

    checkWinner(playerOpt, botOpt) {
      if (playerOpt === undefined || botOpt === undefined) {
        throw new Error("Opção invalida!");
      } else if (playerOpt === botOpt) {
        return "tie";
      }

      switch (playerOpt) {
        case 0:
          if (Math.abs(playerOpt - botOpt) === -1) {
            this.placar.bot++;
            return "bot";
          } else {
            this.placar.player++;
            return "p1";
          }

        case 1:
          if (Math.abs(playerOpt - botOpt) === -1) {
            this.placar.bot++;
            return "bot";
          } else {
            this.placar.player++;
            return "p1";
          }

        case 2:
          if (Math.abs(playerOpt - botOpt) === 2) {
            this.placar.bot++;
            return "bot";
          } else {
            this.placar.player++;
            return "p1";
          }
      }
    },
  },
};
</script>

<style scoped>
.flex-evenly {
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;

  padding: 0 15px;

  text-shadow: 1px 1px 2px var(--shadow-dark);
}

.content-board {
  width: 100%;
  margin: 0 auto 0.8rem;

  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.bot-content {
  width: 95%;
  max-width: 200px;
  margin: 0 auto;

  padding: 0.8rem;

  background-color: var(--color-primary-dark);

  border-radius: 0.4rem;
}

.bot-profile {
  width: 100px;
  height: 100px;

  margin: 0 auto;
}

.bot-name {
  text-shadow: 1px 1px 5px var(--shadow-dark);
}
</style>