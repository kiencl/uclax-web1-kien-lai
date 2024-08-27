import styled from "styled-components";
import PropTypes from "prop-types";

const SingleEssay = ({ question, children }) => {
    return (
        <SingleEssayStyled>
            <h3>{question}</h3>
            <div className="content">{children}</div>
        </SingleEssayStyled>
    );
};

export default SingleEssay;

// PROP TYPES
SingleEssay.propTypes = {
    question: PropTypes.string.isRequired,
    children: PropTypes.any,
};

const SingleEssayStyled = styled.div`
    margin: 20px 0px;
    border: solid 2px #323330;
    border-radius: 15px;
    h3 {
        background-color: #323330;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        color: white;
        font-size: 20px;
        padding: 10px 20px;
        margin: 0px;
    }
    .content {
        padding: 20px;
    }
`;
