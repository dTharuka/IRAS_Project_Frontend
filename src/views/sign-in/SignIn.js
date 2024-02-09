import React, {useState} from 'react';
import '../sign-in/SignIn.css';
import {useNavigate} from "react-router";


const SignIn = () => {

    const [logInUsername, logInUsernameChange] = useState("");
    const [logInEmail, logInEmailChange] = useState("");

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        switch (id) {
            case "logInUsername":
                logInUsernameChange(value);
                break;
            case "logInEmail":
                logInEmailChange(value);
                break;
            default:
                break;
        }
    };

    const navigate=useNavigate();

    const handleNavigateSignUp = () => {
        navigate('/sign-up');
    }

    const handleNavigateSignIn = () => {

        let username=localStorage.getItem("IRASUserName");
        let email=localStorage.getItem("IRASEmail");

        if(username==="null" && email==="null"){
            alert("please signup..!");
        }else if(username===logInUsername && email===logInEmail){
             navigate('/dashboard/dashboard');
        }else {
            alert("enter correct values");
        }

    }

    return (

        <div className="container text-center">
            <div className="row">
                <div className="col">

                </div>
                <div className="col pt-xl-4 px-xl-5">
                    <div className="px-xl-5 pt-xl-0 pb-xl-5 mb-xl-5 mt-xl-0  rounded-4 shadow">

                        <div className="mb-3 mb-xl-5 mt-xl-5 d-flex justify-content-center">
                            <i className="bi bi-instagram mt-xl-5" style={{ fontSize: "100px"}}> </i>
                        </div>

                        <label className="form-check-label d-flex justify-content-center col-12 mb-5" htmlFor="gridCheck1">Unlock Your Instagram Potential Here.</label>


                        <div className="mb-3 mt-xl-4">
                            <label htmlFor="formGroupExampleInput" className="form-label d-flex justify-content-start">User Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="logInUsername"
                                placeholder="Enter your user name"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="formGroupExampleInput2" className="form-label d-flex justify-content-start">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="logInEmail"
                                placeholder="Enter your email"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="mb-3 mb-xl-4 mt-xl-4 d-flex justify-content-center align-items-center">
                            <button id="signInButton" className="mb-xl-4 px-xl-4 py-xl-1 rounded-2 border-0 text-white" onClick={handleNavigateSignIn}>Sign in</button>
                        </div>

                        <div className="d-flex justify-content-center align-items-center mb-xl-4">
                            <div>
                                <h5>Don't you have an account ? </h5>
                            </div>
                            <div>
                                <h5 className="cursor-pointer" style={{color:"#5D87FF"}} onClick={handleNavigateSignUp}>Sign up</h5>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col">

                </div>
            </div>
        </div>
    );
};

export default SignIn;
