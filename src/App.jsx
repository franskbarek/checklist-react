import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "./pages";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/ >
        <Route path="/home" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  );
}
