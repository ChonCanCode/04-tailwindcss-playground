import { Routes, Route, Link } from "react-router-dom";
import Layout from "./layout";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/layout">Layout Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/layout" element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
