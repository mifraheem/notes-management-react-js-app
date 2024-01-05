import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Header({ currentTab, setCurrentTab }) {
  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link
              to="/notes-management-react-js-app"
              className={`nav-link ${currentTab === "Home" && "active"}`}
              onClick={() => setCurrentTab("Home")}
              aria-current="page"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/notes-management-react-js-app/add-notes"
              className={`nav-link ${currentTab === "Add-Note" && "active"}`}
              onClick={() => setCurrentTab("Add-Note")}
            >
              Add Notes
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/notes-management-react-js-app/about"
              className={`nav-link ${currentTab === "about" && "active"}`}
              onClick={() => setCurrentTab("about")}
            >
              About
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
