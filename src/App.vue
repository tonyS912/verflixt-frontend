<script setup>
import { RouterView } from 'vue-router'
import { onBeforeMount } from "vue";

onBeforeMount(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  });
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
