<template>
    <div class="is-container">
        <input type="text" :placeholder="placeholder" />
        <i style="margin-right: 10px; font-size: 15px; color: #ccc;" class="fa fa-search"></i>
    </div>
</template>

<script setup>
const props = defineProps([
    'placeholder',
]);
</script>

<style scoped>
.is-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
    padding: 1px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.is-container input {
    width: 100%;
    padding: 10px;
    border: none;
}

.is-container input:focus {
    outline: none;
}

.is-container i {
    font-size: 20px;
    color: #ccc;
}
</style>