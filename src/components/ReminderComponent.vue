<script setup>
</script>

<template>
    <div>
        <ul>
            <li>Nombre del recordatorio</li>
            <li>Fecha y hora</li>
            <li><button>Marcar completado</button></li>
            <li><button>Marcar no completado</button></li>
        </ul>
    </div>
</template>

<style scoped>
ul{
    display: flex;
    justify-content: space-around;
}

li{
    list-style-type: none;
}
</style>