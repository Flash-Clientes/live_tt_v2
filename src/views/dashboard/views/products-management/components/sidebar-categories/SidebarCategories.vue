<template>
  <div class="sc-container">
    <div class="sc-header">
      <n-h3>Gerenciar Categorias</n-h3>
    </div>

    <div class="sc-body">
      <InputSearch :placeholder="'Pesquisar categoria...'" />
      <n-list bordered>
        <n-list-item v-for="(category, index) in props.categories" :key="category.id">
          <n-checkbox :checked="index === 0">
            {{ category.name }} ({{ category.products }})
          </n-checkbox>
          <div class="action-buttons">
            <n-button text size="small" type="primary">
              <n-icon><i class="fa fa-edit"></i></n-icon>
            </n-button>
            <n-button text size="small" type="error">
              <n-icon><i class="fa fa-trash"></i></n-icon>
            </n-button>
          </div>
        </n-list-item>
      </n-list>
    </div>

    <div class="sc-footer">
      <n-button type="primary" size="small">
        <n-icon><i class="fa fa-plus"></i></n-icon> Adicionar Categoria
      </n-button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { NList, NListItem, NButton, NIcon, NCheckbox, NH3 } from 'naive-ui';
import InputSearch from '../input-search/InputSearch.vue';

const props = defineProps(['categories']);
</script>

<style scoped>
.sc-container {
  display: flex;
  flex-direction: column;
  width: 290px;
  background-color: #f5f5f5;
}

.sc-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 10px;
}

.sc-body {
  padding: 10px;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  margin-left: auto;
}

.sc-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
}
</style>
