import { appRoute } from './modules/appRoute';
import { authRoute } from './modules/authRoute';

const useRoutes = () => [
  {
    path: '/',
    redirect: '/auth',
  },
  appRoute,
  authRoute,
];

export { useRoutes };
