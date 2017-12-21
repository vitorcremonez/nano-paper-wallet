import React, {Component} from 'react';

class AppShell extends Component {
    render() {
        return (
            <div>
                <h1>MENU</h1>
                <div>
                    { this.props.children }
                </div>
            </div>
        );
    }
}

export default AppShell;