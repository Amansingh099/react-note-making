import React from "react";

const year = new Date().getFullYear();

function Footer(){
    return (
    <footer>
        <span>Copyright {year}</span>
    </footer>);
}

export default Footer;