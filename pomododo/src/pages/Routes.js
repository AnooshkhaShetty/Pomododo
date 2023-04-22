import * as React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";

import FocusPage from "./FocusPage"
import HomePage from "./HomePage"
import LoginPage from "./LoginPage"

const Router = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/login" replace={true}/>}/>
      <Route exact path="/timetofocus" element={<FocusPage />} />
      <Route exact path="/selectmethod" element={<HomePage />} />
      <Route exact path="/login" element={<LoginPage />}/>
    </Routes>
  );
}

export default Router;