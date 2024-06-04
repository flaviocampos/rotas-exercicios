<template>
    <div class="usuario-lista">
        <h3>Lista de Usuários</h3>
        <ul>
            <li class="item-lista">Usuário 01</li>
            <li class="item-lista">Usuário 02</li>
            <li class="item-lista">Usuário 03</li>
        </ul>
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
import { irParaInicioMixin } from '@/mixins/irParaInicioMixin';
export default {
    props: ['id'],
    mixins: [irParaInicioMixin]
}
</script>

<style></style>