/* eslint-disable */
<template>
    <div class="usuario">
        <h2>Usuários</h2>
        <p><strong>Código:</strong> {{ id }}</p>
        <button sucesso @click="irParaInicio">Voltar</button>


    </div>
</template>

<script>
import { irParaInicioMixin } from '@/mixins/irParaInicioMixin';
export default {
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {

    //     $route(to, from) {
    //         this.id = to.params.id
    //     }
    // },

    // Simplificou, usando uma propriedade, antes usava data e watch
    props: ['id'],
    mixins: [irParaInicioMixin]
}
</script>

<style></style>