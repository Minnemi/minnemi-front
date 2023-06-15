import { useAppStore } from '@/stores/appStore';
import { createRoute } from './createRoute';
import { pinia } from '@/stores/';

const appStore = useAppStore(pinia);

const verifyIsAuthenticated = (to, from, next) => {
  appStore.isLogged ? next({ path: '/app' }) : next();
};

const recoverRoute = createRoute(
  '/auth/recover',
  import('@views/auth/RecoverView.vue'),
  'auth',
);

const registerRoute = createRoute(
  '/auth/register',
  import('@views/auth/RegisterView.vue'),
  'auth',
);

const signRoute = createRoute(
  '/auth/sign-in',
  import('@views/auth/SignView.vue'),
  'auth',
);

const authRoute = createRoute(
  '/auth',
  import('@views/auth/AuthView.vue'),
  'app',
  {
    children: [recoverRoute, registerRoute, signRoute],
    redirect: '/auth/sign-in',
    beforeEnter: verifyIsAuthenticated,
  },
);

export { authRoute };
