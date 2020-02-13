import TankListItem from "./TankListItem";
import React from "react";
import {TableContainer} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Paper from "@material-ui/core/Paper";

function TankList(props) {
    const tanks = props.tanks;
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Avatar</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Ammunition</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tanks.map(tank =>
                        <TankListItem key={tank.id} tank={tank}/>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TankList;
