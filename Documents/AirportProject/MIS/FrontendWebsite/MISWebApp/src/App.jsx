import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter as Router,
} from "react-router-dom";

import "./App.css";
import LandingScreen from "./Pages/LandingScreen";
import LoginPage from "./Pages/LoginPage";
import ForgotPassword from "./Pages/ForgotPassword";
import OTP from "./Pages/OTP";
import ResetPassword from "./Pages/ResetPassword";
import Home from "./Pages/Home";
import CitySide from "./Pages/CitySide";
import AirSide from "./Pages/AirSide";
import Terminal from "./Pages/Terminal";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<LandingScreen />} />
      <Route path="login/">
        <Route index element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="otp" element={<OTP />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>
      <Route path="home">
        <Route index element={<Home />} />
        <Route path="city-side" element={<CitySide />} />
        <Route path="air-side" element={<AirSide />} />
        <Route path="terminal" element={<Terminal />} />
      </Route>
    </Route>
  )
);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
