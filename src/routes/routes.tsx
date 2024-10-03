// src/routes/routes.tsx
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import PLP from '../pages/PLP';
import Cart from "../pages/Cart";

const router =createBrowserRouter(
[
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/PLP/:subcategory',
    element: <PLP />,
  },
    {
    path: '/cart',  
    element: <Cart />, 
  },
],
);


export const AppRoutes = () => {
  return <RouterProvider router={router} />;
}

export default AppRoutes;

