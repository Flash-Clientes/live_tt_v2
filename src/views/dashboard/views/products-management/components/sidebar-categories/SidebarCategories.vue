<template>
    <div class="sc-container">
        <div class="sc-header">
            <h3>Gerenciar Categorias</h3>
            <!-- <button class="button button-primary">
                <i class="fa fa-plus"></i> Adicionar Categoria
            </button> -->
        </div>

        <div class="sc-body">
            <InputSearch :placeholder="'Pesquisar categoria...'" />
            <ul>
                <li v-for="(category, index) in props.categories" :key="category.id">
                    <input type="checkbox" :id="category.id" :name="category.id" :checked="index === 0">
                    {{ category.name }} ({{ category.products }})
                
                    <div class="action-buttons">
                        <button class="button button-secondary">
                            <i class="fa fa-edit"></i>
                        </button>
                        <button class="button button-danger">
                            <i class="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            </ul>     
        </div>

        <div class="sc-footer">
            <button class="button button-primary">
                <i class="fa fa-plus"></i> Adicionar Categoria
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import InputSearch from '../input-search/InputSearch.vue';

const props = defineProps([
    'categories',
]);
</script>

<style scoped>
.sc-container {
    display: flex;
    flex-direction: column;
    width: 290px;
    background-color: #f5f5f5;
}

.sc-container .sc-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
}

.sc-body {
    padding: 10px;
}

.sc-body ul {
    list-style: none;
    padding: 0;
}

.sc-body ul li {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 10px;
    cursor: pointer;
}

.sc-body ul li:hover {
    background-color: #e0e0e0;
}

.sc-body ul li input {
    margin-right: 10px;
}

.sc-body ul li input[type="checkbox"] {
    cursor: pointer;
}

.sc-body ul li .action-buttons {
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

.sc-footer button {
    font-size: 12px;
}

button {
    font-size: 10px;
    padding: 5px 10px;
}
</style>