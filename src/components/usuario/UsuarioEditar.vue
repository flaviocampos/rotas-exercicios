<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <p><strong>Código:</strong> {{ id }} -> Usando params: <i>{{ $route.params.id }}</i></p>
        <p><strong>Completo:</strong> {{ $route.query.completo ? 'Sim' : 'Não' }}</p>
        <p><strong>Lingua:</strong> {{ $route.query.lingua }}</p>

        <hr>
        <button primario>Confirmar</button>


        <div id="rodape">
            <h3>Flavio - Curso VUE para entrar na pagina e via aqui em baixo!!!</h3>
        </div>
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

<style>
#rodape {
    margin-top: 1100px;
}
</style>