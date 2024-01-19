import Newsletter from "../components/Footer/Newsletter";

import icoFacebook from "../assets/img/footer/ico-facebook.svg";
import icoLinkedin from "../assets/img/footer/ico-linkedin.svg";
import icoInstagram from "../assets/img/footer/ico-instagram.svg";
import icoYoutube from "../assets/img/footer/ico-youtube.svg";
import icoVisa from "../assets/img/footer/ico-visa.svg";
import icoMastercard from "../assets/img/footer/ico-mastercard.svg";
import logoMaeztraFooter from "../assets/img/footer/logo-maeztra.png";
import logoVtex from "../assets/img/footer/logo-vtex.png";

function Footer() {
  return (
    <>
      <Newsletter />
      <footer className="footerMenuContainer">
        <div className="footerMenuRow">
          <div className="footerMenuCol">
            <a href="/" className="footerMenuTitle">
              Informações
            </a>
            <ul>
              <li>
                <a href="/">Quem Somos</a>
              </li>
              <li>
                <a href="/">Prazo de Envio</a>
              </li>
              <li>
                <a href="/">Trocas e Devoluções</a>
              </li>
              <li>
                <a href="/">Promoções e Cupons</a>
              </li>
            </ul>
          </div>
          <div className="footerMenuCol">
            <a href="/" className="footerMenuTitle">
              Minha Conta
            </a>
            <ul>
              <li>
                <a href="/">Minha Conta</a>
              </li>
              <li>
                <a href="/">Meus Pedidos</a>
              </li>
              <li>
                <a href="/">Cadastre-se</a>
              </li>
            </ul>
          </div>
          <div className="footerMenuCol">
            <a href="/" className="footerMenuTitle">
              Onde nos Encontrar
            </a>
            <ul>
              <li>
                <a href="/">Lojas</a>
              </li>
              <li>
                <a href="/">Endereço</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="footerSobreContainer">
        <div className="footerSobreRow">
          <div className="footerSobreCol">
            <a href="/">
              <img src={icoFacebook} alt="Ícone Facebook" />
            </a>
            <a href="/">
              <img src={icoLinkedin} alt="Ícone Linkedin" />
            </a>
            <a href="/">
              <img src={icoInstagram} alt="Ícone Instagram" />
            </a>
            <a href="/">
              <img src={icoYoutube} alt="Ícone Youtube" />
            </a>
          </div>
          <div className="footerSobreCol">
            <img src={icoVisa} alt="Ícone Visa" />
            <img src={icoMastercard} alt="Ícone MasterCard" />
            <img src={icoVisa} alt="Ícone Visa" />
            <img src={icoMastercard} alt="Ícone MasterCard" />
          </div>
          <div className="footerSobreCol">
            <div className="footerSobreMarcas">
              <p>Powered by</p>
              <a href="/">
                <img src={logoVtex} alt="Logo Vtex" />
              </a>
            </div>
            <div className="footerSobreMarcas">
              <p>Developed by</p>
              <a href="/">
                <img src={logoMaeztraFooter} alt="Logo Maeztra" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
