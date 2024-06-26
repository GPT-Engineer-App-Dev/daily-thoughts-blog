import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DeletePost from "./pages/DeletePost.jsx";
import AddPost from "./pages/AddPost.jsx";
import ColorModeSwitcher from "./components/ColorModeSwitcher";

function App() {
  return (
    <Router>
      <ColorModeSwitcher />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/add-post" element={<AddPost />} />
        <Route path="/delete-post" element={<DeletePost />} />
      </Routes>
    </Router>
  );
}

export default App;
