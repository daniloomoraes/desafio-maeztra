import icoNovidades from "../../assets/img/header/ico-novidades.svg";

function Menu() {
  return (
    <div className="headerMenuDesktop">
      <ul>
        <li>
          <a href="/" className="headerMenuDesktopNovidades">
            <img src={icoNovidades} alt="Ícone novidades Mobile" />
            Novidades
          </a>
        </li>
        <li>
          <a href="/">Vestidos</a>
        </li>
        <li>
          <a href="/">Roupas</a>
        </li>
        <li>
          <a href="/">Sapatos</a>
        </li>
        <li>
          <a href="/">Lingerie</a>
        </li>
        <li>
          <a href="/">Acessórios</a>
        </li>
        <li>
          <a href="/">OUTLET</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
