import React, {Component} from 'react';
import { QRCode } from 'react-qr-svg';

class Donate extends Component {
    render() {
        return (
            <div className="bg-lightsmoke" style={{padding:32}}>
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
                        value="xrb_3mxbpdh98i1pyxxpzt51apktsi634xmb4x1rjk195ubiu7pwsr76ab"
                    />
                </div>
                xrb_3mxbpdh98i1pyxxpzt51apktsi634xmb4x1rjk195ubiu7pwsr76ab
            </div>
        );
    }
}

export default Donate;