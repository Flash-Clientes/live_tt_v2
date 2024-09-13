<template>
  <n-page-header :title="t('menu.tasks')" />
  <n-card>
    <p>{{ t('pages.tasks') }}</p>
  </n-card>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n(); // Função de tradução
</script>

<style scoped>
/* Estilos específicos para a página de Tarefas */
</style>
