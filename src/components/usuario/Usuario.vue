<template>
    <div class="usuario">
        <h2>Usuários</h2>
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