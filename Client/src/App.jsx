import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <Router>
      <div className="bg-gray-200">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<AuthLayout />} />
          <Route path="/register" element={<AuthLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
