import React, {Component} from 'react';
import Footer from "./Footer";
import Logo from '../assets/images/nano_logo.svg';
import '../styles/app_shell.css';

class AppShell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            version: "3.0.0",
        };
    }

    render() {
        return (
            <div className="center">
                <div className="app-shell-header bg-nano-blue bg-logo-dark" style={{paddingTop: 64, paddingBottom: 64}}>
                    <a href="./">
                        <img src={Logo} width={300} />
                    </a>
                    <br/><br/>
                    <div className="gray">
                        Paper Wallet Generator v{this.state.version}
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