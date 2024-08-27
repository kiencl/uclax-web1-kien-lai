import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";
import Inset from "@/Common/PagesLayout/Inset.jsx";

const ResourcesLayout = () => {
    return (
        <ResourcesLayoutStyled>
            <Inset>
                <h1>Resources</h1>
                <nav className="sublinks">
                    <NavLink to="/resources" end>
                        Videos
                    </NavLink>
                    <NavLink to="/resources/guides">Guides</NavLink>
                </nav>
                <Outlet />
            </Inset>
        </ResourcesLayoutStyled>
    );
};

export default ResourcesLayout;

const ResourcesLayoutStyled = styled.div``;
