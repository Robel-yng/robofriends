import React, { Component } from 'react';
import Cardlist from '../Components/Cardlist'
import SearchBox from '../Components/SearchBox'
import './App.css'
import Scroll from '../Components/Scroll'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchchange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => { this.setState({ robots: users }) })
    }


    render() {
        const filteredrobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.robots.length == 0) {
            return <h1 > Loading... < /h1>
        } else {


            return ( <
                div className = 'tc' > >
                <
                h1 className = 'f1' > Robofriends < /h1> <
                SearchBox searchchange = { this.onSearchchange }
                /> <
                Scroll >
                <
                Cardlist robots = { filteredrobot }
                /> <
                /Scroll> <
                /div>
            );
        }
    }
}

export default App