import { Link, Route, Routes } from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Nav from "../Nav";
function Labs() {
  return (
    <>
      <Nav />
      <hr />
      <h1>Labs</h1>
      {/* <Link to="/Labs/a3">A3</Link> |
   <Link to="/Kanbas">Kanbas</Link> |
   <Link to="/hello">Hello</Link> | */}
      <Link to="/Labs/a3">Assignment 3</Link> |
      <Link to="/Labs/a4">Assignment 4</Link> |
      <Routes>
        <Route path="/a3/*" element={<Assignment3 />} />
        <Route path="/a4" element={<Assignment4 />} />
      </Routes>

      {/* <Assignment3 /> */}
    </>
  )
}


export default Labs;
