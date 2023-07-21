export const pt_BR = {
  formsLabels: {
    fullname: 'Nome completo',
    username: 'Nome de usuário',
    email: 'E-mail',
    password: 'Senha',
    confirmPassword: 'Confirmar senha',
  },
  errors: {
    forms:  {
      requiredField: 'Este campo é obrigatório ser preenchido.',
      fullname: {
        length: {
          min: 'Este campo deve conter no mínimo 3 caracteres.',
          max: 'Este campo deve conter no máximo 35 caracteres.',
        },
        pattern: 'Este campo deve conter caracteres minúsculos, maiúsculos e letras com acentos',
      },
      username: {
        length: {
          min: 'Este campo deve conter no mínimo 3 caracteres.',
          max: 'Este campo deve conter no máximo 35 caracteres.',
        },
        pattern: 'Este campo deve conter caracteres minúsculos, maiúsculos e números, use "_" ao invés de espaço em branco " "',
      },
      email: {
        length: {
          min: 'Este campo deve conter no mínimo 3 caracteres.',
        },
        pattern: 'Este campo deve conter um formato de e-mail válido.',
      },
      password: {
        length: {
          min: 'Este campo deve conter no mínimo 8 caracteres.',
        },
        pattern: 'Este campo deve conter caracteres minúsculos, maiúsculos, números e símbolos com no mínimo 8 caracteres',
      },
      confirmPassword: {
        length: {
          min: 'Este campo deve conter no mínimo 8 caracteres.',
        },
        pattern: 'Este campo deve conter caracteres minúsculos, maiúsculos, números e símbolos com no mínimo 8 caracteres',
        equals: 'Este campo deve conter o mesmo valor do campo Senha.',
      },
    },
  },
  resetPasswordPage: {
    title: 'Crie uma nova senha',
    description: 'Digite uma nova senha e volte a tela de acesso',
    button: {
      submit: 'Alterar',
    },
    redirect: {
      login: {
        first: 'Lembrou sua senha?',
        last: 'Acessar conta',
      },
    },
    errorModal: {
      title: 'Erro ao tentar resetar senha!',
      close: {
        now: 'Fechar agora',
        in: 'Fechar em',
      },
    },
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
