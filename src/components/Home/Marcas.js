import bannerMarcas01 from "../../assets/img/home/logo-parceiro-comma.png";
import bannerMarcas02 from "../../assets/img/home/logo-parceiro-melissa.png";
import bannerMarcas03 from "../../assets/img/home/logo-parceiro-forever.png";
import bannerMarcas04 from "../../assets/img/home/logo-parceiro-zara.png";
import bannerMarcas05 from "../../assets/img/home/logo-parceiro-ann.png";

function Marcas() {
  return (
    <div className="bannerMarcas">
      <h2>Marcas Parceiras</h2>
      <div className="bannerMarcasList">
        <ul>
          <li>
            <img src={bannerMarcas01} alt="Banner Marcas" />
          </li>
          <li>
            <img src={bannerMarcas02} alt="Banner Marcas" />
          </li>
          <li>
            <img src={bannerMarcas03} alt="Banner Marcas" />
          </li>
          <li>
            <img src={bannerMarcas04} alt="Banner Marcas" />
          </li>
          <li>
            <img src={bannerMarcas05} alt="Banner Marcas" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Marcas;
