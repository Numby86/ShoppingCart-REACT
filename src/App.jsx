import React, { useState } from 'react';
import productsData from './mocks/products.json'
import { Products } from "./components/Products";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { IS_DEVELOPMENT } from './config.js';
import { useFilters } from './hooks/useFilters';

function App() {
  const { filterProducts } = useFilters()
  const { products: initialProducts } = productsData;
  const [products] = useState(initialProducts);

  const filteredProducts = filterProducts(products)
  
  return (
    <div className="App">
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </div>
  );
}

export default App;