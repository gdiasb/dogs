import './styles.css';
import React from 'react';
import Product from './Product';

export default function App() {
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    const favoriteProduct = localStorage.getItem('product');

    if (favoriteProduct !== null) {
      setProduct(favoriteProduct);
    }
  }, []);

  React.useEffect(() => {
    if (product !== null) {
      localStorage.setItem('product', product);
    }
  }, [product]);

  function handleClick({ target }) {
    setProduct(target.innerText);
  }

  return (
    <div className="App">
      <div className="grid">
        <div className="grid_min_card">
          <button onClick={handleClick}>Smartphone</button>
        </div>

        <div className="grid_max_card">
          <Product product={product} />
        </div>

        <div className="grid_min_card">
          <button onClick={handleClick}>Tablet</button>
        </div>

        <div className="grid_min_card">
          <button onClick={handleClick}>Notebook</button>
        </div>
      </div>
    </div>
  );
}
