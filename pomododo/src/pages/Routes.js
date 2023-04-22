import * as React from 'react'
import { Route, Routes } from "react-router-dom";

import FocusPage from "./FocusPage"
import HomePage from "./HomePage"

const Router = () => {

  return (
    <Routes>
      <Route exact path="/timetofocus" element={<FocusPage />} />
      <Route exact path="/selectmethod" element={<HomePage />} />
    </Routes>
  );
}

export default Router;