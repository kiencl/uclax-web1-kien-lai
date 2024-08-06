import { useState } from "react";
import styled from "styled-components";

//DATA
import { tabbedData } from "./tabbedData";

// COMPONENTS
import TabContent from "./TabContent";
import TabList from "./TabList/TabList";

const Tabbed = () => {
    const [curTab, curTabUpdate] = useState(tabbedData[0]);

    return (
        <TabbedStyled>
            <TabList
                tabs={tabbedData}
                curTab={curTab}
                curTabUpdate={curTabUpdate}
            />
            <TabContent curTab={curTab} />
        </TabbedStyled>
    );
};

export default Tabbed;

const TabbedStyled = styled.div``;
