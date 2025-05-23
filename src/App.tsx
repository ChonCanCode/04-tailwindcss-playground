import { Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout.tsx";
import Responsive from "./Responsive.tsx";
import CustomStyle from "./CustomStyle.tsx";

function App() {
  return (
    <div>
      <nav className="flex space-x-4">
        <Link className="font-bold" to="/">
          Home
        </Link>
        <Link to="/layout">Layout Page</Link>
        <Link to="/responsive">Responsive Page</Link>
        <Link to="/customstyle">Custom Style</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome to Tailwindcss playground</h1>} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/responsive" element={<Responsive />} />
        <Route path="/customstyle" element={<CustomStyle />} />
      </Routes>
    </div>
  );
}

export default App;
