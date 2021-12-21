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

  console.log(luana);

  // console.log(dados.compras.filter((dado) => dado.preco.includes('R$')));

  // console.log(dados.compras.map((item) => Number(item.preco.replace('R$ ', ''))));

  const total = dados.compras
  .map((item) => Number(item.preco.replace('R$ ', '')))
  .reduce((a, b) => a+b)

  // console.log(produtos.map((item) => item.cores))
  // console.log(produtosTratados)

  return(
    // {Exercício 1}
    <div>
      <p>Cliente: {dados.cliente}</p>      
      <p>Idade: {dados.idade}</p>
      <p>Total: R$ {total}</p>
      <p>Situação:
        <span style={{color: total > 10000 ? 'red' : 'green'}}>  
          {dados.ativa ? ' Ativa' : ' Inativa'}
        </span>
      </p>
      <p>{total>10000 && 'Você está gastando demais.'}</p>
    </div>
  );
}

export default App;
