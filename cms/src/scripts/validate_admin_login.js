import axios from 'axios'

const validateadminlogin = async (username)=>{
  try {
    const response = await axios.post('http://localhost:5472/services/validateadminlogin', { 
        email: username
    });

    
    if(response && response.data.Message == "OTP Sent Successfully" && response.data.OTP) {
        
        sessionStorage.setItem('otp', response.data.OTP);
        sessionStorage.setItem('admin_id', response.data._id);
        sessionStorage.setItem('college_id', response.data.college);
        sessionStorage.setItem('profile_pic',response.data.profile_pic)
        return true

        
         
    } else {
      
        console.log('Admin Not Found')
        return false
    }

} catch (error) {
    // Log and handle the error
    console.error('Error during login:', error);
}

    




}


export default validateadminlogin;