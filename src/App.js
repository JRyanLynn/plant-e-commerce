import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar/Navbar';
import Test from './components/Test';
import FullCart from './pages/FullCart';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Card from './components/ProductCard';
import ProductView from './pages/ProductView';
import Footer from './components/Footer';
import Flower from './pages/ProductPages/Flower';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom'


const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
  path: '/',
  element: <Layout />,
  children: [
    {
      path: '/',
      element: <Home />
    },

    {
      path: '/product/:id',
      element: <ProductPage />
    },

    {
      path: '/flowers',
      element: <Flower />
    },

    {
      path: '/products/:id',
      element: <ProductView />
    },

    {
      path: '/cart',
      element: <FullCart />
    }
  ]
  }
])

function App() {
  return (
    <div>
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
