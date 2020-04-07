import React from "react";

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            companyName : '',
            cardNumber : '',
            validThru : '',
            name : '',
        }
    }

    nameControl = (e) => {
        const regex = /[^A-Za-z\s]/gi;
        if (!e.target.value.match(regex)) {this.setState ({[e.target.id] : e.target.value.substr(0,20)})}
    }

    numberControl = (e) => {
        const regex = /[^\d1-9]/g;
        if (!e.target.value.match(regex)) {
            this.setState ({[e.target.id] : e.target.value.substr(0, 16)})
        }
    }

    validThruControl = (e) => {
        const regex = /[^\d1-9]/g;
        if (!e.target.value.match(regex)) {
            console.log(e.target.value.toString().slice(0,2))
            if(e.target.value.toString().slice(0,2)>12) {
                e.target.value = 12
            }
            this.setState ({[e.target.id] : e.target.value.substr(0, 4)})
        }
    }

    render () {
         
        const renderCardNumber = (n) => {
            n = n.toString().padEnd(16,'•')
            let res = ''
            for(let i =0; i<n.length ; i += 4) {
              res += n.slice(i, i+4) + ' '
            }
            return res.trim()
        }

        const renderValidThru = number => {
            number = number.toString().padEnd(4,'•')
            return number.slice(0, 2) + '/' + number.slice(2)
        }

        return (
        <div className="credit-card-container">
            <div className="credit-card">
            <div className="credit-card-company">{this.state.companyName ? this.state.companyName.toUpperCase() : 'Company Name'}</div>
                <div className="credit-card-wrapper">
                    <div className="credit-card-content">
                        <img className="credit-card-chip" src={require('./ressources/chip.png')} alt="" />
                        <div className="credit-card-number">{this.state.cardNumber ? renderCardNumber(this.state.cardNumber) : '•••• •••• •••• ••••' }</div>
                        <div className="credit-card-validthru">{this.state.validThru ? renderValidThru(this.state.validThru) : '••/••'}</div>
                        <div className="credit-card-name">{this.state.name ? this.state.name.toUpperCase() : 'FOULEN'}</div>
                    </div>
                    <div className="credit-card-logo-bloc">
                        <img className="credit-card-logo" src={require('./ressources/mastercard.png')} alt="" />
                    </div>
                </div>
            </div>
            <form className="form-container">
                    <input type="text" id="companyName" placeholder="Company Name" value={this.state.companyName} onChange={this.nameControl} />
                    <input type="text" id="cardNumber" placeholder="Card Number" value={this.state.cardNumber} onChange={this.numberControl} />
                    <input type="text" id="validThru" placeholder="MM/YY" value={this.state.validThru} onChange={this.validThruControl} />
                    <input type="text" id="name" placeholder="Name" value={this.state.name} onChange={this.nameControl} />
            </form>
        </div>
        )
    }
}

export default Card;