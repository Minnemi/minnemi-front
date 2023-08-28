import { useAppStore } from '@/stores/appStore';
import { createRoute } from './createRoute';
import { pinia } from '@/stores/';

const appStore = useAppStore(pinia);

const verifyIsAuthenticated = (to, from, next) => {
  appStore.isLogged ? next({ path: '/app' }) : next();
};

const resetRoute = createRoute(
  '/auth/reset-pass',
  import('@views/auth/ResetView.vue'),
  'auth',
);

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
  import('@components/layouts/AuthLayout.vue'),
  'default',
  {
    children: [resetRoute, recoverRoute, registerRoute, signRoute],
    redirect: '/auth/sign-in',
    beforeEnter: verifyIsAuthenticated,
  },
);

export { authRoute };
