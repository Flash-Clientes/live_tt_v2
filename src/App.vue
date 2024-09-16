<template>
  <n-config-provider :theme="theme">
    <n-layout-content class="main">
      <router-view />
    </n-layout-content>
  </n-config-provider>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router'; // Importa o useRoute para acessar as rotas
import { darkTheme } from 'naive-ui';

// Detecta o idioma preferido do navegador
const detectedLocale = navigator.language.split('-')[0];
const locale = ref(detectedLocale);

// Definindo o tema padrão como claro
const theme = ref(null);

// Função para determinar se o sidebar deve ser oculto
const route = useRoute();
const hideSidebar = computed(() => route.meta.hideSidebar);

onMounted(() => {
  locale.value = detectedLocale || 'pt';
});

/**
 * Função para atualizar o tema com base no evento emitido pelo SidebarMenu
 */
function updateTheme(selectedTheme) {
  theme.value = selectedTheme === 'dark' ? darkTheme : null;
}
</script>

<style>
::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-thumb {
  background-color: #14d085;
  border-radius: 10px;
} 

::-webkit-scrollbar-thumb:hover {
  background-color: #0e9e6f;
}
</style>
