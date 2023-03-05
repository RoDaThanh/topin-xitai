
import ProductPage from './pages/ProductPage';
import Home from './pages/Home';
import {    createBrowserRouter,    RouterProvider,  } from "react-router-dom";
import ProductList from './pages/ProductList';
import Login from './pages/Login';
import Register from './pages/Register';
import CustomerPage from './pages/CustomerPage';

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
      {
        path:"/login",
        element: <Login/>,
      },
      {
        path:"/register",
        element: <Register/>,
      },
      {
        path:"/customer",
        element: <CustomerPage/>,
      },
  ]);

const App = () => {
    return <RouterProvider router={router} />
    
}

export default App