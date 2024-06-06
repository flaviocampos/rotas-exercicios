<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <p><strong>Código:</strong> {{ id }} -> Usando params: <i>{{ $route.params.id }}</i></p>
        <p><strong>Completo:</strong> {{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>Lingua:</strong> {{ $route.query.lingua }}</p>

        <hr>

        <button sucesso @click="irParaUsuario">Voltar</button>
    </div>
</template>

<script>

export default {
    props: ['id'],
    methods: {
        irParaUsuario() {
            //this.$router.push('/')
            this.$router.push({ name: 'UsuarioLista' })

        }
    }
}
</script>

<style></style>