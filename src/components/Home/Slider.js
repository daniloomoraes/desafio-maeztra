import bannerHomeMobile from "../../assets/img/home/banner-home-mobile.png";
import bannerHome from "../../assets/img/home/banner-home.png";
import icoAnterior from "../../assets/img/home/ico-anterior.svg";
import icoProximo from "../../assets/img/home/ico-proximo.svg";

function Slider() {
  return (
    <div className="bannerSlider">
      <div className="bannerSliderImagens">
        <img src={bannerHomeMobile} className="bannerSliderImagemMobile" alt="Banner Mobile" />
        <img src={bannerHome} className="bannerSliderImagemDesktop" alt="Banner Desktop" />
      </div>
      <div className="bannerSliderArrows">
        <img src={icoAnterior} className="bannerSliderArrowsAnterior" alt="Ícone anterior" />
        <img src={icoProximo} className="bannerSliderArrowsProximo" alt="Ícone próximo" />
      </div>
      <div className="bannerSliderDots">
        <ul>
          <li>
            <a href="/" className="bannerSliderDotsActive">1</a>
          </li>
          <li>
            <a href="/">2</a>
          </li>
          <li>
            <a href="/">3</a>
          </li>
          <li>
            <a href="/">4</a>
          </li>
          <li>
            <a href="/">5</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Slider;
