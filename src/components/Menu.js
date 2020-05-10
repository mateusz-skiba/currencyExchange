import React from 'react';
import './App.scss';


const Menu = (props) => {

    const {base, exchange} = props.currency

    let zero = null;

    const List = e => {
        // for (zero = 0; zero < exchange.length; zero++) {
        exchange.map(currency => (
            <li key={currency.code}>{currency.code}</li>
        // console.log(currency.code)
        ))
        // }
    }

    
    // const change = this.props.change(e);

    const handleChangeBase = e => {

        // console.log(props.currency)

        document
            .querySelector("ul")
            .style
            .display = "none";
        console.log(List)

    }

    // const add = (props) => {
    //     this.props.change
    // } 

    return (
        <ul>
            {/* <li onClick={handleChangeBase}>EUR</li>
        <li onClick={handleChangeBase}>EUR</li>
        <li onClick={handleChangeBase}>EUR</li>
        <li onClick={handleChangeBase}>EUR</li>
        <li onClick={handleChangeBase}>EUR</li>
        <li onClick={handleChangeBase}>EUR</li>
        <li onClick={handleChangeBase}>EUR</li>
        <li onClick={handleChangeBase}>EUR</li> */}
            {exchange.map(currency => (
                <li key={currency.code} onClick={handleChangeBase} onClick={this.props.changeBase}>{currency.code}</li>
            // console.log(currency.code)
            ))}
            {/* {List()} */}
        </ul>
    );
}

export default Menu;