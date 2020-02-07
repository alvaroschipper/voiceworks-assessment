import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import testApi from './api';
import TankFilter from "./filter/TankFilter";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tanks: [],
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});
        testApi.fetchData((error, data) => {
            if (error) {
                this.setState({error: error, isLoading: false});
                return console.error(error);
            }
            this.setState({tanks: data, isLoading: false});
        });
    }

    render() {
        const {tanks, isLoading, error} = this.state;
        if (error) return <p>{error}</p>;
        if (isLoading) return <CircularProgress/>;
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">
                            Tanks
                        </Typography>
                    </Toolbar>
                </AppBar>
                <TankFilter tanks={tanks}/>
            </div>
        );
    }
}

export default App;
