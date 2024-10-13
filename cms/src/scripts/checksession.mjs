
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SessionRedirect = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const stud = sessionStorage.getItem("student_id");
    const admin = sessionStorage.getItem("admin_id");
    const staff = sessionStorage.getItem("staff_id");

    
    if (!stud && !admin && !staff) {
      if (location.pathname !== "/login") {
        navigate("/login");
      }
    }

    if(location.pathname == "/login/faculty"  && staff ){
      navigate("/facultydashboard")
      
    }
    else if(location.pathname == "/login/admin" && admin) 
      {
        navigate("/dashboard")
      }
      else if (location.pathname == "/login/student" && stud){

        navigate("/studentdashboard")
      }
    
  }, [navigate, location.pathname]);

  return null;
};

export default SessionRedirect;
