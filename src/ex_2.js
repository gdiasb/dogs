const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    }
  ];

  function App() {

    const produtosValue = produtos.map( ({ preco }) => 
    Number(preco.replace("R$ ", "")
    ))

    // console.log(produtosValue)

      return (
        <div>
            {produtos
            .filter(({id}) => produtosValue[id-1] > 1500)
            .map( ({id, nome, preco}) => 
            <div key={id}>
                <h1>{nome}</h1>
                <p>Preço: {preco}</p>
                <ul>
                    {produtos.map(
                        ({cores}) =>
                        <li style={{backgroundColor: cores[id-1], color:'white'}} key={cores[id-1]}>
                            {cores[id-1]}
                        </li>
                        )}
                </ul>
            </div>
            )}
        </div>
      );
  }

  export default App