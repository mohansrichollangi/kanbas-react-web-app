import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import Kanbas from "./Kanbas";
import { HashRouter, Link } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
function App() {
   return (
      <HashRouter>
         <div>
            {/* <Link to="/Labs/a3">A3</Link> |
            <Link to="/Kanbas">Kanbas</Link> |
            <Link to="/hello">Hello</Link> | */}

            <Routes>
               <Route path="/" element={<Navigate to="/Labs/a3" />} />
               <Route path="/Labs/*" element={<Labs />} />
               <Route path="/kanbas/*" element={<Kanbas />} />
               <Route path="/hello" element={<HelloWorld />} />
            </Routes>
         </div>
      </HashRouter>
   );
}


export default App;

