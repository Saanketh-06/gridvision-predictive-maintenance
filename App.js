import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";
import Alerts from "./pages/Alerts";
import Analytics from "./pages/Analytics";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/assets"
          element={<Assets />}
        />

        <Route
          path="/alerts"
          element={<Alerts />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;