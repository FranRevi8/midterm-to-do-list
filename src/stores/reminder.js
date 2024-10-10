import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useReminderStore = defineStore('reminder', () => {
    const reminders = ref([
        { name: 'Hacer la compra', time: 'hoy, 15:30', state: true, type: 'personal' },
        { name: 'Cena de empresa', time: 'mañana, 10:00', state: true, type: 'trabajo' },
        { name: 'Llamar al dentista', time: 'mañana, 12:30', state: false, type: 'personal' },
        { name: 'Reunión de trabajo', time: 'hoy, 16:00', state: false, type: 'trabajo' }
      ])
    
  
    return {reminders}
  })