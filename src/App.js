import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, useParams, useRouteMatch, Redirect, Link, useLocation } from 'react-router-dom';

function App() {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/work/1"}>work 1</Link>
      <Link to={"/work?p=2"}>work 2</Link>
      <Switch>
        <Route exact path={"/"} children={<Home />} />
        <Route path={"/work"} children={<Work />} />
        <Route path={"*"} component={NotFound}></Route>
      </Switch>
    </>
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
  const p = new URLSearchParams(useLocation().search).get("p");

  return (
    <>
      <p>這裡是Work : {p}</p>
    </>
  )
}

const NotFound = (props) => {

  const { path, url } = useRouteMatch();

  return (
    <>
      <Redirect to="/"></Redirect>
      Not Found ,path : {path} , url : {url}
    </>
  )
}