import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import ImageCarousel from './components/Carousel';
import Services from './components/Services';
import PetsTable from './components/PetsTable';
import Footer from './components/Footer';

const App = () => (
  <div>
    <Header />
    <ImageCarousel />
    <Services />
    <PetsTable />
    <Footer />
  </div>
);

export default App;
