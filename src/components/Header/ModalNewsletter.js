import React, { useState } from "react";

import bannerNewsletter from "../../assets/img/newsletter/banner-news.png";
import icoNewsletter from "../../assets/img/newsletter/ico-newsletter.png";
import icoButtonNewsletter from "../../assets/img/newsletter/ico-button-newsletter.png";

function ModalNewsletter() {
  const [modalVisible, setModalVisible] = useState(true);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <div style={{ display: modalVisible ? "block" : "none" }}>
      <div className="modalNewsletterBackground">
        <div className="modalNewsletterContainer">
          <button
            className="modalNewsletterButtonClose"
            onClick={handleCloseModal}
          >
            FECHAR
          </button>
          <div className="modalNewsletterCol1">
            <img src={bannerNewsletter} alt="Banner Newsletter" />
          </div>
          <div className="modalNewsletterCol2">
            <img src={icoNewsletter} alt="Ícone newsletter" />
            <p className="modalNewsletterTitle">Bem Vindo à MAEZTRA</p>
            <p className="modalNewsletterSubTitle">Receba em Primeira mão</p>
            <p className="modalNewsletterSubTitleBold">desconto e ofertas exclusivas</p>
            <input placeholder="Digite seu e-mail" />
            <button>
              Enviar{" "}
              <img src={icoButtonNewsletter} alt="Ícone botão newsletter" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalNewsletter;
