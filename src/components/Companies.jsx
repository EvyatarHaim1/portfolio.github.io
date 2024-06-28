import React from "react";
import styled from "styled-components";
import coverImage from "../images/img1.png";
import oneSubmit from "../videos/One Submit.mp4";
import GuyAvraham from "../videos/Guy Avraham.mp4";
import Trucknet from "../videos/Trucknet.mp4";
import Wavy from "../videos/Wavy.mp4";
import WeAreTech from "../videos/WeAreTech.mp4";
import Hitome from "../videos/Hitome.mp4";
import poster1 from "../images/companies/onesubmit.png";
import poster2 from "../images/companies/Guy-avraham.png";
import poster3 from "../images/companies/trucknet.png";
import poster4 from "../images/companies/Hitome.png";
import poster5 from "../images/companies/wavy.png";
import poster6 from "../images/companies/wearetech.png";
import { useTranslation } from "react-i18next";

const Companies = () => {
  const { t } = useTranslation();
  return (
    <Div>
      <img src={coverImage} alt="img" />
      <Title>{t("companies.title")}</Title>
      <Box>
        <Details>
          <h2>One-Submit - Frontend Web developement</h2>
        </Details>
        <video controls poster={poster1}>
          <source src={oneSubmit} type="video/mp4" />
        </video>
      </Box>
      <Box>
        <Details>
          <h2>Guy-Avraham - Web development + Cypress Unit Test</h2>
        </Details>
        <video controls poster={poster2}>
          <source src={GuyAvraham} type="video/mp4" />
        </video>
      </Box>
      <Box>
        <Details>
          <h2>Trucknet - Multilingual Web development</h2>
        </Details>
        <video controls poster={poster3}>
          <source src={Trucknet} type="video/mp4" />
        </video>
      </Box>
      <Box>
        <Details>
          <h2>
            Hitome - Multilingual Web development + Dating Mobile app in both
            Stores.
          </h2>
        </Details>
        <video controls poster={poster4}>
          <source src={Hitome} type="video/mp4" />
        </video>
      </Box>
      <Box>
        <Details>
          <h2>Branded - Frontend Mobile developement (React-Native)</h2>
        </Details>
        <Description>Wavy - Cosmetics Mobile app</Description>
        <video controls poster={poster5}>
          <source src={Wavy} type="video/mp4" />
        </video>
        <Description>
          We Are Tech - Working hours registration and management for multipule
          businesses (3 languages supported)
        </Description>
        <video controls poster={poster6}>
          <source src={WeAreTech} type="video/mp4" />
        </video>
      </Box>
    </Div>
  );
};

export default Companies;

const Div = styled.div`
  padding: 40px 0px;
`;

const Title = styled.h1`
  color: white;
`;

const Box = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;
const Details = styled.div`
  margin-bottom: 30px;
  margin-top: 30px;
`;

const Description = styled.h3`
  padding: 20px 0;
`;
