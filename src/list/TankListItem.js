import React from "react";
import {TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import Avatar from "@material-ui/core/Avatar";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));


function TankListItem(props) {
    const classes = useStyles();
    const tank = props.tank;
    return (
        <TableRow>
            <TableCell>
                <Avatar src={tank.img} alt={tank.name} className={classes.large}/>
            </TableCell>
            <TableCell>{tank.name}</TableCell>
            <TableCell>{tank.country}</TableCell>
            <TableCell>{tank.type}</TableCell>
            <TableCell>{tank.ammunition.join(', ')}</TableCell>
        </TableRow>
    );
}

export default TankListItem;
