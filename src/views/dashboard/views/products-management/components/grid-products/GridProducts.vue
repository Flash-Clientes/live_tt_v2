<template>
  <div class="gp-container">
    <n-h1>Produtos Disponíveis</n-h1>

    <div class="grid-content">
      <CardProduct v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { NH1 } from 'naive-ui';

import CardProduct from './components/card-product/CardProduct.vue';

const props = defineProps(['products']);
</script>

<style scoped>
.gp-container {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 15px;
}

.grid-content {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 0;
  justify-content: flex-start;
  width: 100%;
  height: 60vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>