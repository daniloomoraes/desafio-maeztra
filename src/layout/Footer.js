import Newsletter from "../components/Footer/Newsletter";

function Footer() {
  return (
    <>
      <Newsletter />
      <div className="footerMenuContainer">
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
      </div>
    </>
  );
}

export default Footer;
