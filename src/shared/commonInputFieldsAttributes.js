const fullname = {
  type: 'text',
  name: 'fullname',
  placeholder: 'Ada Lovelace',
  minLength: 3,
  maxLength: 35,
  required: true,
};

const username = {
  ...fullname,
  placeholder: 'ada_lovelace 201',
  name: 'username',
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
  required: true,
};

const confirmPassword = {
  ...password,
  name: 'confirm_password'
};

export default {
  fullname,
  username,
  email,
  password,
  confirmPassword,
};
