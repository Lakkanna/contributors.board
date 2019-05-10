import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Repositories from "./components/Repositories/Repositories";
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="col-sm-12">
        <div className="content pagehead repohead">
        <div className="row">
          <div className="col-sm-1 side">
          </div>
          <div className="col-sm-8 content-text">
            <b>List of contributors for the repository, sorted based on number commits of major bugs. Click on Contributors name to get report of contribution and history on other open source projects.</b>
          </div>
          <div className="col-sm-1 side">
          </div>
        </div>
        </div>
        <div className="row">
          <div className="col-sm-1 side">
          </div>
          <div className="col-sm-8 content-text">
            <Repositories />
          </div>
          <div className="col-sm-1 side">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
