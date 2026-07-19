import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import DjangoHerokuGuide from '../components/guides/django-on-heroku/index';
import Home from '../components/home/index';
import NotFound from '../components/notfound/not-found';
import Modules from '../components/academics/modules/modules';
import Ta from '../components/academics/ta/ta';
import UltimateTictactoe from '../components/projects/ultimate-tictactoe/ultimate-tictactoe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'guide/',
        children: [
          {
            path: 'deploy-django-on-heroku',
            element: <DjangoHerokuGuide />,
          },
        ],
      },
      {
        path: 'project/',
        children: [
          {
            path: 'ultimate-tictactoe',
            element: <UltimateTictactoe />,
          },
        ],
      },
      {
        path: 'academics/',
        children: [
          {
            path: 'modules',
            element: <Modules />,
          },
          {
            path: 'ta',
            element: <Ta />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const AppRouterProvider = (): JSX.Element => <RouterProvider router={router} />;

export default AppRouterProvider;
