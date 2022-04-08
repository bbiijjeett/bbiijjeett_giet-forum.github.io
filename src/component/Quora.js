import React from 'react';
import '../css/Quora.css';
import NavBar from "./Navbar.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Widget from "./Widget.js";

function Quora() {
    return (
        <div>
            <NavBar />
            <div className="quora__content">
               {/* <Sidebar /> */}
                <Feed />
                 <Widget />
            </div>
        </div>
    );
}

export default Quora;