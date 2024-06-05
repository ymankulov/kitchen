import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/inedx";
import AdminCreate from "./components/AdminCreate";
import Home from "./components/Home";
import Basket from "./components/basket";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<AdminCreate />} />
        <Route path="/basket" element={<Basket/>} />
      </Routes>
    </div>
  );
}

export default App;
