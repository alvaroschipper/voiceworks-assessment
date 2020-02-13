import React from "react";
import TankList from "../list/TankList";
import TankFilterOptions from "./TankFilterOptions";

class TankFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tanks: props.tanks,
            type: '',
            country: '',
            name: '',
            ammunition: ''
        };
    }

    filterItems = (value, type) => {
        switch (type) {
            case 'type':
                this.setState({type: value});
                break;
            case 'country':
                this.setState({country: value});
                break;
            case 'name':
                this.setState({name: value});
                break;
            case 'ammunition':
                this.setState({ammunition: value});
                break;
            default:
                break;
        }
    };

    render() {
        let filteredItems = this.state.tanks;
        ['type', 'country', 'name', 'ammunition'].forEach(filterBy => {
            const filterValue = this.state[filterBy];
            if (filterValue) {
                if (filterBy === 'ammunition') {
                    filteredItems = filteredItems.filter(item => item[filterBy].includes(filterValue));
                } else {
                    filteredItems = filteredItems.filter(item => item[filterBy] === filterValue);
                }
            }
        });

        const typeArray = [...new Set(this.state.tanks.map(item => item.type))];
        const countryArray = [...new Set(this.state.tanks.map(item => item.country))];
        const nameArray = [...new Set(this.state.tanks.map(item => item.name))];
        const ammunitionArray = [...new Set([].concat(...this.state.tanks.map(item => item.ammunition)))];

        return (
            <div>
                <TankFilterOptions
                    tanks={this.state.tanks}
                    typeOptions={typeArray}
                    countryOptions={countryArray}
                    nameOptions={nameArray}
                    ammunitionOptions={ammunitionArray}
                    changeOption={this.filterItems}/>

                <TankList tanks={filteredItems}/>
            </div>
        )
    }
}

export default TankFilter;
