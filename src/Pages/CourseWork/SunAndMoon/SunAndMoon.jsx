import styled from "styled-components";
import { useState } from "react";

import sunImg from "./images/sun.png";
import moonImg from "./images/moon.png";

// JS LAYER
const SunAndMoon = () => {
    const [imgSrc, imgSrcUpdate] = useState(moonImg);

    const changeToSun = () => {
        imgSrcUpdate(sunImg);
    };
    const changeToMoon = () => {
        imgSrcUpdate(moonImg);
    };

    // HTML LAYER
    return (
        <SunAndMoonStyled>
            <h2>Sun And Moon</h2>
            <img
                src={imgSrc}
                onMouseEnter={changeToSun}
                onMouseLeave={changeToMoon}
            />
        </SunAndMoonStyled>
    );
};

export default SunAndMoon;

// CSS LAYER
const SunAndMoonStyled = styled.div`
    text-align: center;

    h2 {
        font-size: 30px;
        color: teal;
    }
    img {
        display: block;
        margin: 30px auto;
        padding: 20px;
        border: solid 20px teal;
        background-color: #004e4e;
    }
`;
