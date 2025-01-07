import { Link } from "react-router-dom";
import {auth, signInUser} from "../hooks/firebase";
import {useState} from "react";
import Userinput from "./Userinput";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
// import Chatroom from "../chatroom/Chatroom";
// import Signup from "./Signup";
const Login = () => {
  const [inputFields, setInputFields] = useState({
    username: "",
    email: "",
    phonenumber: "",
    password: ""
  })
  const navigate = useNavigate();

  const changeInputs = (e) => {
    const { name, value } = e.target;
    setInputFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const login=()=>{
    if (inputFields.username && inputFields.password && inputFields.email) {
      signInUser(auth, inputFields.email, inputFields.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        user.displayName = inputFields.username;
        alert("Account Found")
        navigate("/chatroom", { state: { username: user.displayName, uid: user.uid} }); // Pass user as state
        // window.location = "chatroom"
        
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      });
    }else{
      alert("please fill in all the fields")
    }
  }



  return (
    <div className="login-cont">
      <div className="login-inner-cont">
        <h2>Log Into Your Account</h2>
        <Userinput 
          type="text" 
          placeholder="Enter Username" 
          name="username" 
          value={inputFields.username}
          onChange={changeInputs}
        />

        <Userinput 
          type="email" 
          placeholder="Enter Email" 
          name="email" 
          value={inputFields.email}
          onChange={changeInputs}
        />

        {/* <Userinput
          type="tel"
          placeholder="Enter Phone Number"
          name="phonenumber"
          value={inputFields.phonenumber}
          onChange={changeInputs}
        /> */}

        <Userinput 
          type="password" 
          placeholder="Enter Password" 
          name="password" 
          value={inputFields.password}
          onChange={changeInputs}
        />
        <Button onClick={login} name="Login"/>
        <p>
          Don't have an account?{" "}
          <Link to="signup" className="signup-link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login