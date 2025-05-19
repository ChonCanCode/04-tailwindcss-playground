import { Routes, Route, Link } from "react-router-dom";
import Layout from "./layout";
import Responsive from "./Responsive.tsx";

function App() {
  return (
    <div>
      <nav className="flex space-x-4">
        <Link className="font-bold" to="/">
          Home
        </Link>
        <Link to="/layout">Layout Page</Link>
        <Link to="/responsive">Responsive Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/responsive" element={<Responsive />} />
      </Routes>
    </div>
  );
}

export default App;
