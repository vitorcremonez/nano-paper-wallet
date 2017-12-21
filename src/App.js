import React, {Component} from 'react';
import AppShell from "./components/AppShell";
import Generator from "./components/Generator";
import PaperWalletExample from "./components/PaperWalletExample";

class App extends Component {
    render() {
        return (
            <AppShell>
                <Generator/>
                <br/><br/><br/>
                <PaperWalletExample/>
            </AppShell>
        );
    }
}

export default App;
