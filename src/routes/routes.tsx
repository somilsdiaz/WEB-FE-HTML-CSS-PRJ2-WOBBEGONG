import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import PLP from '../pages/PLP';
import Cart from "../pages/Cart";
import PDP from "../pages/PDP";

const router = createBrowserRouter([
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
  {
    path: '/pdp/pdp/:id',  // for Plplista products
    element: <PDP />,
  },
  {
    path: '/pdp/fhp/:id',  // for ProductsMP products
    element: <PDP />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
}

export default AppRoutes;