import styled from "styled-components";

// Scripts
import "./scripts/index.js";

// React Components
import ReactComponent from "./ReactComponent";

const Fundamentals = () => {
    return (
        <FundamentalsStyled>
            <h2>JavaScript Fundamentals</h2>

            <ReactComponent title="Heading 1" showDisc="true" />
            <ReactComponent title="Heading 2" />
            <ReactComponent title="Heading 3" />
        </FundamentalsStyled>
    );
};

export default Fundamentals;

const FundamentalsStyled = styled.div``;
