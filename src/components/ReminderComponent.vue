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
  <div>
    <br />
    <div class="reminder">
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
          Estado:
          <span v-if="props.state">Completado</span>
          <span v-else>No completado</span>
        </li>
        <li>
          <button v-if="isEditing" @click="saveChanges">Guardar</button>
          <button v-else @click="enableEditing">Modificar</button>
        </li>
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
