import React from 'react';
import './App.css';
import RestApiPage from './components/RestApiPage';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from './components/Login';

const hrefLink: string = 'https://sschmi129raspi.duckdns.org:3010';

function App() {
  return (
    <div className="App flex justify-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login hrefLink={hrefLink}/>} />
          <Route path="/RestApiPage" element={<RestApiPage hrefLink={hrefLink}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
