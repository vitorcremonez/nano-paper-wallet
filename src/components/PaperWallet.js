import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { QRCode } from 'react-qr-svg';
import '../styles/paper_wallet.css';
import Art from '../assets/images/art.jpg';
import TemplatePrint from 'react-print';

class PaperWallet extends Component {
    renderPaperWallet() {
        return (
            <div className="paper-wallet">
                <img src={ Art } width={1000}/>
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

    render() {
        ReactDOM.render(
            <TemplatePrint>
                { this.renderPaperWallet() }
            </TemplatePrint>,
            document.getElementById('print-mount')
        );
        return this.renderPaperWallet();
    }
}

export default PaperWallet;
