<template>
  <n-card>
    <template #header>
      <n-h3>Gerenciar Categorias</n-h3>
    </template>

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

    <template #footer>
      <n-button type="primary" size="small" class="footer-button">
        <n-icon><i class="fa fa-plus"></i></n-icon> Adicionar Categoria
      </n-button>
    </template>
  </n-card>
</template>

<script setup>
import { defineProps } from 'vue';
import { NList, NListItem, NButton, NIcon, NCheckbox, NH3, NCard } from 'naive-ui';
import InputSearch from '../input-search/InputSearch.vue';

const props = defineProps(['categories']);
</script>

<style scoped>
.n-card {
  width: 30%;
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

.footer-button {
    float: right;
}
</style>
