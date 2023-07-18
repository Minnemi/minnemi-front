import { createI18n } from 'vue-i18n';

const config = {
  locale: 'pt_BR',
  fallbackLocale: 'pt_BR',
  messages: {
    pt_BR: (await import('./pt_BR')).default,
  },
};

export default createI18n(config);
