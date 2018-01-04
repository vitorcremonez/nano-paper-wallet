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
                <img src={ this.props.arts.default.art }
                     width={ this.props.arts.default.size.width }
                     height={ this.props.arts.default.size.height }
                />

                <div className="public-key-code" style={{
                    width: this.props.arts.default.public_key.width,
                    height: this.props.arts.default.public_key.height,
                    left: this.props.arts.default.public_key.left,
                    bottom: this.props.arts.default.public_key.bottom,
                }}>
                    { this.props.publicKey }
                </div>
                <div className="public-key-qr-code" style={{
                    width: this.props.arts.default.public_key_qr.width,
                    height: this.props.arts.default.public_key_qr.height,
                    left: this.props.arts.default.public_key_qr.left,
                    bottom: this.props.arts.default.public_key_qr.bottom,
                }}>
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        value={ this.props.publicKey }
                    />
                </div>
                <div className="seed-qr-code" style={{
                    width: this.props.arts.default.seed_qr.width,
                    height: this.props.arts.default.seed_qr.height,
                    left: this.props.arts.default.seed_qr.left,
                    bottom: this.props.arts.default.seed_qr.bottom,
                }}>
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        value={ this.props.seed }
                    />
                </div>
                <div className="seed-code" style={{
                    width: this.props.arts.default.seed.width,
                    height: this.props.arts.default.seed.height,
                    left: this.props.arts.default.seed.left,
                    bottom: this.props.arts.default.seed.bottom
                }}>
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

function mapStateToProps(state) {
    return {
        arts: state.arts,
    }
}

export default connect(mapStateToProps)(PaperWallet);
