import React from 'react';
import './styles.css';

function App() {
  const [data, setData] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  let active = false;

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  function handleClick(event) {
    active = !active;
    setSelectedProduct(
      data.find((item) => item.id === event.target.getAttribute('produto-id')),
    );
  }

  return (
    <div className="grid">
      <div className="grid_left_column">
        {data.map((produto) => (
          <div className="grid_min_card" key={produto.id}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            <button produto-id={produto.id} onClick={handleClick}>
              {produto.nome}
            </button>
          </div>
        ))}
      </div>
      {/* <div className="grid_right_column">{!active && <h1>{selectedProduct.nome}</h1>}</div> */}
    </div>
  );
}

export default App;
