import styled from "styled-components";
import PropTypes from "prop-types";

import { breakpoints } from "@/Common/useMediaQuery";

const TabContent = ({ curTab }) => {
    const { title, image, text } = curTab;

    return (
        <TabContentStyled>
            <div className="column1">
                <img src={image} alt={title} />
            </div>
            <div className="column2">
                <h3>{title}</h3>

                <div dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </TabContentStyled>
    );
};

export default TabContent;

// prop-types
TabContent.propTypes = {
    curTab: PropTypes.object.isRequired,
};

const TabContentStyled = styled.div`
    padding: 40px 30px;
    background-color: #ffffff;
    border: solid 2px #323330;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0px 10px 15px #bbbbbb;

    @media ${breakpoints.isMediumAndUp} {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }
    img {
        max-width: 100%;
        display: block;
        margin: 0px auto 15px;
    }
    h3 {
        font-size: 30px;
        font-weight: bold;
        color: #323330;
    }
    p {
        font-size: 18px;
        color: #323330;
        margin-bottom: 20px;
        line-height: 150%;
    }
`;
