<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')

const handleSubmit = () => {
  if (username.value && password.value) {
    console.log('Usuario:', username.value)
    console.log('Contraseña:', password.value)
  } else {
    alert('Por favor, rellena ambos campos')
  }
}
</script>

<template>
  <div class="bg">
    <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Usuario</label>
          <input
            v-model="username"
            type="text"
            id="username"
            required
            placeholder="Introduce tu usuario"
          />
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            v-model="password"
            type="password"
            id="password"
            required
            placeholder="Introduce tu contraseña"
          />
        </div>

        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-color: #34495e;
  height: 90vh;
}

.login-container {
  max-width: 400px;
  max-height: 550px;
  margin: 0 auto;
  padding: 20px;
  background-color: #d8e2e5;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  top: 200px;
  color: #34495e;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 14px;
  background-color: #34495e;
  color: #ecf0f1;
}

input::placeholder {
  color: #ecf0f1;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: #ecf0f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background-color: #2980b9;
}

input:focus {
  color: #ecf0f1;
  background-color: #34495e;
  outline: none;
}
</style>
