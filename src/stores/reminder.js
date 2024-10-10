import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useReminderStore = defineStore('reminder', () => {
  const reminders = ref([
    { name: 'Hacer la compra', time: new Date('2024-10-09T15:30:00').toISOString(), state: true, type: 'personal' },
    { name: 'Cena de empresa', time: new Date('2024-10-10T10:00:00').toISOString(), state: true, type: 'trabajo' },
    { name: 'Llamar al dentista', time: new Date('2024-10-10T12:30:00').toISOString(), state: false, type: 'personal' },
    { name: 'Reunión de trabajo', time: new Date('2024-10-09T16:00:00').toISOString(), state: false, type: 'trabajo' }
  ])
  
    return {reminders}
  })