import React, { useState } from "react";
import "./index.css";
import "./modules.css"
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <div className="d-flex flex-column flex-lg-row w-100">
        <div className="flex-fill">
          <ul className="list-group wd-modules">

            <div className="wd-align-right wd-div-mb">
              <button className="btn wd-btn-gray wd-mr wd-btn-p-5 wd-border-rad-10">Collapse all</button>
              <button className="btn wd-btn-gray wd-mr wd-btn-p-5 wd-border-rad-10">View progress</button>
              <div className="dropdown wd-pr">
                <button className="btn wd-btn-gray dropdown-toggle wd-btn-p-5 wd-mr wd-border-rad-10" type="button"
                  id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa fa-check-circle-o text-success"></i> Publish all
                </button>
                <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#"><i
                    className="fa fa-check-circle text-success wd-border-rad-10"></i>
                    Publish all</a></li>
                  <li><a className="dropdown-item" href="#">Publish all modules and items</a>
                  </li>
                  <li><a className="dropdown-item" href="#">Unpublish</a></li>
                </ul>
              </div>
              <button className="btn btn-danger wd-mr wd-btn-p-5 wd-border-rad-10"><i className="fa fa-plus"
                aria-hidden="true"></i>
                Module</button>
              <button className="btn wd-btn-gray wd-mr wd-btn-p-5 wd-border-rad-10"><i
                className="fa fa-ellipsis-v ms-2 wd-icon-pr-8"></i></button>
            </div>

            <hr />
            
            <ul className="list-group wd-modules">
              {modulesList.map((module) => (
                <li
                  className="list-group-item"
                  onClick={() => setSelectedModule(module)}>
                  <div>
                    <FaEllipsisV className="me-2 wd-mr-n" />
                    <FaEllipsisV className="me-2" />
                    <button className="btn dropdown-toggle me-2"></button>

                    {module.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" style={{ marginRight: "5px" }} />
                      <button className="btn dropdown-toggle me-2" style={{ marginRight: "5px" }}></button>
                      <FaPlusCircle className="ms-2" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </div>
                  {selectedModule._id === module._id && (
                    <ul className="list-group">
                      {module.lessons?.map((lesson) => (
                        <li className="list-group-item">
                          <FaEllipsisV className="me-2 wd-mr-n" />
                          <FaEllipsisV className="me-2" />
                          {lesson.name}
                          <span className="float-end">
                            <FaCheckCircle className="text-success" />
                            <FaEllipsisV className="ms-2" />
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>

    </>
  );
}
export default ModuleList;