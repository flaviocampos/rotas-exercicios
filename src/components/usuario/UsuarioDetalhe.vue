<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <p><strong>Código:</strong> {{ id }}</p>
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
import { irParaInicioMixin } from '@/mixins/irParaInicioMixin';
export default {
    props: ['id'],
    mixins: [irParaInicioMixin]

    // data() {
    // return {
    // id: this.$route.params.id
    // }
    // },
    // watch: {

    // $route(to, from) {
    // this.id = to.params.id
    // }
    // },
}
</script>



<style></style>
