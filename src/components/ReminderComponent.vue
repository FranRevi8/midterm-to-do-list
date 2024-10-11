<script setup>
import { defineProps, ref } from 'vue'

const props = defineProps({
  id: Number,
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

const isEditing = ref(false)
const editedName = ref(props.name)
const editedTime = ref(props.time)
const editedType = ref(props.type)

const enableEditing = () => {
  isEditing.value = true
}

const saveChanges = () => {
  isEditing.value = false
  emit('update', { id: props.id, name: editedName.value, time: editedTime.value, type: editedType.value })
}

</script>

<template>
  <div class="reminder-card">
    <ul>
      <li>
        <p>Lista:</p>
        <span v-if="isEditing">
          <input v-model="editedType" />
        </span>
        <span v-else>{{ props.type }}</span>
      </li>
      <li>
        <span v-if="isEditing">
          <input v-model="editedName" />
        </span>
        <span v-else>{{ props.name }}</span>
      </li>
      <li>
        <span v-if="isEditing">
          <input v-model="editedTime" type="datetime-local" />
        </span>
        <span v-else>{{ new Date(props.time).toLocaleString() }}</span>
      </li>
      <li>
        <button @click="isCompleted">
          <span v-if="props.state">Marcar No Completado</span>
          <span v-else>Marcar completado</span>
        </button>
      </li>
      <li>
        Estado: <span v-if="props.state">Completado</span> <span v-else>No completado</span>
      </li>
      <li>
        <button v-if="isEditing" @click="saveChanges">Guardar</button>
        <button v-else @click="enableEditing">Modificar</button>
      </li>
      <li><button @click="deleteReminder">Eliminar</button></li>
    </ul>
  </div>
</template>

<style scoped>
.reminder-card {
  background-color: #495f75;
  color: #ECF0F1;
  padding: 15px;
  margin: 20px auto;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
}

ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li {
  list-style-type: none;
}

button {
  background-color: #3498DB;
  color: #ECF0F1;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2980B9;
}

input {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ECF0F1;
  color: #34495E;
}
</style>
