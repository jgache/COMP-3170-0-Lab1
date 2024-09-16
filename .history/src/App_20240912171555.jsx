// import {createElement} from 'react'
import { Fragment } from "react";
function App() {
  // const heading = createElement('h1', {id: 'myHeading'}, 'Gooning for Nathan Yee');

  const heading = "gooning is awesome";
  return (
    <>
      <h1 className="myHeading">{`R Kelly Greatest Hits`}</h1>
      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/26/R._Kelly_2002_Mugshot.jpg"
          alt=""
        />
        <div>
          <details name="reqs">
            <summary>Chocolate Factory (2003)</summary>
            <p>
              Requires 40 credits, including a passing grade in health,
              geography, history, economics, and wood shop.
            </p>
          </details>
          <details name="reqs">
            <summary>R. (1998)</summary>
            <p>
            <li>Home Alone</li>
<li>Spendin' Money</li>
<li>If I'm Wit You</li>
<li>Half on a Baby</li>
<li>When a Woman's Fed Up</li>
<li>Get Up on a Room</li>
            </p>
          </details>
          <details name="reqs">
            <summary>12 Play (1993) </summary>
            <ol>
              <li>Your Body's Callin'</li>
              <li>Bump n' Grind</li>
              <li>Homie Lover Friend</li>
              <li>It Seems Like You're Ready</li>
              <li>Freak Dat Body</li>
              <li>I Like the Crotch on You</li>
              <li>Summer Bunnies</li>
              <li>For You</li>
              <li>Back to the Hood of Things</li>
              <li>Sadie</li>
              <li>Sex Me, Pt. 1</li>
              <li>Sex Me, Pt. 2</li>
              <li>12 Play</li>
            </ol>
          </details>
        </div>
      </div>
    </>
  );
}

export default App;
