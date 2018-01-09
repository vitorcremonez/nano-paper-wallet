import React, {Component} from 'react';
import {QRCode} from 'react-qr-svg';

class Donate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donate_public_key: "xrb_1b7bhxbz7n66iie8ygsde87ajoiyy38xbxi5zywsw8gncxhswso61191n1d4",
        };
    }

    render() {
        return (
            <div className="bg-lightsmoke responsive-text" style={{padding: 32}}>
                <h6>
                    <b>Donate XRB and help us to improve the paper wallet!</b>
                </h6>
                <br/>
                <div style={{padding: 10, background: "white", width: 128, margin: "auto"}}>
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        value={ this.state.donate_public_key }
                    />
                </div>
                <h6>
                    { this.state.donate_public_key }
                </h6>
            </div>
        );
    }
}

export default Donate;