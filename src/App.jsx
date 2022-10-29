import Create from "./pages/Create";
import Notes from "./pages/Notes";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default App;
