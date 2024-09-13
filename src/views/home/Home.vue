<template>
    <div>
        <h1>Home View</h1>
        <router-link :to="{ path: 'dashboard/tasks' }" class="link">Tasks</router-link>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    console.log('Home page mounted');
});
</script>

<style></style>