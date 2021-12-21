const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

function Produtos() {
  return (
    <>
    {produtos.map( ({nome, propriedades}) => 
    <div key={nome}>
      <h1>{nome}</h1>
      <ul>
        {propriedades.map((item) => <li>{item}</li>)}
      </ul>
    </div> )}
    </>
  );
}

export default Produtos;