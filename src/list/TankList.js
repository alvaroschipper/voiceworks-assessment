import TankListItem from "./TankListItem";
import React from "react";

function TankList(props) {
    const tanks = props.tanks;
    return (
        <ul>
            {tanks.map(tank =>
                <TankListItem key={tank.id} tank={tank}/>
            )}
        </ul>
    );
}

export default TankList;
