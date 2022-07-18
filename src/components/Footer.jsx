import React from "react";

const d = new Date();

const Header = () => ( 
    <footer>
        <p>ⓒ dontDude {d.getFullYear()}</p>
    </footer>
);

export default Header;