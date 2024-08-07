import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from './pages/NotFound';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import ProductAdd from './pages/ProductAdd';
import Home from './pages/Home';
import ProtectedRoute from './pages/ProtectedRoute';
import ProductAll from './pages/ProductAll';
import OrderRequest from './pages/OrderRequest';
import OrderResult from './pages/OrderResult';
import OrderRecipt from './pages/OrderRecipt';
import OrderDetail from './pages/OrderDetail';
import OrderHandle from './pages/OrderHandle';
import OrderHandleDetail from './pages/OrderHandleDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <ProductAll />
      },
      {
        path: '/products/add',
        element: (
          <ProtectedRoute requireAdmin>
            <ProductAdd />
          </ProtectedRoute>
        )
      },
      {
        path: '/products/:productId',
        element: <ProductDetail />
      },
      {
        path: '/cart',
        element: (
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        )
      },
      {
        path: '/order',
        element: (
          <ProtectedRoute>
            <OrderRequest />
          </ProtectedRoute>
        )
      },
      {
        path: '/order/result',
        element: (
          <ProtectedRoute>
            <OrderResult />
          </ProtectedRoute>
        )
      },
      {
        path: '/order/recipt',
        element: (
          <ProtectedRoute>
            <OrderRecipt />
          </ProtectedRoute>
        )
      },
      {
        path: '/order/:paymentId',
        element: (
          <ProtectedRoute>
            <OrderDetail />
          </ProtectedRoute>
        )
      },
      {
        path: '/order/handle',
        element: (
          <ProtectedRoute requireAdmin>
            <OrderHandle />
          </ProtectedRoute>
        )
      },
      {
        path: '/order/handle/:paymentId',
        element: (
          <ProtectedRoute requireAdmin>
            <OrderHandleDetail />
          </ProtectedRoute>
        )
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <RouterProvider router={router} />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
