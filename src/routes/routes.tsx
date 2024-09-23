// src/routes/routes.tsx
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import PLP from '../pages/PLP';
const router =createBrowserRouter(
[
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/PLP/:subcategory',
    element: <PLP />,
  }
],
{ basename: '/WEB-FE-HTML-CSS-PRJ2-WOBBEGONG' }
);


export const AppRoutes = () => {
  return <RouterProvider router={router} />;
}

export default AppRoutes;

