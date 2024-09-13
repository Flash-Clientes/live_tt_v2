<template>
  <n-layout-sider bordered collapse-mode="width" :collapsed-width="64">
    <div class="logo-container">
      <img
        src="https://img.icons8.com/?size=100&id=vu0TSqxoxAXQ&format=png&color=000000"
        alt="Logo"
        class="logo"
      />
    </div>
    <n-menu
      :options="menuOptions"
      v-model:value="selectedKey"
      @update:value="navigate"
    />
    <n-divider />
    <div class="language-switcher">
      <n-dropdown
        :options="languageOptions"
        trigger="click"
        @select="changeLanguage"
      >
        <n-button>
          <img
            :src="currentFlagUrl"
            class="flag-icon"
            alt="Current Language Flag"
          />
          {{ currentLanguageLabel }}
        </n-button>
      </n-dropdown>
    </div>
    <n-divider />
    <div class="theme-switcher">
      <n-dropdown :options="themeOptions" trigger="click" @select="changeTheme">
        <n-button>
          <i :class="currentThemeIcon"></i> {{ currentThemeLabel }}
        </n-button>
      </n-dropdown>
    </div>
  </n-layout-sider>
</template>

<script setup>
import { h, ref, computed, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { darkTheme } from 'naive-ui';

// Definindo o "emit" para enviar eventos para o componente pai
const emit = defineEmits(['updateTheme']);

const { t, locale } = useI18n();
const router = useRouter();
const selectedKey = ref('/tasks');

// Recebendo a prop 'initialLocale' do App.vue
const props = defineProps({
  initialLocale: {
    type: String,
    required: true,
  },
});

// Configura o idioma inicial do vue-i18n com base na prop recebida
locale.value = props.initialLocale;

// URLs das bandeiras dos idiomas
const languages = {
  en: {
    label: 'English',
    flagUrl: 'https://goodies.icons8.com/web/common/header/flags/us.svg',
  },
  pt: {
    label: 'Português',
    flagUrl: 'https://goodies.icons8.com/web/common/header/flags/br.svg',
  },
};

const languageOptions = Object.keys(languages).map((key) => ({
  label: languages[key].label,
  key,
}));

/**
 * Alterna o idioma quando o usuário seleciona uma opção
 */
function changeLanguage(lang) {
  if (languages[lang]) {
    locale.value = lang;
  } else {
    console.error(`Idioma desconhecido: ${lang}`);
  }
}

/**
 * Retorna a URL da bandeira atual
 */
const currentFlagUrl = computed(() => {
  return languages[locale.value]?.flagUrl || '';
});

/**
 * Retorna o rótulo do idioma atual
 */
const currentLanguageLabel = computed(() => {
  return languages[locale.value]?.label || '';
});

/**
 * Gerenciamento de tema (dark ou light)
 */
const theme = ref(null); // Tema claro por padrão

/**
 * Alterna o tema entre claro e escuro
 */
function changeTheme(themeKey) {
  if (themeKey === 'dark' || themeKey === 'light') {
    theme.value = themeKey === 'dark' ? darkTheme : null;
    emit('updateTheme', themeKey); // Emite o evento para o App.vue
  } else {
    console.error(`Tema desconhecido: ${themeKey}`);
  }
}

/**
 * Retorna o ícone do tema atual
 */
const currentThemeIcon = computed(() =>
  theme.value === darkTheme ? 'icon-moon' : 'icon-sun'
);

/**
 * Retorna o rótulo do tema atual
 */
const currentThemeLabel = computed(() =>
  theme.value === darkTheme ? 'Dark Theme' : 'Light Theme'
);

/**
 * Opções para o dropdown de temas
 */
const themeOptions = [
  {
    label: 'Light Theme',
    key: 'light',
    icon: () => h('i', { class: 'icon-sun' }),
  },
  {
    label: 'Dark Theme',
    key: 'dark',
    icon: () => h('i', { class: 'icon-moon' }),
  },
];

/**
 * Define as opções de menu como reativas
 */
const menuOptions = computed(() => [
  {
    label: t('menu.tasks'),
    key: '/dashboard/tasks',
    icon: () => h('i', { class: 'icon-tasks' }),
  },
  {
    label: t('menu.products'),
    key: '/dashboard/products',
    icon: () => h('i', { class: 'icon-products' }),
  },
]);

/**
 * Navega para a rota selecionada
 */
function navigate(key) {
  if (key) {
    router.push(key);
  } else {
    console.error('Chave de navegação inválida:', key);
  }
}
</script>

<style scoped>
.logo-container {
  padding: 20px;
  text-align: center;
}

.logo {
  max-width: 100%;
  height: auto;
}

.language-switcher,
.theme-switcher {
  margin-top: 20px;
  padding: 10px;
  text-align: center;
}

.flag-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.n-button {
  display: flex;
  align-items: center;
}
</style>
