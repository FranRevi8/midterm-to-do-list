<script setup>
import { ref, computed } from 'vue'
import ReminderComponent from '@/components/ReminderComponent.vue'
import TypesList from '@/components/TypesList.vue'

const reminders = ref([
  { name: 'Hacer la compra', time: 'hoy, 15:30', state: true, type: 'personal' },
  { name: 'Cena de empresa', time: 'mañana, 10:00', state: true, type: 'trabajo' },
  { name: 'Llamar al dentista', time: 'mañana, 12:30', state: false, type: 'personal' },
  { name: 'Reunión de trabajo', time: 'hoy, 16:00', state: false, type: 'trabajo' }
])

const types = [...new Set(reminders.value.map((item) => item.type))]

const selectedType = ref(null)
const showCompleted = ref(true)

const filteredReminders = computed(() => {
  return reminders.value.filter((reminder) => {
    const matchesType = selectedType.value
      ? reminder.type === selectedType.value.toLowerCase()
      : true
    const matchesState = showCompleted.value || !reminder.state
    return matchesType && matchesState
  })
})

const handleTypeSelection = (type) => {
  selectedType.value = type
}

const toggleCompletedReminders = () => {
  showCompleted.value = !showCompleted.value
}

const isCompleted = (state) => {
  state.state = !state.state
}


</script>

<template>
  <div class="home">
    <TypesList :types="types" @type-selected="handleTypeSelection" />
    <div class="reminders">
      <ReminderComponent
        v-for="(reminder, index) in filteredReminders"
        :key="index"
        :name="reminder.name"
        :time="reminder.time"
        :state="reminder.state"
        :type="reminder.type"
        @completed-toggle="isCompleted(reminder)"
      />
      <button class="show-completed" @click="toggleCompletedReminders">
        {{ showCompleted ? 'Ocultar completados' : 'Mostrar completados' }}
      </button>
      <router-link to="/new-reminder" class="new-r-btn">Nuevo Recordatorio</router-link>
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 100vh;
  background-color: rgb(49, 55, 74);
  color: beige;
  display: flex;
}

.reminders {
  width: 100%;
  text-align: center;
}

.show-completed {
  margin: 40px;
}

.new-r-btn{
  background-color: white;
  border: 1px solid grey;
  color: black;
  text-decoration: none;
  border-radius: 4px;
}
</style>
