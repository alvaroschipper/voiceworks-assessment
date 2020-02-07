import React from "react";

function TankFilterOptions(props) {
    const handleChange = (type, event) => {
        const value = event.target.value;
        props.changeOption(value, type);
    };

    return (
        <div>
            <label>Type</label>
            <select value={props.type} onChange={event => handleChange('type', event)}>
                {props.typeOptions.map(option =>
                    <option key={option} value={option}>{option}</option>
                )}
            </select>
            <label>Country</label>
            <select value={props.country} onChange={event => handleChange('country', event)}>
                {props.countryOptions.map(option =>
                    <option key={option} value={option}>{option}</option>
                )}
            </select>
            <label>Name</label>
            <select value={props.name} onChange={event => handleChange('name', event)}>
                {props.nameOptions.map(option =>
                    <option key={option} value={option}>{option}</option>
                )}
            </select>
            <label>Ammunition</label>
            <select value={props.ammunition} onChange={event => handleChange('ammunition', event)}>
                {props.ammunitionOptions.map(option =>
                    <option key={option} value={option}>{option}</option>
                )}
            </select>
        </div>
    );
}

export default TankFilterOptions;