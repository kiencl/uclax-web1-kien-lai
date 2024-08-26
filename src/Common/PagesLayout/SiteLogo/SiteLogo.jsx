import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./js-logo.png";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="JS Frameworks" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 20px;

    img {
        width: 100%;
        height: auto;
    }
`;
