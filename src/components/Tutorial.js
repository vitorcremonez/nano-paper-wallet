import React, { Component } from 'react';
import {
    Icon,
} from 'react-materialize';

class Tutorial extends Component {
    render() {
        return (
            <div>
                <h4>Make Paper Wallets to Keep Your RaiBlocks Addresses Safe.</h4>
                <h5>Follow this simple steps to generate your raiblocks paper wallet in a safe way.</h5>
                <br/>
                <h5>
                    <b>Intructions:</b>
                </h5>
                <br/>
                <h6>
                    <b>Creating a <Icon>security</Icon> cold wallet and printing your paper wallet:</b>
                </h6>
                <ol>
                    <li>Access Paper Wallet Generator in a new <Icon>visibility_off</Icon> Private Window in your browser.</li>
                    <li>Disconnect your <Icon>wifi</Icon> internet connection.</li>
                    <li>Click in "<Icon>gesture</Icon> Generate your wallet now!".</li>
                    <li>Click in "<Icon>note_add</Icon> Create your paper wallet".</li>
                    <li>Click in "<Icon>print</Icon> Print your paper wallet".</li>
                </ol>
                <br/>
                <h6>
                    <b>Generating your paper wallet by your own inputs:</b>
                </h6>
                <ol>
                    <li>Access Paper Wallet Generator in a new <Icon>visibility_off</Icon> Private Window in your browser.</li>
                    <li>Disconnect your <Icon>wifi</Icon> internet connection.</li>
                    <li>Add your <Icon>lock</Icon> Seed, <Icon>account_balance_wallet</Icon> Account and <Icon>call_received</Icon> Public key.</li>
                    <li>Click in "<Icon>note_add</Icon> Create your paper wallet".</li>
                    <li>Click in "<Icon>print</Icon> Print your paper wallet".</li>
                </ol>
            </div>
        );
    }
}

export default Tutorial;