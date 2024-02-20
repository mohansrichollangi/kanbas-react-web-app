import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";
import { courses } from "../../Database";
function CourseNavigation() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);

  const links=[
                "Home", "Modules", "Piazza", 
                "Zoom", "Assignments","Quizzes", 
                "Grades", "People", "Panopto Video",
                "Discussions", "Announcements", "Pages",
                "Files", "Rubrics", "Outcomes", 
                "Collaborations", "Syllabus", "Settings"
            ];
  const { pathname } = useLocation();
  return (

    <div className="d-none d-md-block">
      <div className="ps-3 mb-3 wd-fs-12" style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}><em>{course?.name} Spring</em></div>

      <ul className="wd-navigation">
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
            <Link to={link}>{link}</Link>
          </li>
        ))}
      </ul>
    </div>

  );
}
export default CourseNavigation;