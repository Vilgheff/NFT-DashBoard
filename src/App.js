import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "containers/Home/Home";
import { About } from "containers/About/About";
import { Login } from "containers/Login";
import { NotFoundPage } from "containers/404NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
    </Routes>
  );
}

export default App;
