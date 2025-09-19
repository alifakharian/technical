import { HashRouter, Route, Routes } from "react-router-dom";
import Productitem from "../Products/Productitem";
import Singleproduct from "../Products/Singleproduct";
import Nav from "../Nav/Nav";
import Register from "../Register/Register";
import Home from "../Home/Home";
import Search from "../Search/Search";
import Searchresult from "../Search/Searchresult";

function Wapper() {
  return (
    <>
      <HashRouter>
        <Nav />
        <Search/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Productitem />} />
          <Route path="/searchresult" element={<Searchresult/>} />
          <Route path="/product/:i" element={<Singleproduct />} />
          <Route path="/Registerpage" element={<Register />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default Wapper;
