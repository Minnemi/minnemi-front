export default {
  formsLabels: {
    fullname: 'Nome completo',
    username: 'Nome de usuário',
    email: 'E-mail',
    password: 'Senha',
    confirmPassword: 'Confirmar senha',
  },
  recoverPage: {
    title: 'Esqueceu sua senha?',
    description: 'Insira seu e-mail para receber o link de alteração',
    button: {
      submit: 'Enviar',
    },
    redirect: {
      login: {
        first: 'Lembrou sua senha?',
        last: 'Acessar conta',
      },
    },
    modal: {
      success: {
        title: 'E-mail enviado com sucesso!',
        description: 'E-mail enviado para',
        details: 'Confira sua caixa de entrada e spam',
      },
      error: {
        title: 'E-mail não enviado!',
        description: 'Erro ao tentar enviar um e-mail para',
        details: 'Detalhes',
      },
      close: {
        now: 'Fechar agora',
        in: 'Fechar em',
      },
    },
  },
  loginPage: {
    title: 'Acessar conta',
    description: 'Comece hoje a escrever seu futuro',
    button: {
      submit: 'Acessar conta',
      google: 'Entrar com o Google',
    },
    redirect: {
      recover: {
        first: 'Esqueceu sua senha?',
        last: 'Recuperar conta',
      },
      register: {
        first: 'Ainda não tem uma conta?',
        last: 'Crie uma conta',
      },
    },
    errorModal: {
      title: 'Erro ao tentar acessar conta!',
      close: {
        now: 'Fechar agora',
        in: 'Fechar em',
      },
    },
  },
  registerPage: {
    title: 'Criar nova conta',
    description: 'Comece hoje a escrever seu futuro',
    splitter: 'ou',
    button: {
      submit: 'Criar conta',
      google: 'Entrar com o Google',
    },
    terms: {
      phrase: 'Ao criar uma conta, você concorda com os nossos',
      splitter: 'e',
      use: 'Termos de uso',
      privacy: 'Políticas de privacidade',
    },
    redirect: {
      login: {
        first: 'Já tem uma conta?',
        last: 'Acessar conta',
      },
    },
    errorModal: {
      title: 'Erro ao tentar criar conta!',
      close: {
        now: 'Fechar agora',
        in: 'Fechar em',
      },
    },
  },
};
