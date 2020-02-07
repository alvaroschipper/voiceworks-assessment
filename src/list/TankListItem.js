import React from "react";

function TankListItem(props) {
    const tank = props.tank;
    return (
        <div>
            <li>{tank.name}</li>
        </div>
    );
}

export default TankListItem;
