<template>
  <div class="is-container">
    <n-input :placeholder="placeholder" clearable />
    <n-icon size="20" style="margin-right: 10px; color: #ccc;">
      <i class="fa fa-search"></i>
    </n-icon>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { NInput, NIcon } from 'naive-ui';

const props = defineProps(['placeholder']);
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

.n-input {
    width: 100%;
}

.n-input input {
    padding: 10px;
    outline: none;    
}   

.n-input input:focus {
    outline: none;
}

.n-icon {
    cursor: pointer;
    color: #ccc;
    font-size: 12px;
    margin-left: 8px;
}
</style>
