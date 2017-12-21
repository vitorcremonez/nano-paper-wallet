import React, { Component } from 'react';
import AppShell from "./components/AppShell";
import Generator from "./components/Generator";

class App extends Component {
  render() {
    return (
      <AppShell>
        <Generator/>
      </AppShell>
    );
  }
}

export default App;
