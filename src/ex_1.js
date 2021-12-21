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

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' }
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500'}
  ],
  ativa: false,
};

function App() {
  
  const dados = mario;

  // console.log(dados.compras.filter((dado) => dado.preco.includes('R$')));

  // console.log(dados.compras.map((item) => Number(item.preco.replace('R$ ', ''))));

  const total = dados.compras
  .map((item) => Number(item.preco.replace('R$ ', '')))
  .reduce((a, b) => a+b)

  produtos.map((dado) => Number(dado.preco.replace('R$ ', '')))
  console.log(produtos)


  // console.log(produtos.map((item) => item.cores))
  // console.log(produtosTratados)


  return(
    // {Exercício 1}
    // <div>
    //   <p>Cliente: {dados.cliente}</p>      
    //   <p>Idade: {dados.idade}</p>
    //   <p>Total: R$ {total}</p>
    //   <p>Situação:
    //     <span style={{color: total > 10000 ? 'red' : 'green'}}>  
    //       {dados.ativa ? ' Ativa' : ' Inativa'}
    //     </span>
    //   </p>
    //   <p>{total>10000 && 'Você está gastando demais.'}</p>
    // </div>

    // {Exercício 2}

    <div>
      {produtos
      .map((dado) => 
      <>
      <h1 key={dado.id}>{dado.nome}</h1>
      <p>Preço: {dado.preco}</p>
      <ul>
        {/* <li key={dado.id} style={{background: produtos.map((item) => item.cores)}}>{produtos.map((item) => item.cores)}</li> */}
        {produtos.map((item) => 
        <p></p>)}
      </ul>
      </>
      
      )}
    </div>
  );
}

export default App;
