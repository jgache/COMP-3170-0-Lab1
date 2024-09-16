// import {createElement} from 'react'
import { Fragment } from "react";
function App() {
  return (
    <>
      <h1 className="myHeading">{`R Kelly Greatest Hits`}</h1>
      <div>
        <div className="content">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/26/R._Kelly_2002_Mugshot.jpg"
            alt=""
          />
          <div className="dropdown">
            <h1>Albums</h1>
            <details name="reqs">
              <summary>Chocolate Factory (2003)</summary>
              <p>
                <li>Chocolate Factory</li>
                <li>Step in the Name of Love</li>
                <li>Heart of a Woman</li>
                <li>Wasted Hard</li>
                <li>Forever More</li>
                <li>Burn It Up</li>
                <li>It’s Your Birthday</li>
                <li>Flintstones</li>
                <li>Snake</li>
                <li>Heaven I Need a Hug</li>
                <li>Showdown</li>
                <li>Sex in the Kitchen</li>
                <li>Feelin' on Yo Booty</li>
                <li>Take You Home</li>
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
              </ol>
            </details>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
