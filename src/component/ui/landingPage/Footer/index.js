import React from "react";
import AsholaLogo from "../../../../assets/img/ashoka_logo.png";
import Facebook from "../../../../assets/img/facebook.svg";
import Twitter from "../../../../assets/img/twitter.svg";
import Instagram from "../../../../assets/img/instagram.svg";
import Linkedin from "../../../../assets/img/linkedin.svg";
import {
  WrapperFooter,
  WrapperMainSection,
  WrapperSection,
  Content,
  SocialNetworks,
} from "./styled";

const Footer = () => {
  //go tab in this page
  const goTab = (url) => () => {
    window.location.href = url;
  };

  return (
    <WrapperFooter>
      <WrapperMainSection>
        <Content>
          <p>#MillonesdeAgentesdeCambio es una iniciativa de Ashoka</p>
          <img src={AsholaLogo} alt="Ashoka logo" />
        </Content>
        <SocialNetworks>
          <img
            onClick={goTab("https://www.facebook.com/AshokaMX")}
            src={Facebook}
            alt="facebook"
          />
          <img
            onClick={goTab("https://twitter.com/ashoka_mcc")}
            src={Twitter}
            alt="twitter"
          />
          <img
            onClick={goTab("https://www.instagram.com/ashoka_mcc/")}
            src={Instagram}
            alt="instagram"
          />
          <img
            onClick={goTab(
              "https://www.linkedin.com/company/ashoka-m%C3%A9xico-centroam%C3%A9rica-y-el-caribe/"
            )}
            src={Linkedin}
            alt="Linkedin"
          />
        </SocialNetworks>
        <Content>
          <h3>ACERCA DE</h3>
          <ul>
            <li
              onClick={goTab(
                "http://millonesdeagentesdecambio.org/wp-content/uploads/2019/08/guiadecompromisos.pdf"
              )}
            >
              Guía de compromisos
            </li>
            <li onClick={goTab("https://www.tfaforms.com/4821068")}>
              Sube tu compromiso
            </li>
            <li
              onClick={goTab(
                "https://millonesdeagentesdecambio.org/compromisos/#Sesiondedisenodecompromisos"
              )}
            >
              Sesión de compromisos
            </li>
            <li
              onClick={goTab(
                "https://millonesdeagentesdecambio.org/compromisos/#Sesiondedisenodecompromisos"
              )}
            >
              Comunidad de Agentes de Cambio
            </li>
          </ul>
        </Content>
        <Content>
          <h3>ÚNETE</h3>
          <ul>
            <li
              onClick={goTab(
                "https://millonesdeagentesdecambio.org/compromisos/#Ejemplosdecompromisos"
              )}
            >
              Ejemplos de compromisos
            </li>
            <li
              onClick={goTab(
                "https://millonesdeagentesdecambio.org/compromisos/#Anatomiadeuncompromiso"
              )}
            >
              Anatomía de un compromiso
            </li>
            <li
              onClick={goTab(
                "https://millonesdeagentesdecambio.org/compromisos/#criteriosdecompromiso"
              )}
            >
              Ciclo de tiempo del movimiento
            </li>
            <li
              onClick={goTab(
                "https://millonesdeagentesdecambio.org/compromisos/#criteriosdecompromiso"
              )}
            >
              Equipo Millones de Agentes de Cambio
            </li>
            <li
              onClick={goTab(
                "https://millonesdeagentesdecambio.org/compromisos/#Registrodelboletindeashoka"
              )}
            >
              Registro al boletín de Ashoka
            </li>
            <li
              onClick={goTab(
                "https://millonesdeagentesdecambio.org/compromisos/#faq"
              )}
            >
              Preguntas Frecuentes
            </li>
          </ul>
        </Content>
      </WrapperMainSection>
      <WrapperSection>
        <p onClick={goTab("https://www.ashoka.org/es-mx")}>
          {" "}
          &copy; 2019 Ashoka.org | Política de privacidad | Contacto
        </p>
      </WrapperSection>
    </WrapperFooter>
  );
};

export default Footer;
