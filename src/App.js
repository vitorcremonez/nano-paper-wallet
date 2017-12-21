import React, {Component} from 'react';
import AppShell from "./components/AppShell";
import Generator from "./components/Generator";
import PaperWalletExample from "./components/PaperWalletExample";
import Donate from "./components/Donate";
import './styles/app.css';

class App extends Component {
    render() {
        return (
            <AppShell>
                <Generator/>
                <br/><br/><br/>
                <PaperWalletExample/>
                <br/>
                <Donate/>
            </AppShell>
        );
    }
}

export default App;
