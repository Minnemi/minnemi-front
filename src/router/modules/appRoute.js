import { pinia } from '@/stores';
import { useAppStore } from '@/stores/appStore';
import { createRoute } from './createRoute';

const appStore = useAppStore(pinia);

const verifyIsNotAuthenticated = (to, from, next) => {
  !appStore.isLogged ? next({ path: '/auth' }) : next();
};

const writeLetterRoute = createRoute(
  'write-letter',
  import('@views/macro/WriteLetterView.vue'),
  'app',
);

const appRoute = createRoute(
  '/app',
  import('@components/layouts/AppLayout.vue'),
  'default',

  {
    children: [writeLetterRoute],
    redirect: '/app/write-letter',
    beforeEnter: verifyIsNotAuthenticated,
  },
);

export { appRoute };
