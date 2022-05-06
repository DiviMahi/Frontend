import React from "react";
import "../../../src/wp.css";
import "./Project.css";

import { Link } from "react-router-dom";

function Project() {
  return (
    <div>
      <div className="wrap">
        <form>
          <input id="title" value="Project Developed"></input>
          <h3 id="id1">Project 1</h3>
          <div>
            <input id="inid" type="text" placeholder="Title *"></input>
          </div>
          <div>
            <input id="inid" type="url" placeholder="Link *"></input>
          </div>
          <div>
            <input id="inid" type="text" placeholder="Description *"></input>
          </div>

          <h3 id="id1">Project 2</h3>
          <div>
            <input id="inid" type="text" placeholder="Title *"></input>
          </div>
          <div>
            <input id="inid" type="url" placeholder="Link *"></input>
          </div>
          <div>
            <input id="inid" type="text" placeholder="Description *"></input>
          </div>
          <div>
            <Link to="/education">
              <button> &lt; Back</button>
            </Link>
            <Link to="/experience">
              <button>Next &gt; </button>
            </Link>
          </div>

          <p id="para1">Page 3</p>
        </form>
      </div>
    </div>
  );
}

export default Project;
