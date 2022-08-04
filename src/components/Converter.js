import React from "react";

const modifier = [
    '', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion', 'Quintillion'
];

class Converter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            perMin: '',
            perHr: '',
            multi: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleModChange = this.handleModChange.bind(this);
    }
    handleChange = event => {
        this.setState({
            input: event.target.value,
            perMin: event.target.value * 60,
            perHr: event.target.value * 3600
        });
    }
    handleModChange = event => {
        this.setState({
            multi: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>How Many Cookies Per Minute?</h1>
                <form onSubmit={this.handleSubmit}>
                    <h2>Enter Cookies Per Second:</h2>
                    <input value={this.state.input} onChange={this.handleChange}></input>
                    <select onChange={this.handleModChange}>
                        {modifier.map(mod => <option value={modifier.indexOf(mod)}>{mod}</option>)}
                    </select>
                </form>

                <h2>Cookies Per Minute:</h2>
                {console.log(this.state.input)}
                <p>{this.state.perMin < 1000 ? (this.state.perMin + ' ' + modifier[this.state.multi]) 
                    : (this.state.perMin/1000 + ' ' + modifier[parseInt(this.state.multi) + 1])}</p>

                <h2>Cookies Per Hour:</h2>
                <p>{this.state.perHr < 1000000 ? (this.state.perHr/1000 + ' ' + modifier[parseInt(this.state.multi) + 1]) 
                    : (this.state.perHr/1000000 + ' ' + modifier[parseInt(this.state.multi) + 2])}</p>
            </div>
        );
    }
}

export default Converter;