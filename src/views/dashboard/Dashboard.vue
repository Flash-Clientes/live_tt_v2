<template>
  <n-config-provider :theme="theme">
    <n-layout has-sider v-if="!hideSidebar">
      <SidebarMenu :initial-locale="locale" @update-theme="updateTheme" />
      <n-layout-content class="main">
        <div class="main-content">  
         <router-view />
        </div>
      </n-layout-content>
    </n-layout>
    <router-view v-else />
    <!-- Exibe o conteúdo sem o sidebar -->
  </n-config-provider>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router'; // Importa o useRoute para acessar as rotas
import SidebarMenu from './components/sidebar-menu/SidebarMenu.vue';
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
.n-layout-scroll-container {
  overflow-y: hidden;
}
.n-config-provider {
  height: 100vh;
  margin: 0;
  padding: 0;
}
.n-layout {
  height: 100%;
  margin: 0;
  padding: 0;
}
.main {
  padding: 1px;
}
.main-content {
  padding: 20px;
  background-color: #fff;
  height: 100%;
}
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #14d085;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #0e9e6f;
}

.button-primary {
  background-color: #14d085;
  transition: background-color 0.3s;
}

.button-primary:hover {
  background-color: #0e9e6f;
}

.button-secondary {
  background-color: #f5f5f5;
  border: 1.5px solid #14d085;
  color: #14d085;
  transition: background-color 0.3s;
}

.button-secondary:hover {
  background-color: #14d085;
  color: #fff;
}

.button-danger {
  background-color: #f44336;
  transition: background-color 0.3s;
}

.button-danger:hover {
  background-color: #d32f2f;
}
</style>