// import {createElement} from 'react'
import { Fragment } from "react";
function App() {
  // const heading = createElement('h1', {id: 'myHeading'}, 'Gooning for Nathan Yee');

  const heading = "gooning is awesome"
  return (
    <>
      <h1 className="myHeading">{'My heading ${heading}'}</h1>
      <p>Nathan Yee is the best! {34.5*2}</p>
    </>
  );
}

export default App;