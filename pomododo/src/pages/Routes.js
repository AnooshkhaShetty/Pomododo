import * as React from 'react'
import { Route, Routes } from "react-router-dom";

import FocusPage from "./FocusPage"

const Router = () => {

  return (
    <Routes>
      <Route exact path="/timetofocus" element={<FocusPage />} />
    </Routes>
  );
}

export default Router;