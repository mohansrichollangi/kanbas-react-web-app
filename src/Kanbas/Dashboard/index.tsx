import "../../libs/font-awesome/css/font-awesome.css"
import "./index.css"
import { Link } from "react-router-dom";
import { courses } from "../Database";

function Dashboard() {
  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      <h2>Published Courses (12)</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <div className="wd-kebab">
                  <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>
                <img src={`/images/${course.image}`} className="card-img-top" style={{ height: 150 }} />

                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                  <p className="card-text">{course.name}</p>

                  <Link to="#" className="btn btn-primary wd-mar-right5"><i className="fa fa-bullhorn" aria-hidden="true"></i></Link>
                  <Link to="#" className="btn btn-primary"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}

export default Dashboard;