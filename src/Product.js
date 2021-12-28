import React from 'react';

function Product({ product }) {
  
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (product !== null) {
      fetch('https://ranekapi.origamid.dev/json/api/produto/' + product)
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, [product]);

  if (data === null) return null;

  return (
    <div>
      <h1>{data.name}</h1>
    </div>
  );
}

export default Product;
