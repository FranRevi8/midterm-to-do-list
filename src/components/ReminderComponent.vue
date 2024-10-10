<script setup>
import { defineProps } from 'vue'
import { computed } from 'vue';

const props = defineProps({
  name: String,
  time: String,
  type: String,
  state: Boolean
})

const emit = defineEmits(['completed-toggle', 'delete', 'update'])

const isCompleted = () => {
  emit('completed-toggle')
}

const deleteReminder = () => {
  emit('delete')
}

const updateReminder = () => {
  emit('update')
}

const formattedTime = computed(() => {
  return new Date(props.time).toLocaleString()  
})
</script>

<template>
  <div>
    <br />
    <div class="reminder">
      <ul>
        <li><p>Lista:</p>{{ props.type }}</li>
        <li>{{ props.name }}</li>
        <li>{{ formattedTime }}</li>
        <li>
          <button @click="isCompleted">
            <span v-if="props.state">Marcar No Completado</span>
            <span v-else>Marcar completado</span>
          </button>
        </li>
        <li>
          Estado:
          <span v-if="props.state">Completado</span>
          <span v-else>No completado</span>
        </li>
        <li><button @click="updateReminder">Modificar</button></li>
        <li><button @click="deleteReminder">Eliminar</button></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  list-style-type: none;
}

.reminder {
  margin: 0 auto;
  padding: 25px;
  width: 75%;
  height: 80px;
  background-color: rgb(129, 127, 130);
  border-radius: 15px;
}
</style>
