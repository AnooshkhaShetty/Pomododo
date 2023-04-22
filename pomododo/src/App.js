// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import FocusPage from "./pages/FocusPage";

// function App() {
//   return (
//     <div className="flex flex-col h-screen">
//       <Routes>
//         <Route path="/timetofocus" element={<FocusPage />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import * as React from 'react';
import Router from "./pages/Routes";

const App = () => {
  return (
      <div className="FocusPage">
        <Router />
      </div>
  );
}

export default App;