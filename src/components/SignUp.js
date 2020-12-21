import React ,{useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SignUp() {
    const [startDate, setStartDate] = useState(new Date());
    const [isDate,setIsDate]=useState(false);
    return (
        <div className="logInMain">
        <div className="logoContainer">
              <h1 className="title-login">Anilove</h1>
              <h3 className="decs-login">The place where animals are the main topic.</h3>
        </div> 
        <div className="loginContainer">
        <div className="formContainer">
          <h1 className="loginText">Create an account</h1>
          <form>
          <input type="text" name="username" placeholder="Username"/> 
          <h1 className="loginText"/>
          <input type="email" name="email" placeholder="E-mail"/> 
          <h1 className="loginText"/>
          <input type="password" name="password" placeholder="Password"/>
          <h1 className="loginText"/>
          <DatePicker placeholderText="Birthday" selected={isDate?startDate:null} onChange={date => {setStartDate(date);
                                                                                         setIsDate(true);}} />
          <h1 className="loginText"/>
          <input type="submit" className="submitButton" value="Create account"/> 
          <h1 className="loginText"/>
          <a href="/" className="forgotPass">Do you have an account?</a>
          </form>
        </div>
        </div>                
      </div>
    )
}

export default SignUp;
