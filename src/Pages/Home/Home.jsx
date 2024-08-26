import styled from "styled-components";

import Inset from "@/Common/PagesLayout/Inset.jsx";
import Slideshow from "./Slideshow/Slideshow";
import Tabbed from "./Tabbed/Tabbed";

const Home = () => {
    return (
        <HomeStyled>
            <Slideshow />
            <Inset>
                <h1>Javascript Frameworks</h1>
                <Tabbed />
            </Inset>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h1 {
        margin-top: -50px;
    }
`;
