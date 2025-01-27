import axios from 'axios'

const validatestudlogin = async (username)=>{
  try {
    const response = await axios.post('http://localhost:5472/services/validatestudlogin', { 
        email: username
    });

    
    if(response && response.data.Message == "OTP Sent Successfully" && response.data.OTP) {
        
        sessionStorage.setItem('otp', response.data.OTP);
        sessionStorage.setItem('student_id', response.data._id);
        sessionStorage.setItem('profile_pic',response.data.profile_pic)
        return true

        
         
    } else {
      
        console.log('Student Not Found')
        return false
    }

} catch (error) {
    // Log and handle the error
    console.error('Error during login:', error);
}

    




}


export default validatestudlogin;