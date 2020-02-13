import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import testApi from './api';
import TankFilter from "./filter/TankFilter";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";

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

        let content;
        if (error) {
            content = <p>{error}</p>;
        } else if (isLoading) {
            content = <CircularProgress/>;
        } else {
            content = <TankFilter tanks={tanks}/>;
        }

        return (
            <div>
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant="h6">
                            Voiceworks Tanks Assignment
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container>
                    <Typography variant="h2">Tanks</Typography>
                    {content}
                </Container>
            </div>
        );
    }
}

export default App;
