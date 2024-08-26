import styled from "styled-components";
import PropTypes from "prop-types";

import Accolades from "./Accolades/Accolades";

const StaffMember = ({ member }) => {
    const { name, image, accolades } = member;

    return (
        <StaffMemberStyled>
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className="bottom">
                <Accolades accolades={accolades} />
            </div>
        </StaffMemberStyled>
    );
};

export default StaffMember;

// prop-types
StaffMember.propTypes = {
    member: PropTypes.object.isRequired,
};

const StaffMemberStyled = styled.div`
    border: 2px solid #323330;
    border-radius: 15px;

    img {
        width: 100%;
        display: block;
    }

    .bottom {
        padding: 0px 20px 20px;
    }

    h3 {
        color: 323330;
        font-weight: bold;
        padding: 0px 20px;
        margin: 0px;
    }
`;
