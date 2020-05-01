import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path={"/"} children={<Home />} />
      <Route path={"/work/:number"} children={<Work />} />
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

  const { number } = useParams();

  return (
    <>
      <p>這裡是Work : {number}</p>
    </>
  )
}