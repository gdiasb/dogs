import style from './Header.module.css';

function Header() {
  return (
  <div className={style.header}>
    <a href='/'>Home</a>
    <a href='/produtos'>Produtos</a>
  </div>)
}

export default Header;