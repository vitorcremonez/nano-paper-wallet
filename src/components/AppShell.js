import React, {Component} from 'react';
import Footer from "./Footer";
import Logo from '../assets/images/raiblocks_logo.png';

class AppShell extends Component {
    render() {
        return (
            <div className="center">
                <div id="app-shell-header" style={{padding: 32}}>
                    <img src={Logo} width={300} />
                    <div className="gray">
                        Paper Wallet Generator
                    </div>
                </div>
                <div id="app-shell-content">
                    { this.props.children }
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AppShell;