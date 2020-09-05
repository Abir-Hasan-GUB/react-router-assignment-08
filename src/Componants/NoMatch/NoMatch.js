import React from 'react';
import './No Match.css';

const NoMatch = () => {
    const url = "https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif";
    return (
        <div className = "noMatch">
            <img src={url} alt="404 error gif"/>;
        </div>
    );
};

export default NoMatch;