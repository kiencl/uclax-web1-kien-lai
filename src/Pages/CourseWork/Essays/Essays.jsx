import styled from "styled-components";
import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>

            <SingleEssay
                question={`Q1: Explain the difference between HTML, CSS and JavaScript.`}
            >
                There are many difference between HTML, CSS and JavaScript. HTML
                (Hyper Text Markup Language) can be interpreted as the content
                layer of a webpage (that can also be linked from page to page).
                Content may include text, tables and images displayed in the
                browser. HTML is also independent of CSS and JavaScript; meaning
                they are not prerequisites. CSS (Cascading Style Sheet) is the
                visual layer of a webpage and controls the visual appearance
                including color, font (type, size, and style) and layout.
                JavaScript provides additional functionality that enables a
                webpage to be interactive by manipulating HTML and CSS directly
                without the need for server side processing. Listens for events
                such as mouse click and scroll, and keyboard input.
            </SingleEssay>
            <SingleEssay
                question={`Q2: What is the difference between Git and Github?`}
            >
                The difference between Git and GitHub is Git is a version
                control system that enables developers to track changes made to
                a project (an app or website) while GitHub is an online service
                that hosts Git projects. Git does not require GitHub, but GitHub
                requires Git. Git is also open source, while GitHub offers a
                paid tier service.
            </SingleEssay>
            <SingleEssay
                question={`Q3: What is the difference between JQuery and React?`}
            >
                Although React and jQuery both use javascript, they interact
                with the DOM (Document Object Model) very differently. jQuery
                applies javascript methods (using less lines of code) to update
                a page through the traditional DOM. This route can take more
                time, especially if the app becomes larger or more complex.
                React, however, uses an XML-like syntax called JSX and a virtual
                DOM that speeds up the update process.
            </SingleEssay>
            <SingleEssay
                question={`Q4: What is the difference between a Front-End and Back-End Developer?`}
            >
                Front-End developers work on translating designs into
                websites/apps and use programming languages such as HTML, CSS
                and JavaScript. Back-End developers work on enabling
                functionality front-end developers rely on such as databases and
                use programming languages such as Java, Python and Ruby to build
                applications.
            </SingleEssay>
            <SingleEssay
                question={`Q5: In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                Answer
            </SingleEssay>
            <SingleEssay
                question={`Q6: What is the difference between jpg, gif, png and svg images?`}
            >
                Answer
            </SingleEssay>
            <SingleEssay
                question={`Q7: Define the following Agile roles: Product Manager, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps.`}
            >
                Answer
            </SingleEssay>
            <SingleEssay
                question={`Q6: What is the difference between jpg, gif, png and svg images?`}
            >
                Answer
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
