import axios from 'axios'
const updateStudentDetails = async (email,mobile,Student_Name) => {
    let sid = sessionStorage.getItem("student_id")
    try {
      const response = await axios.post('http://localhost:5472/services/updatestudentdetails', {
        studentId :sid,   
        Email: email,  
        Mobile: mobile,  // New mobile number
        Student_Name: Student_Name,  // New student name
      });

      if (response.data){

        return true
      }
      else{
        return false
      }
    } catch (error) {
      console.error('Error updating student details:', error);
      setResponseMessage('Error updating student details');
    }
  };
export default updateStudentDetails;