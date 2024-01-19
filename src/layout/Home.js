import Slider from "../components/Home/Slider";
import TipBar from "../components/Home/TipBar";
import Marcas from "../components/Home/Marcas";

import bannerSobre from "../assets/img/home/banner-sobre.png";
import bannerSobreMobile from "../assets/img/home/banner-sobre-mobile.png";

function Home() {
  return (
    <>
      <Slider />
      <TipBar />
      <Marcas />
      <div className="bannerSobreContainer">
        <div className="bannerSobreRow">
          <div className="bannerSobreText">
            <h2>Lorem ipsum </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
              mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
              dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut
              mauris integer. Nibh sagittis in lobortis sed cursus condimentum
              velit pharetra. Amet luctus ut vulputate scelerisque placerat
              consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec
              tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut
              ornare augue eget convallis volutpat aliquet. Sed sed pellentesque
              porttitor phasellus donec condimentum sit sapien.
            </p>
          </div>
          <div className="bannerSobreImagens">
            <img src={bannerSobreMobile} className="bannerSobreImagemMobile" alt="Banner Sobre" />
            <img src={bannerSobre} className="bannerSobreImagemDesktop" alt="Banner Sobre" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
