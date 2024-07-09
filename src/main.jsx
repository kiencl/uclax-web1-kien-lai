import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet } from "react-router-dom";

import Routes from "./Pages/Routes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Routes />
    </React.StrictMode>
);
