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
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #323330;

    h3 {
        color: white;
        font-size: 20px;
        padding: 10px 20px;
        margin: 0px;
    }
    .content {
        padding: 20px;
        background-color: #ffffff;
        border-bottom-left-radius: 13px;
        border-bottom-right-radius: 13px;
        box-shadow: 0px 10px 15px #bbbbbb;
    }
`;
