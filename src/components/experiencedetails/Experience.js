import React from "react";
import "../../../src/wp.css";
import "./exp.css";

import { Link } from "react-router-dom";

function Experience() {
  return (
    <div>
      <div className="wrap">
        <form>
          <input id="title" value="Experience Details"></input>
          <div>
            <h3 id="h">Experience 1</h3>
            <input type="text" placeholder="Institude/Organization *"></input>
            <input type="text" placeholder="Position *"></input>
            <input type="text" placeholder="Duration *"></input>
          </div>
          <div>
            <input
              className="fieldtwo"
              type="text"
              placeholder="Description *"
            ></input>
          </div>
          <div>
            <h3 id="h">Experience 2</h3>
            <input type="text" placeholder="Institude/Organization *"></input>
            <input type="text" placeholder="Position *"></input>
            <input type="text" placeholder="Duration *"></input>
          </div>
          <div>
            <input
              className="fieldtwo"
              type="text"
              placeholder="Description *"
            ></input>
          </div>

          <div>
            <Link to="/project">
              <button> &lt; Back</button>
            </Link>
            <Link to="/extra">
              <button>Next &gt; </button>
            </Link>
          </div>
          <div>
            <p id="para2">Page 4</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Experience;
