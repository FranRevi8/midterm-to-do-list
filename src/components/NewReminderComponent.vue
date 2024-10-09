<script setup>
import { ref } from 'vue'

const newReminder = ref({
  name: '',
  time: '',
  state: false,
  type: ''
})

const emit = defineEmits(['add-reminder', 'cancel-creation'])

const submitForm = () => {
  emit('add-reminder', { ...newReminder.value })
  newReminder.value = {
    name: '',
    time: '',
    state: false,
    type: ''
  }
}

const cancelNew = () => {
  emit('cancel-creation')
}
</script>

<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="type">Lista:</label>
      <input v-model="newReminder.type" type="text" id="type" required />
    </div>
    <div>
      <label for="name">Recordatorio:</label>
      <input v-model="newReminder.name" type="text" id="name" required />
    </div>
    <div>
      <label for="time">¿Cuando?:</label>
      <input v-model="newReminder.time" type="text" id="time" required />
    </div>
    <button type="submit">Añadir Recordatorio</button>
    <button @click="cancelNew">Cancelar</button>
  </form>
</template>

<style scoped>
form {
  margin: 0 auto;
  padding: 25px;
  width: 75%;
  height: 80px;
  background-color: rgb(129, 127, 130);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
}

input {
  width: 100px;
  height: 25px;
  background-color: rgb(49, 55, 74);
  color: beige;
  border: 0;
  margin-left: 10px;
  border-radius: 4px;
}

input:focus {
  color: beige;
  background-color: rgb(49, 55, 74);
}
</style>
