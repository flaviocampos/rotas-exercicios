<template>
    <div>
        <img :src="require('@/assets/404.jpg')" alt="" style="max-width: 200%">
        <br>
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