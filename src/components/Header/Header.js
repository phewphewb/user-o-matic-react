import React from "react";
import { useHistory } from "react-router-dom";
import ClockTime from "../ClockTime/ClockTime";
import Button from "../UI/button/Button";
import UsersInfo from "../User/UsersInfo";
import "./Header.scss";

function Header() {
  const history = useHistory();

  const clickBack = () => {
    history.goBack();
  };

  const clickTheme = () => {
    const ltlink = document.getElementById("lt-theme");
    const dtlink = document.getElementById("dt-theme");
    function changeTheme(state) {
      dtlink.disabled = !state; // false
      ltlink.disabled = state; // true
    }

    const theme = localStorage.getItem("theme");
    if (theme === "dt") {
      localStorage.setItem("theme", "lt");
      changeTheme(false);
    } else {
      localStorage.setItem("theme", "dt");
      changeTheme(true);
    }
  };

  return (
    <header>
      <div className="col left-panel">
        <ClockTime />
        <UsersInfo />
      </div>
      <div className="central-panel">
        <h1>User App</h1>
      </div>
      <div className="right-panel">
        <div className="row">
          <Button onClick={clickTheme}>Toggle theme</Button>
          {history.location.pathname !== "/" && <Button title="Back" onClick={clickBack} />}
        </div>
      </div>
    </header>
  );
}
export default Header;
