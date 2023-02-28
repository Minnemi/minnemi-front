import { pinia } from '../../stores';
import { useAppStore } from '../../stores/appStore';
import { createRoute } from './createRoute';

const appStore = useAppStore(pinia);

const verifyIsNotAuthenticated = (to, from, next) => {
  !appStore.isLogged ? next({ path: '/login' }) : next();
};

const appRoute = createRoute(
  '/app',
  import('../../views/macro/AppView.vue'),
  'app',
  {
    beforeEnter: verifyIsNotAuthenticated,
  },
);

export { appRoute };
