import React from "react";
import "./headstyle.css";
function Header() {
  return (
    <div>
      <form id="fm">
        <nav>
          <div className="head">
            <p className="border-menu"></p>
            <h4 id="par2">
              <b>Resume Builder</b>
            </h4>
            <h4 id="par3">
              <b>LOGIN</b>
            </h4>
          </div>
        </nav>
      </form>
    </div>
  );
}

export default Header;
