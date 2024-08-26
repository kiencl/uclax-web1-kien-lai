import styled from "styled-components";

import Inset from "@/Common/PagesLayout/Inset.jsx";

import StaffList from "./StaffList/StaffList";

const Frameworks = () => {
    return (
        <FrameworksStyled>
            <Inset>
                <h1>Frameworks</h1>
                <StaffList />
            </Inset>
        </FrameworksStyled>
    );
};

export default Frameworks;

const FrameworksStyled = styled.div`
    img {
        padding: 40px 40px 30px 40px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        font-size: 18px;
    }
`;
