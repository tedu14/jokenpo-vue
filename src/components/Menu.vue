<template>
    <div id="menu" class="box col">
        <h1 class="animate__animated  animate__rubberBand">Jokenpo</h1>
        <router-link exact class="btn success" to="/register">Jogar</router-link>
        <router-link exact class="btn blue-dark" to="/history">
            Histórico
        </router-link>
        <a 
            target="_blank"
            rel="noopener noreferrer"
            class="btn blue"
            href="https://github.com/tedu14/jokenpo-frontend-vue">Codebase</a>
    </div>
</template>

<script>
export default {
    name: 'Menu'    
}
</script>

<style scoped>
    
</style>