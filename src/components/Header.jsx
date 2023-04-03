import React from "react";

import Tab from "./Tab";

const Header = () => {
    return (
        <nav>
            <ul>
                <li>
                    <strong>Tic Tac Toe!</strong>
                </li>
            </ul>
            <ul>
            {
            tabObjArray.map((tab) => (
                <Tab label={tab.label} path={tab.path} />
            ))
        }
            </ul>
        </nav>
    );
};

export default Header;
