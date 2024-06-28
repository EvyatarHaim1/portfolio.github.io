import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux'
import styled from 'styled-components';

function Footer() {

    const darkmode = useSelector((state) => state.setting.darkmode);
    const { t } = useTranslation();

    return (
        <Div style={{ backgroundColor: darkmode ? '#212121' : '#A79344' }}>
            <p style={{ color: darkmode && 'white' }}>{t("footer")}</p>
        </Div>
    )
}

export default Footer;

const Div = styled.div`
padding: 20px;
height: 40px;
bottom: 0;
text-align: center;
z-index: 100;
p{
    padding: 5px;
    font-size: 16px;
    font-weight: 600;
}
`
