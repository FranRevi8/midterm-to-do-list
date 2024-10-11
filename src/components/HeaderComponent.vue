<script setup>

</script>

<template>
    <div class="header-container">
      <header>
        <h1>Iron Reminders</h1>
        <nav>
          <ul>
            <li><RouterLink to="/login">Iniciar Sesión</RouterLink></li>
          </ul>
        </nav>
      </header>
    </div>
  </template>
  
  <style scoped>
  .header-container {
    background-color: #2C3E50;
    padding: 15px 0;
  }
  
  header {
    width: 85%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  h1 {
    font-size: 2rem;
    color: #ECF0F1;
  }
  
  nav ul {
    display: flex;
    list-style-type: none;
  }
  
  nav ul li {
    margin-left: 20px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #ECF0F1;
    font-weight: 500;
  }
  
  nav ul li a:hover {
    color: #3498DB;
  }
  
  </style>