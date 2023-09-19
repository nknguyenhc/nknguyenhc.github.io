import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DjangoHerokuGuide from './components/guides/django-on-heroku/index';
import Home from './components/home/index';
import MatchMiner from './components/projects/matchminer';
import NotFound from './components/notfound/not-found';

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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
