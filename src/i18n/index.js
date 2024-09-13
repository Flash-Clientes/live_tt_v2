import { createI18n } from 'vue-i18n';

// Defina suas mensagens de tradução aqui
const messages = {
  en: {
    menu: {
      tasks: 'Tasks',
      actors: 'Actors',
      integrations: 'Integrations',
      files: 'Files',
      products: 'Products Management',
      settings: 'Settings',
    },
    pages: {
      tasks: 'Tasks Page Content 1',
      actors: 'Actors Page Content',
      integrations: 'Integrations Page Content',
      products: 'Products Page Content',
      settings: 'Settings Page Content',
      files: 'Files Page Content',
    },
    auth: {
      title: 'Authentication',
      login: 'Login',
      signup: 'Sign Up',
      reset_password: 'Reset Password',
      email: 'Email',
      password: 'Password',
      email_placeholder: 'Enter your email',
      password_placeholder: 'Enter your password',
      forgot_password: 'Forgot your password?',
      login_success: 'Login successful!',
      signup_success: 'Sign-up successful! Check your email for confirmation.',
      reset_success: 'Password reset email sent! Check your inbox.',
      login_error: 'Error during login: {message}',
      signup_error: 'Error during sign-up: {message}',
      reset_error: 'Error during password reset: {message}',
    },
    notfound: {
      title: 'Page Not Found',
      description: 'Sorry, the page you are looking for does not exist.',
      go_home: 'Go Back Home',
    },
  },
  pt: {
    menu: {
      tasks: 'Tarefas',
      actors: 'Atores',
      integrations: 'Integrações',
      files: 'Arquivos',
      products: 'Gerenciamento de Produtos',
      settings: 'Configurações',
    },
    pages: {
      tasks: 'Conteúdo da Página de Tarefas',
      actors: 'Conteúdo da Página de Atores',
      integrations: 'Conteúdo da Página de Integrações',
      products: 'Conteúdo da Página de Produtos',
      settings: 'Conteúdo da Página de Configurações',
      files: 'Conteúdo da Página de Arquivos',
    },
    auth: {
      title: 'Autenticação',
      login: 'Entrar',
      signup: 'Cadastrar',
      reset_password: 'Redefinir Senha',
      email: 'Email',
      password: 'Senha',
      email_placeholder: 'Digite seu email',
      password_placeholder: 'Digite sua senha',
      forgot_password: 'Esqueceu sua senha?',
      login_success: 'Login realizado com sucesso!',
      signup_success:
        'Cadastro realizado com sucesso! Verifique seu email para confirmar.',
      reset_success:
        'Email de redefinição de senha enviado! Verifique sua caixa de entrada.',
      login_error: 'Erro ao fazer login: {message}',
      signup_error: 'Erro ao se cadastrar: {message}',
      reset_error: 'Erro ao redefinir a senha: {message}',
    },
    notfound: {
      title: 'Página Não Encontrada',
      description: 'Desculpe, a página que você está procurando não existe.',
      go_home: 'Voltar para a Página Inicial',
    },
  },
};

// Crie a instância do i18n com o modo legado desativado
const i18n = createI18n({
  legacy: false, // Desative o modo legado para usar a Composition API
  locale: navigator.language.split('-')[0], // Idioma padrão
  fallbackLocale: 'pt', // Idioma de fallback
  messages, // Mensagens de tradução
});

export default i18n;
