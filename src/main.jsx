import React from "react";
import{ createRoot} from "react-dom/client";


const rootEL = document.querySelector("#root");
const root = createRoot(rootEL)
root.render(
    <React.StrictMode>
        <he>Hello</he>
    </React.StrictMode>
)