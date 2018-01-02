import React, { Component } from 'react';
import { QRCode } from 'react-qr-svg';
import '../styles/paper_wallet.css';

class PaperWallet extends Component {
    render() {
        return (
            <div className="paper-wallet">
                <div className="public-key-code">
                    { this.props.publicKey }
                </div>

                <div className="public-key-qr-code">
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        value={ this.props.publicKey }
                    />
                </div>
                <div className="seed-qr-code">
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        value={ this.props.seed }
                    />
                </div>
                <div className="seed-code">
                    { this.props.seed }
                </div>
            </div>
        );
    }
}

export default PaperWallet;