import React from 'react';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import RouteNotFound from './components/RouteNotFound/RouteNotFound.jsx';
import Layout from './components/Layout/Layout.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />} />
      <Route path='/navbar' element={<Navbar />} />
      <Route path='/footer' element={<Footer />} />
      <Route path='/herosection' element={<HeroSection />} />

      {/* 404 Route Not Found */}
      <Route path='*' element={<RouteNotFound />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <App />
  </StrictMode>,
)
