import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import "./index.css"
import SmallNav from "./Navigation/NavSmallScreen";

function Courses() {
    const { courseId } = useParams();
    const location = useLocation();
    const course = courses.find((course) => course._id === courseId);
    const displayTextForPath = () => {
        const path = location.pathname;
        if (path.includes("/Home")) return "Home";
        if (path.includes("/Modules")) return "Modules";
        if (path.includes("/Piazza")) return "Piazza";
        if (path.includes("/Assignments")) return "Assignments";
        if (path.includes("/Grades")) return "Grades";
        return "";
    };
    return (
        <div>
            <SmallNav />
            <div className="d-none d-md-block">
                <div className="d-flex justify-content-between my-3 wd-div-pl-20">
                    <div className="d-flex">
                        <div className="col-auto" style={{ marginTop: "6px" }}>
                            <HiMiniBars3 style={{ marginRight: "10px" }} />{" "}
                        </div>
                        <div className="col text-start d-flex align-items-center wd-home-pl">
                            <a href="#" className="d-flex align-items-center wd-txt-dec-red">
                                <p className="mb-0 d-inline">Course {course?.name}</p>
                                <i
                                    className="fa fa-chevron-right mx-2"
                                    style={{ textDecoration: "none", color: "lightgrey", fontSize: "16px" }}
                                    aria-hidden="true"
                                ></i>
                                <p className="mb-0 d-inline" id="wd-txt-dec-black">{displayTextForPath()}</p>
                            </a>
                        </div>
                    </div>
                    <div className="text-end wd-div-mr-20">
                        <button className="btn wd-btn-gray wd-sharp-corners">
                            <i className="fa fa-binoculars"></i> Student view
                        </button>
                    </div>
                </div>
                <div style={{
                    paddingLeft: "10px",
                    paddingRight: "15px"

                }}><hr /></div>

            </div>

            <div className="wd-flex-row">
                <div className="d-none d-md-block"><CourseNavigation /></div>
                <div
                    className="d-flex flex-column w-100"
                    style={{ left: "320px", top: "57px" }} >
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
                </div>
            </div>
        </div>

    );
}

export default Courses;