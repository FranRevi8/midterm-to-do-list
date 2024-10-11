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
  if (newReminder.value.time) {
    newReminder.value.time = new Date(newReminder.value.time).toISOString();
  }
  emit('add-reminder', { ...newReminder.value });
}

const cancelNew = () => {
  emit('cancel-creation')
}
</script>

<template>
  <form @submit.prevent="submitForm" class="new-reminder-form">
    <div class="input-group">
      <label for="type">Lista:</label>
      <input v-model="newReminder.type" type="text" id="type" required />
    </div>
    <div class="input-group">
      <label for="name">Recordatorio:</label>
      <input v-model="newReminder.name" type="text" id="name" required />
    </div>
    <div class="input-group">
      <label for="time">¿Cuándo?:</label>
      <input v-model="newReminder.time" type="datetime-local" id="time" required />
    </div>
    <div class="button-group">
      <button type="submit" class="add-button">Añadir Recordatorio</button>
      <button type="button" @click="cancelNew" class="cancel-button">Cancelar</button>
    </div>
  </form>
</template>

<style scoped>
.new-reminder-form {
  background-color: #34495E;
  color: #ECF0F1;
  padding: 20px;
  margin: 20px auto;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.input-group {
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

label {
  font-size: 1rem;
}

input {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ECF0F1;
  background-color: rgb(49, 55, 74);
  color: #ECF0F1;
  width: 70%;
}

input:focus {
  outline: none;
  background-color: #2C3E50;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.add-button, .cancel-button {
  background-color: #3498DB;
  color: #ECF0F1;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.add-button:hover, .cancel-button:hover {
  background-color: #2980B9;
}
</style>
