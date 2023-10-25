import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import DjangoHerokuGuide from '../components/guides/django-on-heroku/index';
import Home from '../components/home/index';
import MatchMiner from '../components/projects/matchminer';
import NotFound from '../components/notfound/not-found';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'guide/',
                children: [
                    {
                    path: 'deploy-django-on-heroku',
                    element: <DjangoHerokuGuide />
                    }
                ]
            },
            {
                path: 'project/',
                children: [
                    {
                    path: 'matchminer',
                    element: <MatchMiner />
                    }
                ]
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    }
]);

const AppRouterProvider = (): JSX.Element => <RouterProvider router={router} />

export default AppRouterProvider;
