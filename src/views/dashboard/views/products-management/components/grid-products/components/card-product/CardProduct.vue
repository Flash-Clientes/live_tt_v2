<template>
  <div class="card-container">
    <n-card :title="props.product.name" class="card-content">
      <template #header-extra>
        <n-switch v-model:value="props.product.status" />
      </template>

      <n-space justify="end">
        <n-button type="primary" ghost size="small" @click="openModal('update')">
          <n-icon><i class="fa fa-edit"></i></n-icon>
        </n-button>
        <n-button type="error" ghost size="small" @click="openModal('remove')">
          <n-icon><i class="fa fa-trash"></i></n-icon>
        </n-button>
      </n-space>

      <template #cover>
        <img :src="props.product.image" :alt="props.product.name" />
      </template>

      <p class="product-sku">{{ props.product.sku }}</p>
    </n-card>

    <CustomModal
      v-model:showModal="showModal"
      :title="modalTitle"
      :fields="modalFields"
      :functionToCall="modalFunctionToCall"
      :submitText="modalSubmitText"
      :description="modalDescription"
    />
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { NButton, NSwitch, NCard, NIcon, NSpace } from 'naive-ui';
import CustomModal from '../../../../../../components/custom-modal/CustomModal.vue';

const props = defineProps(['product']);
const showModal = ref(false);
const modalTitle = ref('Atualizar Produto');
const modalFields = ref([
  {
    label: 'Nome',
    type: 'text',
    value: props.product.name,
  },
  {
    label: 'SKU',
    type: 'text',
    value: props.product.sku,
  },
  {
    label: 'Preço',
    type: 'text',
    value: props.product.price,
  },
  {
    label: 'Categoria',
    type: 'select',
    options: [
      { label: 'Refrigeradores', value: 10 },
      { label: 'Lavadoras', value: 20 },
      { label: 'Secadoras', value: 8 },
      { label: 'Coifas/Exaustores', value: 5 },
      { label: 'Fogões', value: 15 },
    ],
    value: props.product.category,
  },
  {
    label: 'Ativo',
    type: 'switch',
    value: props.product.status,
  },
]);
const modalFunctionToCall = ref(null);
const modalSubmitText = ref('Atualizar');
const modalDescription = ref(null);

const updateProduct = () => {
  console.log('Atualizando produto...');
  showModal.value = false;
};

const removeProduct = () => {
  console.log('Removendo produto...');
  showModal.value = false;
};

const openModal = (operation) => {
  switch (operation) {
    case 'update':
      modalTitle.value = 'Atualizar Produto';
      modalFields.value = [
        {
          label: 'Nome',
          type: 'text',
          value: props.product.name,
        },
        {
          label: 'SKU',
          type: 'text',
          value: props.product.sku,
        },
        {
          label: 'Preço',
          type: 'text',
          value: props.product.price,
        },
        {
          label: 'Categoria',
          type: 'select',
          options: [
            { label: 'Refrigeradores', value: 10 },
            { label: 'Lavadoras', value: 20 },
            { label: 'Secadoras', value: 8 },
            { label: 'Coifas/Exaustores', value: 5 },
            { label: 'Fogões', value: 15 },
          ],
          value: props.product.category,
        },
        {
          label: 'Ativo',
          type: 'switch',
          value: props.product.status,
        },
      ];
      modalFunctionToCall.value = updateProduct;
      modalSubmitText.value = 'Atualizar';
      break;
    case 'remove':
      modalTitle.value = 'Remover Produto';
      modalDescription.value = `Tem certeza que deseja remover o produto ${props.product.name}?`;
      modalFields.value = [];
      modalFunctionToCall.value = removeProduct;
      modalSubmitText.value = 'Remover';
      break;
  }

  showModal.value = true;
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  width: 250px;
  height: 350px;
  position: relative;
}

.card-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

img {
  max-width: 100%;
  max-height: 150px;
  object-fit: contain;
  padding: 10px 0;
  margin: 0 auto;
}

.product-sku {
  margin: 10px 0;
  font-size: 14px;
  text-align: start;
}
</style>
