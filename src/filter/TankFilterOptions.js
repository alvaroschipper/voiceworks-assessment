import React from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControl from "@material-ui/core/FormControl";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        width: "20%",
    },

}));

function TankFilterOptions(props) {
    const classes = useStyles();

    const handleChange = (type, event) => {
        const value = event.target.value;
        props.changeOption(value, type);
    };

    return (
        <Card>
            <CardHeader title="Filter"/>
            <CardContent>
                <FormControl className={classes.formControl}>
                    <InputLabel id="type">Type</InputLabel>
                    <Select value={props.type} onChange={event => handleChange('type', event)} labelId="type">
                        <MenuItem value="">None</MenuItem>
                        {props.typeOptions.map(option =>
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="country">Country</InputLabel>
                    <Select value={props.country} onChange={event => handleChange('country', event)} labelId="country">
                        <MenuItem value="">None</MenuItem>
                        {props.countryOptions.map(option =>
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="name">Name</InputLabel>
                    <Select value={props.name} onChange={event => handleChange('name', event)} labelId="name">
                        <MenuItem value="">None</MenuItem>
                        {props.nameOptions.map(option =>
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="ammunition">Ammunition</InputLabel>
                    <Select value={props.ammunition} onChange={event => handleChange('ammunition', event)}
                            labelId="ammunition">
                        <MenuItem value="">None</MenuItem>
                        {props.ammunitionOptions.map(option =>
                            <MenuItem key={option} value={option}>{option}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </CardContent>
        </Card>
    );
}

export default TankFilterOptions;