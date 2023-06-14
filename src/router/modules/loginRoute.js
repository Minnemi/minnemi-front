import { useAppStore } from '@/stores/appStore';
import { createRoute } from './createRoute';
import { pinia } from '@/stores/';

const appStore = useAppStore(pinia);

const verifyIsAuthenticated = (to, from, next) => {
  appStore.isLogged ? next({ path: '/app' }) : next();
};

const registerRoute = createRoute(
  '/login/register',
  import('@views/login/RegisterView.vue'),
  'login',
);

const signRoute = createRoute(
  '/login/sign-in',
  import('@views/login/SignView.vue'),
  'login',
);

const loginRoute = createRoute(
  '/login',
  import('@views/login/LoginView.vue'),
  'app',
  {
    children: [registerRoute, signRoute],
    redirect: '/auth/sign-in',
    beforeEnter: verifyIsAuthenticated,
  },
);

export { loginRoute };
