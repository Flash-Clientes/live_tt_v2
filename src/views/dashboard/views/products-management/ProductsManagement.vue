<template>
  <n-page-header :title="t('menu.products')" />
  <div class="pm-header">
    <InputSearch :placeholder="'Pesquisar produto...'" />
  
    <button class="button button-primary" @click="openModal">
      <i class="fa fa-plus"></i> Adicionar Produto
    </button>
  </div>

  <div class="pm-body">
    <SidebarCategories :categories="availableCategories" />

    <GridProducts :products="availableProducts" />
  </div>

  <CustomModal 
    v-model:showModal="showModal"
    size="md"
    title="Cadastrar Produto" 
    :fields="registerProductModalFields"
    :functionToCall="registerProduct"
    submitText="Cadastrar"    
  />
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import CustomModal from '../../components/custom-modal/CustomModal.vue';

import InputSearch from './components/input-search/InputSearch.vue';
import SidebarCategories from './components/sidebar-categories/SidebarCategories.vue';
import GridProducts from './components/grid-products/GridProducts.vue';

const { t } = useI18n(); // Função de tradução
const showModal = ref(false);

const availableCategories = ref([
  {
    id: 0,
    name: 'Todas as categorias',
    products: 53
  },
  {
    id: 1,
    name: 'Refrigeradores',
    products: 10
  },
  {
    id: 2,
    name: 'Lavadoras',
    products: 20
  },
  {
    id: 3,
    name: 'Fogões',
    products: 15
  },
  {
    id: 4,
    name: 'Coifas/Exaustores',
    products: 5
  },
  {
    id: 5,
    name: 'Secadoras',
    products: 8
  }
]);

const availableProducts = ref([
  {
    id: 1,
    name: 'Refrigerador Nordik 480 Plus',
    category: 'Refrigeradores',
    sku: '123456',
    status: 1,
    image: 'https://res.cloudinary.com/prime-arte/image/upload/v1718054237/santander/mukbk2njxucdwqqbadrm.png'
  },
  {
    id: 2,
    name: 'Lavadora Carga Superior Efficace 17.5Szg',
    category: 'Lavadoras',
    sku: '654321',
    status: 1,
    image: 'https://res.cloudinary.com/flashvolve/image/upload/v1725028997/clientes/L/LIVE/u5lxgysxgnkj639eaxbx.png'
  },
  {
    id: 3,
    name: 'Cocina Diva 820',
    category: 'Fogões',
    sku: '789123',
    status: 1,
    image: 'https://res.cloudinary.com/prime-arte/image/upload/v1718054219/santander/gkcm13w6qtexl5iz6dv2.png'
  },
  {
    id: 4,
    name: 'Coifa Campaña 60cm',
    category: 'Coifas/Exaustores',
    sku: '321789',
    status: 1,
    image: 'https://res.cloudinary.com/prime-arte/image/upload/v1723669310/santander/liotlxpgcssalnfmrwqc.png'
  },
  {
    id: 5,
    name: 'Secadora 7D Bgz',
    category: 'Secadoras',
    sku: '987654',
    status: 1,
    image: 'https://res.cloudinary.com/prime-arte/image/upload/v1718053510/santander/larfebdzzcbzlzqkhhoj.png'
  }
]);

const registerProductModalFields = ref([
  {
    id: 1,
    label: 'Nome',
    placeholder: 'Digite o nome do produto',
    type: 'text',
    value: ''
  },
  {
    id: 2,
    label: 'SKU',
    placeholder: 'Digite o SKU do produto',
    type: 'text',
    value: ''
  },
  {
    id: 3,
    label: 'Categoria',
    placeholder: 'Selecione a categoria do produto',
    type: 'select',
    options: availableCategories.value.map(category => ({
      id: category.id,
      label: category.name,
      value: category.id
    })),
    value: ''
  },
  {
    id: 4,
    label: 'Status',
    type: 'switch',
    value: true
  }
]);

const registerProduct = () => {
  console.log('Cadastrando produto...');
  showModal.value = false;
};

const openModal = () => showModal.value = true; 
</script>

<style>
.pm-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}

.pm-body {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
