import { Link } from "react-router-dom";
import Nav from "../../Nav";

function HelloWorld() {
    return (

        <div>

            {/* <Link to="/Labs/a3">A3</Link> |
   <Link to="/Kanbas">Kanbas</Link> |
   <Link to="/hello">Hello</Link> | */}
            <h1>Hello World!</h1>
            <Nav />
        </div>
    )
};

export default HelloWorld;