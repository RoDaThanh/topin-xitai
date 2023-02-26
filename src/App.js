
import ProductPage from './pages/ProductPage';
import Home from './pages/Home';
import {    createBrowserRouter,    RouterProvider,  } from "react-router-dom";
import ProductList from './pages/ProductList';

  const router = createBrowserRouter([
    {
      path: "/",
      
      element: <Home/>,
    },
    {
      path: "/home",
      
      element: <Home/>,
    },
    {
        path: "/products/:categoryName/:categoryId",
        element: <ProductList/>,
        
      },
      {
        path:"/product/:id",
        element: <ProductPage/>,
      },
  ]);

const App = () => {
    return <RouterProvider router={router} />
}

export default App