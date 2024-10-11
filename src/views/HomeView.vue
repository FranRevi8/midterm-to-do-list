<script setup>
import { ref, computed } from 'vue'
import ReminderComponent from '@/components/ReminderComponent.vue'
import TypesList from '@/components/TypesList.vue'
import NewReminderComponent from '@/components/NewReminderComponent.vue'
import { useReminderStore } from '@/stores/reminder'
import { watch } from 'vue'

const reminderStore = useReminderStore()

const types = ref([]);

const updateTypesList = () => {
  types.value = [...new Set(reminderStore.reminders.map(item => item.type.toLowerCase()))];
}

watch(() => reminderStore.reminders, () => {
  updateTypesList();
});

const selectedType = ref(null)
const showCompleted = ref(true)
const showNewReminderForm = ref(false)

const filteredReminders = computed(() => {
  return reminderStore.reminders.filter((reminder) => {
    const matchesType = selectedType.value
      ? reminder.type.toLowerCase() === selectedType.value.toLowerCase()
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

const isCompleted = (reminder) => {
  reminder.state = !reminder.state
}

const cancelNewReminder = () => {
  showNewReminderForm.value = false
}

const addNewReminder = (newReminder) => {
  newReminder.type = newReminder.type.toLowerCase()
  
  reminderStore.createReminder(newReminder)
  
  if (!types.value.includes(newReminder.type)) {
    types.value.push(newReminder.type)
  }
  
  showNewReminderForm.value = false
}

const deleteReminder = (reminder) => {
  reminderStore.deleteReminder(reminder.id)
}

const updateReminder = async (reminder) => {
  await reminderStore.updateReminder(reminder.id, reminder);
  updateTypesList(); 
};

updateTypesList()

</script>

<template>
  <div class="home">
    <TypesList :types="types" @type-selected="handleTypeSelection" />
    <div class="reminders">
      <ReminderComponent
        v-for="reminder in filteredReminders"
        :key="reminder.id"
        :id="reminder.id"
        :name="reminder.name"
        :time="reminder.time"
        :state="reminder.state"
        :type="reminder.type"
        @completed-toggle="isCompleted(reminder)"
        @delete="deleteReminder(reminder)"
        @update="(updatedReminder) => updateReminder({ ...reminder, ...updatedReminder })"
      />
      <button class="show-completed" @click="toggleCompletedReminders">
        {{ showCompleted ? 'Ocultar completados' : 'Mostrar completados' }}
      </button>
      <button class="new-r-btn" @click="showNewReminderForm = true">Nuevo Recordatorio</button>

      <NewReminderComponent
        v-if="showNewReminderForm"
        @add-reminder="addNewReminder"
        @cancel-creation="cancelNewReminder"
      />
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 90vh;
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
</style>
