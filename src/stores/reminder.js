import { ref, onMounted } from 'vue';
import { defineStore } from 'pinia';

export const useReminderStore = defineStore('reminder', () => {
  const reminders = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const baseURL = 'http://localhost:8080/reminders'; 

  async function fetchReminders() {
    loading.value = true;
    try {
      const response = await fetch(baseURL);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      const data = await response.json();
      reminders.value = data;
    } catch (err) {
      error.value = 'Error fetching reminders';
      console.error(err);
    } finally {
      loading.value = false;
    }
  }

  async function createReminder(reminder) {
    try {
      const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reminder),
      });
      const newReminder = await response.json();
      reminders.value.push(newReminder);
    } catch (err) {
      error.value = 'Error creating reminder';
      console.error(err);
    }
  }

  async function updateReminder(id, reminder) {
    try {
      const response = await fetch(`${baseURL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reminder),
      });
      const updatedReminder = await response.json();

      const index = reminders.value.findIndex(r => r.id === id);
      if (index !== -1) {
        reminders.value[index] = updatedReminder;
      }
    } catch (err) {
      error.value = 'Error updating reminder';
      console.error(err);
    }
  }

  async function deleteReminder(id) {
    try {
      await fetch(`${baseURL}/${id}`, {
        method: 'DELETE',
      });
      reminders.value = reminders.value.filter(reminder => reminder.id !== id);
    } catch (err) {
      error.value = 'Error deleting reminder';
      console.error(err);
    }
  }

  async function toggleReminderState(id) {
    const reminder = reminders.value.find(r => r.id === id);
    if (reminder) {
      reminder.state = !reminder.state;

      try {
        const response = await fetch(`${baseURL}/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(reminder), 
        });

        if (!response.ok) {
          throw new Error('Error updating reminder state');
        }

        const updatedReminder = await response.json();
        
        const index = reminders.value.findIndex(r => r.id === id);
        if (index !== -1) {
          reminders.value[index] = updatedReminder;
        }
      } catch (err) {
        error.value = 'Error updating reminder state';
        console.error(err);
      }
    }
  }

  onMounted(fetchReminders);

  return { reminders, loading, error, fetchReminders, createReminder, updateReminder, deleteReminder, toggleReminderState };
});