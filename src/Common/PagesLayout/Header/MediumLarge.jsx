import styled from "styled-components";

/* Components ---------------------------*/
import Inset from "../Inset.jsx";
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import MainMenu from "./MainMenu.jsx";

const MediumLarge = () => {
    return (
        <MediumLargeStyled className="MediumLarge">
            <Inset>
                <div className="inset">
                    <div className="logo">
                        <SiteLogo />
                    </div>
                    <div className="menus">
                        <MainMenu />
                    </div>
                </div>
            </Inset>
        </MediumLargeStyled>
    );
};

export default MediumLarge;

const MediumLargeStyled = styled.header`
    color: #666666;

    .logo {
        .SiteLogo {
            width: 25%;
            margin: auto;
            padding: 20px 0px;
        }
    }

    nav {
        text-align: center;
        a {
            width: 135px;
            display: inline-block;

            line-height: 30px;
            margin: 0px 0px 20px 5px;
            border-bottom: solid 3px #666666;

            text-align: center;
            font-size: 16px;
            opacity: 0.8;
            color: #666666;
            font-weight: bold;
            text-decoration: none;
            text-transform: uppercase;

            &:hover,
            &:active,
            &:focus {
                opacity: 1;
            }

            &.active {
                color: #323330;
                border-bottom-color: #323330;
            }
        }
    }
`;
