import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import NewsHome from "./NewsComponenet/NewsHome";
import MainNewsDetails from "./NewsComponenet/MainNewsDetails";
import SignUpForm from "./NewsComponenet/SignUp";
import Notification from "./NewsComponenet/Notification";
import LoginForm from "./NewsComponenet/SignIn";
import Welcome from "./NewsComponenet/Welcome";
import Onboarding from "./NewsComponenet/Onboarding";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Onboarding />} />
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/Home" element={<NewsHome />} />
          <Route path="/Signup" element={<SignUpForm />} />
          <Route path="/SignIn" element={<LoginForm />} />

          <Route path="/news/:id" element={<MainNewsDetails />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
