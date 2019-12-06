import React from 'react';

import { Router, Route } from "react-router-dom";

import history from "./history";

import FirstPage from './components/FirstPage';
import CredentialPage from './components/CredentialsPage';
import Test_Select from './components/Test_Select';
import Common from './components/Common';
import Final_Page from './components/Final_Page';

function App() {
  return (
    <div>
      <Router history={history}>
        <div>
          <Route path="/" exact component={FirstPage} />
          <Route path="/credentials" exact component={CredentialPage} />
          <Route path="/test" exact component ={Test_Select} />
          <Route path="/common" exact component = {Common} />
          <Route path="/final" exact component = {Final_Page} />
        </div>
      </Router>
    </div>
  );
}

export default App;
