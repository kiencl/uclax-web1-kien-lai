import styled from "styled-components";
import PropTypes from "prop-types";

const TabItem = ({ tab, curTab, curTabUpdate }) => {
    const handleClick = () => {
        curTabUpdate(tab);
    };

    const theClassName = tab.id === curTab.id ? "selected" : "";

    return (
        <TabItemStyled className={theClassName} onClick={handleClick}>
            {tab.title}
        </TabItemStyled>
    );
};

export default TabItem;

// prop-types
TabItem.propTypes = {
    tab: PropTypes.object.isRequired,
};

const TabItemStyled = styled.div`
    background-color: #eeeeee;
    color: #323330;
    text-align: center;
    cursor: pointer;
    border-top: 2px solid #323330;
    border-left: 2px solid #323330;
    border-right: 2px solid #323330;
    border-radius: 10px 10px 0px 0px;
    line-height: 40px;
    margin-right: 5px;
    padding-top: 3px;
    font-size: 19px;
    display: inline-block;
    width: clamp(75px, 20%, 150px);

    &.selected {
        color: #ffffff;
        font-weight: bold;
        background-color: #323330;
    }
`;
