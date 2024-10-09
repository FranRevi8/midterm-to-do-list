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
  background-color: rgb(49, 55, 74);
  height: 90vh;
}

.login-container {
  max-width: 400px;
  max-height: 550px;
  margin: 0 auto;
  padding: 20px;
  background-color: beige;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  top: 200px;
  color: rgb(44, 46, 66);
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
  background-color: rgb(49, 55, 74);
  
}

input::placeholder{
    color: beige;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #21597f;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #17425e;
}

input:focus {
  color: beige;
  background-color: rgb(49, 55, 74);
}
</style>
