import React from "react";
import {createRoot} from "react-dom/client";

import {Stopper, StopperWithTimer} from "./components/Stopper";

const App = () => (
    <div>
        {/* <Stopper>czas start</Stopper> */}
        <br/>
        <StopperWithTimer>czas start</StopperWithTimer>
    </div>
);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);