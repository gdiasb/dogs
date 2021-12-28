function Description({data}){
  return(
    <div>
      <img src={data.fotos[0].src} alt={data.fotos[0].alt} />
      <h1>{data.nome}</h1>
      <p>Preço: R${data.preco}</p>
    </div>
  )
}

export default Description;