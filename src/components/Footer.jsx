import React from 'react';
import ReactDOM from 'react-dom';

var currYear = new Date ().getFullYear();
function Footer(){
    return (
    <div>
     <footer>
        <p>Copyright @ {currYear}</p>
     </footer>
    </div>
    );
}

export default Footer;