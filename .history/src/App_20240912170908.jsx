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
              Requires a computer running an operating system. The computer must
              have some memory and ideally some kind of long-term storage. An
              input device as well as some form of output device is recommended.
            </p>
          </details>
          <details name="reqs">
            <summary>12 Play (1993) </summary>
            <p>
              Your Body's Callin' Bump n' Grind Homie Lover Friend It Seems Like
              You're Ready Freak Dat Body I Like the Crotch on You Summer
              Bunnies For You Back to the Hood of Things Sadie Sex Me, Pt. 1 Sex
              Me, Pt. 2 12 Play
            </p>
          </details>
        </div>
      </div>
    </>
  );
}

export default App;
