<template>
    <div class="container">
        <h1>Pagina no encontrada</h1>
        <button @click="$router.push('/')">Volver atras</button>
    </div>
    
    
</template>

<script>
export default {
    name: 'Not-found',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.container {
    display: flex;
    align-items: center;
    flex-direction: column;
}

    button {
        background: #29b129;
        color: whitesmoke;
        display: inline-block;
        width: 20%;
        text-align: center;
        padding: 7px;
    }
</style>