import { createI18n } from 'vue-i18n';
import { pt_BR } from './pt_BR';

const config = {
  legacy: false,
  locale: 'pt_BR',
  fallbackLocale: 'pt_BR',
  messages: {
    pt_BR,
  },
};

export default createI18n(config);
