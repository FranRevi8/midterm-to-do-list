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
  emit('update', {
    id: props.id,
    name: editedName.value,
    time: editedTime.value,
    type: editedType.value
  })
}
</script>

<template>
  <div class="reminder-card">
    <ul class="reminder-content">
      <li class="type">
        <span>Lista:</span>
        <br />
        <span v-if="isEditing">
          <input v-model="editedType" />
        </span>
        <span v-else>{{ props.type }}</span>
      </li>
      <li class="name">
        <span v-if="isEditing">
          <input v-model="editedName" />
        </span>
        <span v-else>{{ props.name }}</span>
      </li>
      <li class="time">
        <span v-if="isEditing">
          <input v-model="editedTime" type="datetime-local" />
        </span>
        <span v-else>{{ new Date(props.time).toLocaleString() }}</span>
      </li>
      <li class="state">
        <span v-if="props.state" class="done">¡Completado!</span>
        <span v-else class="not-done">No completado</span>
      </li>
      <li class="complete-btn-cont">
        <button
          @click="isCompleted"
          :class="{ 'complete-btn': !props.state, 'incomplete-btn': props.state }"
        >
          <span v-if="props.state">❎</span>
          <span v-else>✅</span>
        </button>
      </li>
      <li class="modify-btn-cont">
        <button v-if="isEditing" @click="saveChanges">Guardar</button>
        <button v-else @click="enableEditing">🔄</button>
      </li>
      <li class="delete-btn-cont">
        <button @click="deleteReminder" class="delete-btn">🗑️</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.reminder-card {
  background-color: #485c70;
  color: #ecf0f1;
  padding: 15px;
  margin: 20px auto;
  width: 90%;
  border-radius: 10px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.3);
  height: 70px;
}

ul {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
  margin: 0;
}

li {
  list-style-type: none;
}

.type {
  flex-direction: column;
  width: 8%;
  text-align: center;
}

.name {
  width: 10%;
  text-align: center;
}

.time {
  width: 10%;
  text-align: center;
  line-height: 30px;
}

.state {
  width: 10%;
  text-align: center;
}

.done {
  color: rgb(105, 209, 105);
}

.not-done {
  color: rgb(228, 228, 59);
}

.complete-btn-cont{
  width: 3.5%;
}

.modify-btn-cont {
  width: 2%;
}
.delete-btn-cont {
  width: 1%;
}

button {
  background-color: #485c70;
  color: #ecf0f1;
  border: none;
  padding: 8px 8px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 30px;
}

button:hover {
  background-color: #2980b9;
}

input {
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ecf0f1;
  color: #34495e;
}

.delete-btn {
  background-color: #485c70;

}

.delete-btn:hover {
  background-color: rgb(173, 54, 54);
}

.complete-btn {
  background-color: #485c70;
  font-size: 30px;
  color:#4d6c81;
}

.complete-btn:hover {
  background-color: rgb(95, 188, 95);
}

.incomplete-btn {
  background-color: #485c70;
  font-size: 30px;
  color:#4d6c81;
}

.incomplete-btn:hover {
  background-color: rgb(192, 192, 64);
}
</style>
