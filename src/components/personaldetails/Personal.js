import React from "react";
import "./person.css";
import "../../../src/wp.css";
import { Link } from "react-router-dom";

function Personal() {
  return (
    <div>
      <div className="wrap">
        <form>
          <input id="title" value="Personal Details"></input>
          <div>
            <input id="pi" type="text" placeholder="First Name*"></input>
            <input id="pi" type="text" placeholder="Last Name*"></input>
          </div>
          <div>
            <input id="pi" type="email" placeholder="Email*"></input>
            <input id="pi" type="number" placeholder="Phone Number*"></input>
          </div>
          <div>
            <input id="pi" type="text" placeholder="Your Website*"></input>
            <input id="pi" type="text" placeholder="GitHub*"></input>
          </div>

          <div>
            <input id="pi" type="text" placeholder="Linked in*"></input>
            <input id="pi" type="text" placeholder="Twitter*"></input>
          </div>
          <div>
            <input id="pi" type="text" placeholder="Facebook*"></input>
            <input id="pi" type="text" placeholder="Instagram*"></input>
          </div>
          <div>
            <button id="dis" disabled={true}>
              &lt; Back
            </button>
            <Link to="/education">
              <button>Next &gt;</button>
            </Link>
          </div>
          <div>
            <p id="para">Page 1</p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Personal;
