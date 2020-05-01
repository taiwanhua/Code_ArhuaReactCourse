import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path={"/"} children={<Home />} />
      <Route path={"/work/1"} children={<Work props={1} />} />
      <Route path={"/work/2"} children={<Work props={2} />} />
    </Switch>
  );
}

export default App;

const Home = (props) => {
  return (
    <>
      <p>這裡是Home</p>
    </>
  )
}

const Work = ({ props }) => {
  return (
    <>
      <p>這裡是Work : {props}</p>
    </>
  )
}