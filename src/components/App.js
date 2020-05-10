import React from 'react';
import './App.scss';

class App extends React.Component {
    state = {
        base: {
            code: "PLN",
            rate: 1,
        },
        exchange: [
            {
                code: "PLN",
                rate: "1"
            }, {
                code: "USD",
                rate: ""
            }, {
                code: "AUD",
                rate: ""
            }, {
                code: "CAD",
                rate: ""
            }, {
                code: "EUR",
                rate: ""
            }, {
                code: "HUF",
                rate: ""
            }, {
                code: "CHF",
                rate: ""
            }, {
                code: "GBO",
                rate: ""
            }, {
                code: "JPY",
                rate: ""
            }, {
                code: "CZK",
                rate: ""
            }
        ],
        inputValue: 1
    }

    componentDidMount() {
        fetch('http://api.nbp.pl/api/exchangerates/tables/C/').then(response => {
            if (response.ok) {
                return response
            }
            throw Error("Error")
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    exchange: [
                        {
                            code: "PLN",
                            rate: 1
                        }, {
                            code: "USD",
                            rate: data[0].rates[0].ask
                        }, {
                            code: "AUD",
                            rate: data[0].rates[1].ask
                        }, {
                            code: "CAD",
                            rate: data[0].rates[2].ask
                        }, {
                            code: "EUR",
                            rate: data[0].rates[3].ask
                        }, {
                            code: "HUF",
                            rate: data[0].rates[4].ask
                        }, {
                            code: "CHF",
                            rate: data[0].rates[5].ask
                        }, {
                            code: "GBO",
                            rate: data[0].rates[6].ask
                        }, {
                            code: "JPY",
                            rate: data[0].rates[7].ask
                        }, {
                            code: "CZK",
                            rate: data[0].rates[8].ask
                        }
                    ]
                })
            })
            .catch(err => {
                console.log("Not find")
            })
    }

    showList = () => {
        document.querySelector(".base ul").style.display = "block";
    }

    hideList = () => {
        document.querySelector(".base ul").style.display = "none";
    }

    handleChangeBase = e => {
        this.setState({
            base: {
                code: e.target.textContent,
                rate: e.target.dataset.rate,
            }
        })
    }

    handleChangeValue = e => {
        this.setState({inputValue: e.target.value})
    }

    render() {
        return (
            <div className="App">
                <div className="set">
                    <div onMouseOver={this.showList} onMouseLeave={this.hideList} className="base">
                        <button>{this.state.base.code}</button>
                        <ul onClick={this.hideList}>
                            {this.state.exchange.map(currency => (
                                <li key={currency.code} data-rate={currency.rate} onClick={this.handleChangeBase}>{currency.code}</li>
                            ))}
                        </ul>
                    </div>
                    <input type="number" value={this.state.inputValue} onChange={this.handleChangeValue}/>
                </div>
                <ul>
                    {this.state.exchange.map(currency => (
                        <li key={currency.code} data-rate={currency.rate} className="panel">
                            <div className="rate">{currency.code}</div>
                            <div className="result">{this.state.base.rate * this.state.inputValue / currency.rate}</div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
