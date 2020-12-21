import React from 'react';

function SignIn() {

    function handleSubmit(event){
        alert("Heeyyy")
        event.preventDefault();
      }
    return (
        <div className="logInMain">
      <div className="logoContainer">
            <h1 className="title-login">Anilove</h1>
            <h3 className="decs-login">The place where animals are the main topic.</h3>
      </div> 
      <div className="loginContainer">
      <div className="formContainer">
        <h1 className="loginText">Sign In</h1>
        <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="E-mail"/> 
        <h1 className="loginText"/>
        <input type="password" name="password" placeholder="Password"/>
        <h1 className="loginText"/>
        <input type="submit" className="submitButton" value="Sign In"/> 
        <h1 className="loginText"/>
        <a href="#" className="forgotPass">Did you forgot your password?</a>
        <h1 className="loginText"/>
        <a href="signup" className="gotoSignUp">Sign Up</a>
        </form>
      </div>
      </div>                
    </div>
    )
}

export default SignIn;
