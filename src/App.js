import './App.css';
import FullCart from './pages/FullCart';
import Home from './pages/HomePage/Home';
import Navbar from './components/Navbar/Navbar';
import ProductPage from './pages/ProductPages/ProductPage';
import ProductView from './pages/SingleProductPage/SingleProductPage';
import Footer from './components/Footer';
import PlantTypes from './pages/ProductPages/PlantTypes';
import EasyPlants from './pages/ProductPages/EasyPlants';
import React from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';
import { store } from './redux/store';
import { Provider, useSelector } from 'react-redux';
import Success from './pages/Success';
import Checkout from './pages/Checkout';
import SearchResults from './pages/ProductPages/SearchResults';

function App() {
  //const user = useSelector((state) => state.user.currentUser);
  return (
    <Provider store = {store}>
      <Navbar />
    <Routes>
      <Route path = '/' element = {<Home />}/>
      <Route path = '/all' element = {<ProductPage />}/>
      <Route path = '/type/:type' element = {<PlantTypes />} />
      <Route path="/searchResults/:id" element={<SearchResults />} />
      <Route path = '/easy' element = {<EasyPlants />} />
      <Route path = '/products/:id' element = {<ProductView />} />
      <Route path = '/cart' element = {<FullCart />} />
      <Route path = '/checkout' element = {<Checkout />} />
      <Route path = '/success' element = {<Success />}/>
    </Routes>
    <Footer />
    </Provider>
  );
}

export default App;
