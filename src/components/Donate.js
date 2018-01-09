import React, {Component} from 'react';
import { QRCode } from 'react-qr-svg';

class Donate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donate_public_key: "xrb_xxx",
        };
    }

    render() {
        return (
            <div className="bg-lightsmoke responsive-text" style={{padding:32}}>
                <h6>
                    <b>Donate XRB and help us to improve the paper wallet!</b>
                </h6>
                <br/>
                <div>
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        style={{ width: 128 }}
                        value={ this.state.donate_public_key }
                    />
                </div>
                { this.state.donate_public_key }
            </div>
        );
    }
}

export default Donate;