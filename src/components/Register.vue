<template>
    <div id="register" class="box col">
        <h1 class="animate__animated  animate__rubberBand">Jokenpo</h1>
        <p>Digite seu nome:</p>
        <input v-model="name" type="text" name="name" id="player_name" placeholder="Nome...">

        <router-link 
            class="btn success" 
            to="/game" exact>Jogar</router-link>

        <router-link class="btn blue" to="/" exact>Voltar</router-link>
    </div>
</template>

<script>

export default {
    name: 'Register',
    data(){
        return{
            name: 'Padauã'
        }
    },
}
</script>

<style scoped>

    #register input{
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        border: none;
        outline: none;

        width: 90%;
        margin: 0 auto .8rem;

        padding: .8rem;

        border-radius: .4rem;
    }

    #register p{
        margin: 0 auto .8rem;

        font-size: 1.5rem;

        text-align: left;

        text-shadow: 1px 1px 5px var(--shadow-dark);
    }
</style>