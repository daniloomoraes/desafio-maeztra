import TipBar from "../components/Header/TipBar";
import ModalNewslleter from "../components/Header/ModalNewslleter";
import Menu from "../components/Header/Menu";

import icoMenuMobile from "../assets/img/header/ico-menu.svg";
import logoMaeztra from "../assets/img/header/logo-maeztra.png";
import icoBusca from "../assets/img/header/ico-busca.svg";
import icoCarrinhoMobile from "../assets/img/header/ico-carrinho-mobile.svg";
import icoUsuario from "../assets/img/header/ico-usuario.svg";
import icoWishilist from "../assets/img/header/ico-wishilist.svg";
import icoCarrinho from "../assets/img/header/ico-carrinho.svg";

function Header() {
  return (
    <>
      <ModalNewslleter />
      <TipBar />
      <header className="headerContainer">
        <div className="headerRow">
          <div className="headerLogoArea">
            <div className="headerMenuMobile">
              <img src={icoMenuMobile} alt="Ícone menu Mobile" />
            </div>
            <img src={logoMaeztra} alt="Logo Maeztra" className="headerMenuLogo"/>
          </div>
          <div className="headerBuscaDesktop">
            <input placeholder="O Que Você Busca?" />
            <button>Buscar</button>
          </div>
          <div className="headerLinksMobile">
            <img src={icoBusca} alt="Ícone busca Mobile" />
            <img src={icoCarrinhoMobile} alt="Ícone carrinho Mobile" />
          </div>
          <div className="headerLinksDesktop">
            <a href="/">
              <img src={icoUsuario} alt="Ícone minha conta Mobile" />
              Minha Conta
            </a>
            <a href="/">
              <img src={icoWishilist} alt="Ícone minha conta Mobile" />
              Minha Conta
            </a>
            <a href="/">
              <img src={icoCarrinho} alt="Ícone meu carrinho Mobile" />
              Meu Carrinho
            </a>
          </div>
        </div>
      </header>
      <Menu />
    </>
  );
}

export default Header;
