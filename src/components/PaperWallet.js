import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { QRCode } from 'react-qr-svg';
import '../styles/paper_wallet.css';
import TemplatePrint from 'react-print';
import { connect } from 'react-redux';

class PaperWallet extends Component {
    renderPaperWallet() {
        return (
            <div className="paper-wallet">
                <img src={ this.props.art.art }
                     width={ this.props.art.size.width }
                     height={ this.props.art.size.height }
                />

                <div className="public-key-code" style={{
                    width: this.props.art.public_key.width,
                    height: this.props.art.public_key.height,
                    left: this.props.art.public_key.left,
                    bottom: this.props.art.public_key.bottom,
                    color: this.props.art.public_key.color,
                    fontSize: this.props.art.public_key.fontSize,
                    lineHeight: this.props.art.public_key.lineHeight,
                }}>
                    { this.props.publicAddress }
                </div>
                <div className="public-key-qr-code" style={{
                    width: this.props.art.public_key_qr.width,
                    height: this.props.art.public_key_qr.height,
                    left: this.props.art.public_key_qr.left,
                    bottom: this.props.art.public_key_qr.bottom,
                }}>
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        value={ this.props.publicAddress }
                    />
                </div>
                <div className="seed-qr-code" style={{
                    width: this.props.art.seed_qr.width,
                    height: this.props.art.seed_qr.height,
                    left: this.props.art.seed_qr.left,
                    bottom: this.props.art.seed_qr.bottom,
                }}>
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        value={ this.props.seed }
                    />
                </div>
                <div className="seed-code" style={{
                    width: this.props.art.seed.width,
                    height: this.props.art.seed.height,
                    left: this.props.art.seed.left,
                    bottom: this.props.art.seed.bottom,
                    color: this.props.art.seed.color,
                    fontSize: this.props.art.seed.fontSize,
                    lineHeight: this.props.art.seed.lineHeight,
                }}>
                    { this.props.seed }
                </div>
                <div className="infos" style={{
                    width: this.props.art.infos.width,
                    height: this.props.art.infos.height,
                    left: this.props.art.infos.left,
                    bottom: this.props.art.infos.bottom,
                }}>
                    <div>
                        <b>Nano Paper Wallet</b>
                    </div>
                    <div className="left-align" style={{fontSize: 11}}>
                        <div>- Do not reveal your secret key or seed to anyone.</div>
                        <div>- Verify your balance searching for the public address using services such as nanode.co</div>
                        <div>- To withdraw and receive the funds sync the paper wallet with your seed into official desktop wallet (Make sure wallet is open and all blocks are downloaded). Or any other trusted wallet.</div>
                        <br/>
                        <div className="responsive-text">
                            Account Index: <b>{ this.props.index }</b>
                        </div>
                        <br/>
                        <div className="responsive-text">
                            Secret Key:<br/>
                            { this.props.secretKey }
                        </div>
                        <br/>
                        <div>Notes:</div>
                    </div>
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