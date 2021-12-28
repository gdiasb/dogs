import style from './Card.module.css';

function Card({ children, props }) {
  return(
    <div className={style.card}>
      <div className={style.span}>
        {/* <h1>{props.nome}</h1> */}
        {/* <h2>{props.preco}</h2> */}
        {/* <p>{props.descricao}</p> */}
      </div>
      {children}
    </div>
  );
}

export default Card;