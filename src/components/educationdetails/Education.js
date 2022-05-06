import React from "react";
import "../../../src/wp.css";
import "./edu.css";
import { Link } from "react-router-dom";

function Education() {
  return (
    <div>
      <div className="wrap">
        <form>
          <input id="title" value="Educational Details"></input>
          <div>
            <input
              id="ei"
              type="text"
              placeholder="College/University*"
            ></input>
            <input id="ei" type="date" placeholder="dd-mm-yyyy"></input>
            <input id="ei" type="date" placeholder="dd-mm-yyyy"></input>
          </div>
          <div>
            <input id="ei" type="text" placeholder="Qualification*"></input>
            <input id="fieldtwo" type="text" placeholder="Description*"></input>
          </div>
          <input id="ei" type="text" placeholder="College/University*"></input>
          <input id="ei" type="date" placeholder="dd-mm-yyyy"></input>
          <input id="ei" type="date" placeholder="dd-mm-yyyy"></input>

          <div>
            <input id="ei" type="text" placeholder="Qualification*"></input>
            <input id="fieldtwo" type="text" placeholder="Description*"></input>
          </div>

          <div>
            <Link to="/">
              <button> &lt; Back</button>
            </Link>
            <Link to="/project">
              <button>Next &gt; </button>
            </Link>
          </div>
          <div>
            <p id="para">Page 2</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Education;
