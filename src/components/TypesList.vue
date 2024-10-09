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
    <div>
      <ul>
        <li v-for="(type, index) in types" :key="index">
          <button class="type-to-upper" @click="selectType(type)">{{ type }}</button>
        </li>
        <li>
          <button @click="selectType(null)" class="view-all">Ver todos</button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>
.menu {
  background-color: rgb(93, 90, 108);
  width: 15%;
}

li {
  text-align: center;
  list-style-type: none;
}

li button {
  background-color: beige;
  color: black;
  width: 75%;
  border-radius: 14px;
  padding: 10px;
  margin-top: 25px;
}

.view-all{
  margin-top: 500px;
}

.type-to-upper:first-letter{
    text-transform: uppercase;
}

</style>


