import React from "react";

import Tab from "./Tab";

const Header = ({tabObjArray}) => {
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
                <Tab key={tab.path} label={tab.label} path={tab.path} />
            ))
        }
            </ul>
        </nav>
    );
};

export default Header;
