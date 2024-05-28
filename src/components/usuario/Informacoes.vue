<template>
    <div>
        <h3>Informações do Usuário</h3>
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
import { irParaInicioMixin } from '@/mixins/irParaInicioMixin';
export default {
    mixins: [irParaInicioMixin]

}
</script>

<style></style>