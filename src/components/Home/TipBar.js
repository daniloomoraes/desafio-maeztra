import bannerTipBar01 from "../../assets/img/home/banner-tipbar-01.png";
import bannerTipBar02 from "../../assets/img/home/banner-tipbar-02.png";
import bannerTipBar03 from "../../assets/img/home/banner-tipbar-03.png";
import bannerTipBar04 from "../../assets/img/home/banner-tipbar-04.png";
import bannerTipBar05 from "../../assets/img/home/banner-tipbar-05.png";

function TipBar() {
  return (
    <div className="bannerTipBar">
      <h2>Por que comprar na Maeztra?</h2>
      <div className="bannerTipBarList">
        <ul>
          <li>
            <img src={bannerTipBar01} alt="Banner TipBar" />
          </li>
          <li>
            <img src={bannerTipBar02} alt="Banner TipBar" />
          </li>
          <li>
            <img src={bannerTipBar03} alt="Banner TipBar" />
          </li>
          <li>
            <img src={bannerTipBar04} alt="Banner TipBar" />
          </li>
          <li>
            <img src={bannerTipBar05} alt="Banner TipBar" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TipBar;
