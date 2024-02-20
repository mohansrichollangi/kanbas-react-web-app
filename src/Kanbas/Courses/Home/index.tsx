import ModuleList from "../Modules/List";
import Status from "../Status";
import "./index.css"
function Home() {
    return (
        <div className="w-100" style={{ marginTop: "20px" }}>
            <div className="d-flex flex-column flex-lg-row w-100">
                {/* <h2>Home</h2> */}
                <div className="flex-lg-row w-100">
                    <ModuleList />
                </div>
                <div className="flex-grow-0 me-2 pe-4 ms-2" style={{ maxWidth: "280px" }}>
                    <Status />
                </div>
            </div>
        </div>
    );
}
export default Home;