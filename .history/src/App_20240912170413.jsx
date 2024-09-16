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
            <summary>
Chocolate Factory
2003</summary>
            <p>
              Requires 40 credits, including a passing grade in health,
              geography, history, economics, and wood shop.
            </p>
          </details>
          <details name="reqs">
            <summary>R., 1998</summary>
            <p>
              Requires a computer running an operating system. The computer must
              have some memory and ideally some kind of long-term storage. An
              input device as well as some form of output device is recommended.
            </p>
          </details>
          <details name="reqs">
            <summary>12 Play,</summary>
            <p>
              Requires knowledge of HTML, CSS, JavaScript, accessibility, web
              performance, privacy, security, and internationalization, as well
              as a dislike of broccoli.
            </p>
          </details>
        </div>
      </div>
    </>
  );
}

export default App;
