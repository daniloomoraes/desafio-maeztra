import Vitrine from "./Vitrine";

import fotoProduto01 from "../../assets/img/produto/produto-1.png";
import corProduto01 from "../../assets/img/produto/produto-1-color.svg";
import fotoProduto02 from "../../assets/img/produto/produto-2.png";
import corProduto02 from "../../assets/img/produto/produto-2-color.svg";

function Produtos() {
  return (
    <div className="homeProduto">
      <h2>As Mais Pedidas</h2>
      <div className="homeProdutoList">
        <ul>
          <li>
            <Vitrine
              name="Faux Suede Mini Skirt"
              price="R$ 500,00"
              description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
              image={fotoProduto01}
              color={corProduto01}
            />
          </li>
          <li>
            <Vitrine
              name="Ruched Rose Print Mini Skirt"
              price="R$ 320,00"
              description="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
              image={fotoProduto02}
              color={corProduto02}
            />
          </li>
          <li>
            <Vitrine
              name="Faux Suede Mini Skirt"
              price="R$ 500,00"
              description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
              image={fotoProduto01}
              color={corProduto01}
            />
          </li>
          <li>
            <Vitrine
              name="Ruched Rose Print Mini Skirt"
              price="R$ 320,00"
              description="A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem."
              image={fotoProduto02}
              color={corProduto02}
            />
          </li>
          <li>
            <Vitrine
              name="Faux Suede Mini Skirt"
              price="R$ 500,00"
              description="A faux suede mini skirt featuring exposed button-front closures and panel seam construction."
              image={fotoProduto01}
              color={corProduto01}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Produtos;
