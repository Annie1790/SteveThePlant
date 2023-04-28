import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//Components
import WelcomeText from './components/welcomeText';
import Buttons from './components/buttons';

//Error handling
import ErrorPage from "./components/errorHandling";

//SASS 
import "./Style/index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <WelcomeText />
        <Buttons />
      </>,
    errorElement: <ErrorPage />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
