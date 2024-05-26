<template>
    <div class="meio">
        <h2>Configurações Diversas</h2>
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
export default {
    methods: {
        irParaInicio() {
            //this.$router.push('/')
            this.$router.push({ path: '/' })
        }
    }
}
</script>

<style></style>