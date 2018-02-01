import React, { Component } from 'react';
import {
    Icon,
} from 'react-materialize';

class Tutorial extends Component {
    render() {
        return (
            <div className="bg-nano-blue bg-logo-dark" style={{color: "white", padding: 16}}>
                <h4>Make your Paper Wallet to Keep Your RaiBlocks and Keys Safe.</h4>
                <h5 className="color-nano-gray">Follow these simple steps to generate your raiblocks paper wallet in a safe place.</h5>
                <h6 className="color-nano-gray">
                    Client side generator. All functions of paper wallet generator is runned in client side to help keep your new paper wallet far from another people.
                </h6>
                <br/>
                <h5>
                    <b>Intructions:</b>
                </h5>
                <br/>
                <h6>
                    <b>Creating a <Icon>security</Icon> cold wallet and printing it:</b>
                </h6>
                <div className="color-nano-gray">
                    <ol>
                        <li>Access Paper Wallet Generator in a new <Icon>visibility_off</Icon> Private Window in your browser.</li>
                        <li>Disconnect your <Icon>wifi</Icon> internet connection.</li>
                        <li>Click in "<Icon>gesture</Icon> Generate your wallet now!".</li>
                        <li style={{display:"none"}}>Move cursor around screen <Icon>gesture</Icon> to help generate a good randomic entropy. (SOON)</li>
                        <li>Click in "<Icon>note_add</Icon> Create your paper wallet".</li>
                        <li>Click in "<Icon>print</Icon> Print your paper wallet".</li>
                        <li>Close <Icon>close</Icon> the browser and restart computer.</li>
                        <li>Note: You can <Icon>update</Icon> reinstall OS to feel safe.</li>
                    </ol>
                </div>
                <br/>
                <h6>
                    <b>Generating your paper wallet by your own inputs:</b>
                </h6>
                <div className="color-nano-gray">
                    <ol>
                        <li>Access Paper Wallet Generator in a new <Icon>visibility_off</Icon> Private Window in your browser.</li>
                        <li>Disconnect your <Icon>wifi</Icon> internet connection.</li>
                        <li>Add your <Icon>lock</Icon> Seed, <Icon>account_balance_wallet</Icon> Account and <Icon>call_received</Icon> Public key.</li>
                        <li>Click in "<Icon>note_add</Icon> Create your paper wallet".</li>
                        <li>Click in "<Icon>print</Icon> Print your paper wallet".</li>
                        <li>Close <Icon>close</Icon> the browser and restart computer.</li>
                        <li>Note: You can <Icon>update</Icon> reinstall OS to feel safe.</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Tutorial;