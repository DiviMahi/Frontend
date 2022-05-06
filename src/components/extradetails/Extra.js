import React from "react";
import "../../../src/wp.css";
import { Link } from "react-router-dom";
import "./extra.css";

function Extra() {
  return (
    <div>
      <div className="wrap">
        <form>
          <input id="title" value="Extra Details"></input>
          <h3 id="hid">Skills/Languages</h3>
          <div>
            <input type="text" placeholder="Skill 1"></input>
            <input type="text" placeholder="Skill 2"></input>
            <input type="text" placeholder="Skill 3"></input>
          </div>
          <div>
            <input type="text" placeholder="Skill 4"></input>
            <input type="text" placeholder="Skill 5"></input>
            <input type="text" placeholder="Skill 6"></input>
          </div>
          <h3 id="hid">Interest</h3>
          <div>
            <input type="text" placeholder="Interest 1"></input>
            <input type="text" placeholder="Interest 2"></input>
            <input type="text" placeholder="Interest 3"></input>
          </div>
          <div>
            <input type="text" placeholder="Interest 4"></input>
            <input type="text" placeholder="Interest 5"></input>
            <input type="text" placeholder="Interest 6"></input>
          </div>

          <div>
            <Link to="/experience">
              <button> &lt; Back</button>
            </Link>
            <button id="dis" disabled={true}>
              Next &gt;
            </button>
          </div>
          <div>
            <Link to="/success">
              <button id="butto">DOWNLOAD RESUME</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Extra;
