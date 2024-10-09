<script setup>
import TypesList from '@/components/TypesList.vue';
</script>

<template>
    <template>
  <div class="home">
    <TypesList :types="null" @type-selected="handleTypeSelection" />
  </div>
</template>
</template>

<style>
    
</style>