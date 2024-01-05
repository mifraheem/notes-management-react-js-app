import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllNotes from "./components/AllNotes.jsx";
import AddNote from "./components/AddNote.jsx";
import AboutMe from "./components/AboutMe.jsx";

const routes = createBrowserRouter([
  {
    path: "/notes-management-react-js-app",
    element: <App />,
    children: [
      {
        path: "/notes-management-react-js-app",
        element: <AllNotes />,
      },
      {
        path: "/notes-management-react-js-app/add-notes",
        element: <AddNote />,
      },
      {
        path: "/notes-management-react-js-app/about",
        element: <AboutMe />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
