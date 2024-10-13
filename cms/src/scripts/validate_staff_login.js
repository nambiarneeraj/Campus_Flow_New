import axios from 'axios'

const validatestafflogin = async (username)=>{
  try {
    const response = await axios.post('http://localhost:5472/services/validatestafflogin', { 
        email: username
    });

    
    if(response && response.data.Message == "OTP Sent Successfully" && response.data.OTP) {
        
        sessionStorage.setItem('otp', response.data.OTP);
        sessionStorage.setItem('staff_id', response.data._id);
        sessionStorage.setItem('profile_pic',response.data.profile_pic)
        sessionStorage.setItem('subject',response.data.subject)
        return true

        
         
    } else {
      
        console.log('Student Not Found')
        return false
    }

} catch (error) {
    
    console.error('Error during login:', error);
}

    




}


export default validatestafflogin;