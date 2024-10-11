<script setup>
defineProps({
  types: Array 
})

const emit = defineEmits(['type-selected'])  

const selectType = (type) => {
  emit('type-selected', type)
}
</script>

<template>
  <aside class="menu">
    <h2>Listas:</h2>
    <ul>
      <li v-for="(type, index) in types" :key="index">
        <button @click="selectType(type)" class="type-button">{{ type }}</button>
      </li>
      <li>
        <button @click="selectType(null)" class="view-all-button">Ver todos</button>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.menu {
  background-color: #2C3E50;
  padding: 20px;
  border-radius: 10px;
  width: 12vw;
  height: 79vh;
  position: fixed;
  top: 135px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
  text-align: center;
}

.type-button {
  background-color: #3498DB;
  color: #ECF0F1;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  width: 90%;
  height: 50px;
}

.view-all-button{
  background-color: #ffffff;
  color: #0f4856;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.type-button:hover {
  background-color: #2980B9;
}

.view-all-button:hover{
  background-color: #bed3e1;
}
</style>


