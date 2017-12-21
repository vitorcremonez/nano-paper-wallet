import React, {Component} from 'react';
import PaperWallet from '../assets/images/art.jpg';

class PaperWalletExample extends Component {
    render() {
        return(
            <div>
                <h4>Example of Paper Wallet:</h4>
                <img src={PaperWallet} width={"100%"} />
            </div>
        );
    }
}

export default PaperWalletExample;

