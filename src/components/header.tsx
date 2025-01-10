import * as React from "react";

const Header = (props) => {
    return (
        <div className="header">
            <h1>{props.heading}</h1>
            <p>
                {props.extra}
            </p>
        </div>
    );
};

export default Header;