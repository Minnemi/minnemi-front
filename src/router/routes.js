import { appRoute } from "./modules/appRoute";
import { loginRoute } from "./modules/loginRoute";

export const useRoutes = () => [
  {
    path: '/',
    redirect: '/login',
  },
  appRoute,
  loginRoute,
];
