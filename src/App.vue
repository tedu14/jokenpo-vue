<template>
  <router-view />
</template>

<script>
import 'animate.css'

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
:root{
  --color-text: #e9ecef;
  --color-text-dark: #dee2e6;

  --color-primary: #caf0f8;
  --color-primary-dark: #89c2d9;

  --color-terciary: #4ea8de;
  --color-terciary-dark: #5390d9;

  --color-secondary: #2a6f97;
  --color-secondary-dark: #014f86;

  --color-success: #52b788;
  --color-success-dark: #40916c;

  --color-danger: #D62839;
  --color-danger-dark: #B22D3A;

  --shadow-clean: #adb5bd;
  --shadow-dark: #495057;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body{
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;

  background-color: var(--color-primary);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;

  color: var(--color-text);

  width: 100%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
}

.box{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 320px;
        max-width: 95%;
        height: 320px;

        margin: 0 auto;
        padding: 16px;

        background: var(--color-primary-dark);

        border-radius: .8rem;

        box-shadow: 1px 1px 8px var(--shadow-clean);
    }

    h1{
        color: var(--color-text);
        font-size: 2.5rem;

        text-shadow: 1px 1px 5px var(--shadow-dark);

        margin: 0 auto 1.2rem;
    }

    .col{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .btn{
        width: 90%;
        max-width: 300px;
        margin: 0 auto .8rem;

        padding: .8rem;

        border-radius: .4rem;

        color: var(--color-text-dark);
        font-size: 1.5rem;

        cursor: pointer;

        transition: .8s;

        text-decoration: none;
    }

    .btn:hover{
        transform: translateY(-2px);
        color: var(--color-text);
        box-shadow: 1px 1px 5px var(--shadow-dark);
    }

    .success{
        background: var(--color-success);
    }

    .success:hover{
        background-color: var(--color-success-dark);
    }

    .blue{
        background-color: var(--color-secondary);
    }

    .blue:hover{
        background-color: var(--color-secondary-dark);
    }

    .blue-dark{
        background-color: var(--color-terciary);
    }

    .blue-dark:hover{
        background-color: var(--color-terciary-dark);
    }

</style>
