const fullname = {
  type: 'text',
  name: 'fullname',
  placeholder: 'Ada Lovelace',
  minLength: 3,
  maxLength: 35,
  required: true,
  pattern: '[a-zA-ZÀ-ÿ ]+',
};

const username = {
  ...fullname,
  placeholder: 'ada_lovelace_201',
  name: 'username',
  pattern: '[a-zA-Z0-9_]+',
};

const email = {
  type: 'email',
  name: 'email',
  placeholder: 'adalovelace201@gmail.com',
  minLength: 3,
  required: true,
};

const password = {
  type: 'password',
  name: 'password',
  placeholder: '********',
  minLength: 8,
  maxLength: 35,
  pattern: '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\\W).*$',
  required: true,
};

const confirmPassword = {
  ...password,
  name: 'confirmPassword'
};

export default {
  fullname,
  username,
  email,
  password,
  confirmPassword,
};
