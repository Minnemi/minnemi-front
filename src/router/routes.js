import { appRoute } from './modules/appRoute';
import { loginRoute } from './modules/loginRoute';

const useRoutes = () => [
  {
    path: '/',
    redirect: '/login',
  },
  appRoute,
  loginRoute,
];

export { useRoutes };
