import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route element={<Home />} path="/" />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
