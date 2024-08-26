import styled from "styled-components";
import Inset from "@/Common/PagesLayout/Inset.jsx";
import SingleEssay from "./SingleEssay.jsx";

// 3RD PARTY NPM PACKAGE, YOUTUBE VIDEO EMBED
import React from "react";
import ReactPlayer from "react-player/youtube";

const Resources = () => {
    return (
        <ResourcesStyled>
            <Inset>
                <h2>Resources</h2>
                <h3>Videos</h3>

                <SingleEssay question={`React`}>
                    <p>
                        <b>React Tutorial For Beginners</b>
                        <ReactPlayer url="https://www.youtube.com/watch?v=SqcY0GlETPk&t=163s" />
                    </p>
                </SingleEssay>

                <SingleEssay question={`Vue`}>
                    <p>
                        <b>Vue For Beginners</b>
                        <ReactPlayer url="https://www.youtube.com/watch?v=YrxBCBibVo0" />
                    </p>
                </SingleEssay>

                <SingleEssay question={`Angular`}>
                    <p>
                        <b>Introduction To Angular</b>
                        <ReactPlayer url="https://www.youtube.com/watch?v=xAT0lHYhHMY" />
                    </p>
                </SingleEssay>

                <SingleEssay question={`jQuery`}>
                    <p>
                        <b>How To Get Started With jQuery</b>
                        <ReactPlayer url="https://www.youtube.com/watch?v=BaIgTKj1iCQ" />
                    </p>
                </SingleEssay>
            </Inset>
        </ResourcesStyled>
    );
};

export default Resources;

const ResourcesStyled = styled.div`
    max-width: 100vw;
    p,
    li {
        font-size: 18px;
    }
    ul {
        list-style-position: inside;
    }
`;
