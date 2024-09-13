import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import naive from 'naive-ui';
import { createClient } from '@supabase/supabase-js';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// Acessando variáveis de ambiente
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseUrl = 'https://rwecgwqyuxwprxisebwn.supabase.co/';
// const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3ZWNnd3F5dXh3cHJ4aXNlYnduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYxNzAxNjQsImV4cCI6MjA0MTc0NjE2NH0.lVVlIQX1QZZ1JWJPmYk9YvM31DT9b1vfUasANd6fT9k';

// Configurando o cliente Supabase com variáveis de ambiente
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(naive);

app.mount('#app');
