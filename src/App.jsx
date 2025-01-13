import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import NewsHome from "./NewsComponenet/NewsHome";
import MainNewsDetails from "./NewsComponenet/MainNewsDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<NewsHome />} />

          <Route path="/news/:id" element={<MainNewsDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
