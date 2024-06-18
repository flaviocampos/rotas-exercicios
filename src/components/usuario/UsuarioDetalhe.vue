<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe {{ id }}</h3>
        <p><strong>Código:</strong> {{ id }}</p>
        <button sucesso @click="irParaUsuario">Voltar</button>
        <router-link tag="button" primario :to="{
            name: 'editarUsuario', params: { id },
            query: { completo: false, lingua: 'por' },
            hash: '#rodape'
        }">
            Editar
        </router-link>
        <!-- Outras formas -->
        <!-- :to="`/usuario/${$route.params.id}/editar`" -->
        <!-- :to="`/usuario/${id}/editar`" -->
        <!-- :to="{ name: 'editarUsuario', params: { id: $route.params.id } }" -->
        <!-- :to="{ name: 'editarUsuario', params: { id } }" -->

        <!-- usando query -> depois da ? -->
        <!--  :to="{ name: 'editarUsuario', params: { id }, query: { completo: true, lingua: 'Portuguesa' } }"> -->

        <button sucesso @click="irParaUsuario3">Ir para 3</button>
    </div>
</template>

<script>

export default {
    props: ['id'],
    beforeRouteEnter(to, from, next) {

        // Sempre tem que ter next(), caso contrario não navega
        // eslint-disable-next-line no-console
        console.log('Dentro do componente -> usuário Detalhe')
        // você não tem acesso id, mas tem jeito, mas não legal 07:00
        // next(vm => {
        //     // eslint-disable-next-line no-console
        //     console.log(`VM: ${vm.id}`)
        // })

        // const autenticado = true
        // autenticado ? next() : next(false)

        next()
    },
    methods: {
        irParaUsuario() {
            //this.$router.push('/usuario')
            this.$router.push({ name: 'UsuarioLista' })
        },
        irParaUsuario3() {
            this.$router.push({ path: '', params: { id: 5 } })

        }
    }

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
