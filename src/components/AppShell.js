import React, {Component} from 'react';
import Footer from "./Footer";
import Logo from '../assets/images/raiblocks_logo.png';
import '../styles/app_shell.css';

class AppShell extends Component {
    render() {
        return (
            <div className="center">
                <div className="app-shell-header" style={{padding: 32}}>
                    <a href="./">
                        <img src={Logo} width={300} />
                    </a>
                    <div className="gray">
                        Paper Wallet Generator v1.0.0
                    </div>
                </div>
                <div className="app-shell-content col s6">
                    { this.props.children }
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AppShell;