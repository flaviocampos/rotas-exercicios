<template>
    <nav class="menu">
        <ul>
            <router-link tag="li" to="/" exact active-class="active"><a>Inicío</a></router-link>
            <router-link tag="li" to="/usuario/usuario/1" active-class="active"><a>Usuário 1</a></router-link>
            <router-link tag="li" to="/usuario/usuario/2" active-class="active"><a>Usuário 2</a></router-link>
            <router-link tag="li" to="/usuario/informacoes" active-class="active"><a>informacoes</a></router-link>
            <router-link tag="li" to="/configuracao" active-class="active"><a>Configuração</a></router-link>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.menuX {
    border: 1px solid black;
    float: left;
}

.menuX .itemX {
    position: relative;
    float: left;
    border-right: 1px solid black;
}
</style>