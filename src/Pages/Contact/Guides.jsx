import styled from "styled-components";
import Inset from "@/Common/PagesLayout/Inset.jsx";
import SingleEssay from "./SingleEssay.jsx";

const Resources = () => {
    return (
        <ResourcesStyled>
            <Inset>
                <h2>Guides</h2>

                <SingleEssay question={`React`}>
                    <p>
                        <b>API Reference</b>
                        <br></br>https://react.dev/reference/react
                    </p>

                    <ul>
                        <span>Tutorials</span>
                        <li>
                            <b>Tic Tac Toe</b>
                            <br></br>
                            https://react.dev/learn/tutorial-tic-tac-toe
                        </li>
                        <li>
                            <b>Mozilla</b>
                            <br></br>
                            https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started
                        </li>
                        <li>
                            <b>TutorialsPoint</b>
                            <br></br>
                            https://www.tutorialspoint.com/reactjs/index.htm
                        </li>
                    </ul>
                </SingleEssay>

                <SingleEssay question={`Vue`}>
                    <p>
                        <b>API Reference</b>
                        <br></br>https://vuejs.org/api
                    </p>

                    <ul>
                        <span>Tutorials</span>
                        <li>
                            <b>VueJS</b>
                            <br></br>https://vuejs.org/tutorial
                        </li>
                        <li>
                            <b>Mozilla</b>
                            <br></br>
                            https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started
                        </li>
                        <li>
                            <b>TutorialsPoint</b>
                            <br></br>
                            https://www.tutorialspoint.com/vuejs/index.htm
                        </li>
                    </ul>
                </SingleEssay>

                <SingleEssay question={`Angular`}>
                    <p>
                        <b>API Reference</b>
                        <br></br>https://v17.angular.io/api
                    </p>

                    <ul>
                        <span>Tutorials</span>
                        <li>
                            <b>Mozilla</b>
                            <br></br>
                            https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Angular_getting_started
                        </li>
                        <li>
                            <b>SimpliLearn</b>
                            <br></br>
                            https://www.simplilearn.com/tutorials/angular-tutorial
                        </li>
                        <li>
                            <b>TutorialsPoint</b>
                            <br></br>
                            https://www.tutorialspoint.com/angular8/index.htm
                        </li>
                    </ul>
                </SingleEssay>

                <SingleEssay question={`jQuery`}>
                    <p>
                        <b>API Reference</b>
                        <br></br>https://api.jquery.com
                    </p>
                    <p></p>
                    <ul>
                        <span>Tutorials</span>
                        <li>
                            <b>jQuery</b>
                            <br></br>https://learn.jquery.com
                        </li>
                        <li>
                            <b>GeeksforGeeks</b>
                            <br></br>
                            https://www.geeksforgeeks.org/jquery-tutorial/
                        </li>
                        <li>
                            <b>TutorialsPoint</b>
                            <br></br>
                            https://www.tutorialspoint.com/jquery/index.htm
                        </li>
                    </ul>
                </SingleEssay>

                <SingleEssay question={`Additional JS Frameworks`}>
                    <ul>
                        <li>
                            <b>Svelte</b>
                        </li>
                        <li>
                            <b>Next</b>
                        </li>
                        <li>
                            <b>Meteor</b>
                        </li>
                        <li>
                            <b>Express</b>
                        </li>
                        <li>
                            <b>Gatsby</b>
                        </li>
                        <li>
                            <b>Sails</b>
                        </li>
                        <li>
                            <b>Echo</b>
                        </li>
                        <li>
                            <b>Ember</b>
                        </li>
                    </ul>
                </SingleEssay>
            </Inset>
        </ResourcesStyled>
    );
};

export default Resources;

const ResourcesStyled = styled.div`
    max-width: 100vw;
    h2 {
        margin-top: -25px;
    }
    p,
    li,
    span {
        font-size: 18px;
    }
    span {
        font-weight: bold;
    }
    ul {
        list-style-position: outside;
        list-style-type: disc;
        padding: 0;
    }
    li {
        margin-left: 25px;
        padding: 5px 0 0 0;
    }
`;
