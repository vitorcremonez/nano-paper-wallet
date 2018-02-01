import React, {Component} from 'react';
import '../styles/footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer bg-nano-blue">
                <div>
                    Fork us on:
                    &nbsp;
                    <a href="https://github.com/vitorcremonez/nano-paper-wallet">
                        Github
                    </a>
                </div>
                <div>
                    © The folding wallet design and tamper-evident seals are Copyright 2017 by Vitor Cremonez. This software may be modified and redistributed as per the MIT license described in the HTML source code. However, the folding paper wallet design itself may not be modified or redistributed for commercial purposes without permission.
                </div>
                <b>This software and service is provided with no warranty. Use at your own risk.</b>
            </div>
        );
    }
}

export default Footer;