const patternsDescription = {
  fullname: 'caracteres minúsculos, maiúsculos e letras com acentos',
  username:
    'caracteres minúsculos, maiúsculos e números, use "_" ao invés de espaço em branco " "',
  email: 'um formato de e-mail válido (ex: email@exaple.com)',
  password:
    'caracteres minúsculos, maiúsculos, números e símbolos com no mínimo 8 caracteres',
};

const fullname = {
  type: 'text',
  name: 'fullname',
  placeholder: 'Ada Lovelace',
  minLength: 3,
  maxLength: 35,
  required: true,
  pattern: '[a-zA-ZÀ-ÿ ]+',
  'data-accepted-chars': patternsDescription.fullname,
};

const username = {
  ...fullname,
  placeholder: 'ada_lovelace_201',
  name: 'username',
  pattern: '[a-zA-Z0-9_]+',
  'data-accepted-chars': patternsDescription.username,
};

const fontSize = {
  type: 'number',
  name: 'font_size',
  value: '16',
  minLength: 0,
  maxLength: 25,
  required: true,
};

const letterTitle = {
  type: 'text',
  name: 'letter_title',
  placeholder: 'Titulo',
  minLength: 3,
  maxLength: 35,
  required: true,
  pattern: '[a-zA-ZÀ-ÿ ]+',
  'data-accepted-chars': patternsDescription.fullname,
};

const email = {
  type: 'email',
  name: 'email',
  placeholder: 'adalovelace201@gmail.com',
  minLength: 3,
  required: true,
  'data-accepted-chars': patternsDescription.email,
};

const password = {
  type: 'password',
  name: 'password',
  placeholder: '********',
  minLength: 8,
  maxLength: 35,
  pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).*$',
  required: true,
  'data-accepted-chars': patternsDescription.password,
};

const confirmPassword = {
  ...password,
  name: 'confirm_password',
};

export default {
  fullname,
  username,
  email,
  password,
  confirmPassword,
  fontSize,
  letterTitle,
};
