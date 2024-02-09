import React, {useState} from 'react';
import {useNavigate} from "react-router";
import { countries } from 'countries-list';
import Select from 'react-select';
import '../sign-up/SignUp.css';
import axios from 'axios';



const countryOptions = Object.keys(countries).map((code) => ({
    value: code,
    label: countries[code].name
}));

const SignUp = () => {

    const navigate=useNavigate();

    const [firstName, firstNameChange] = useState("");
    const [lastName, lastNameChange] = useState("");
    const [userName, userNameChange] = useState("");
    const [email, emailChange] = useState("");
    const [contactNumber, contactNumberChange] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState('');
    const [state, stateChange] = useState("");
    const [city, cityChange] = useState("");


    const handleInputChange = (event) => {
        const { id, value } = event.target;
        switch (id) {
            case "firstName":
                firstNameChange(value);
                break;
            case "lastName":
                lastNameChange(value);
                break;
            case "userName":
                userNameChange(value);
                break;
            case "email":
                emailChange(value);
                break;
            case "contactNumber":
                contactNumberChange(value);
                break;
            case "state":
                stateChange(value);
                break;
            case "city":
                cityChange(value);
                break;
            default:
                break;
        }
    };

    const clearText = () => {
        const ids = ["firstName", "lastName", "userName", "email", "contactNumber", "gender", "country", "state", "city"];

        ids.forEach(id => {
            document.getElementById(id).value = "";
        });
    }




    const handleNavigateSignIn = () => {

        // localStorage.setItem('IRASUserName',userName)
        // localStorage.setItem('IRASEmail', email);
        // clearText();
        // alert("successful signup");
        // navigate('/sign-in');

        const countryValue = typeof country === 'object' ? country.label : country;
        const genderValue = typeof gender === 'object' ? gender.label : gender;

        const requestBody = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            contactNumber: contactNumber,
            gender: genderValue,
            country: countryValue,
            state: state,
            city: city,
        };
        // const alertMessage = `First Name: ${firstName}\nLast Name: ${lastName}\nUser Name: ${userName}\nEmail: ${email}\nPhone: ${contactNumber}\nGender: ${genderValue}\nCountry: ${countryValue}\nState: ${state}\nCity: ${city}`;

        axios.post("http://localhost:8000/api/v1/userRegistration/saveUserRegistration", requestBody)
            .then((response) => {
                // alert("Request successful.........");
                console.log(response.data);
                // alert(response.data.message);
                localStorage.setItem('IRASUserName',userName)
                localStorage.setItem('IRASEmail', email);

                clearText();
                alert("successful signup");
                navigate('/sign-in');
            })
            .catch((error) => {
                console.log(error);
                // showToastErrorMessage(error.response.data.message);
            });

        // alert(alertMessage);
        // navigate('/sign-in');
    };


    const handleGenderChange = (selectedOption) => {
        setCountry(selectedOption);
    };

    const handleCountryChange = (selectedOption) => {
        setGender(selectedOption);
    };

    const placeholderStyles = {
        placeholder: (provided) => ({
            ...provided,
            textAlign: 'left',
            color:'#4B4C4DFF'
        }),
    };


    return (

    <div style={{ overflowX: "hidden" }} className="text-center">
        <div className="row px-xl-5">
            <div className="col-xl-7  d-flex align-items-center justify-content-center">
                <div>
                    <h2>Hello Welcome to Instagram Reach Analyse System</h2>
                    <h2>Track the Instagram Reach of Your Account</h2>
                </div>

            </div>

            <div className="col-xl-5  px-xl-5 py-xl-3 ">
                <form className="row d-flex justify-content-center g-3 pt-xl-5 mt-xl-0 shadow rounded-4">


                    <i className="bi bi-instagram " style={{ fontSize: "500%" }}> </i>
                    <h4 className="mb-xl-4">Enter login deatils for sign up</h4>

                    <div className="row">
                        <div className="col-xl-6 px-xl-1">
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="First Name"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="col-xl-6 px-xl-1">
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Last Name"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="col-xl-12 px-xl-3">

                        <input
                            type="text"
                            className="form-control"
                            id="userName"
                            placeholder="User Name"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-xl-12 px-xl-3">

                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-xl-12 px-xl-3">

                        <input
                            type="text"
                            className="form-control"
                            id="contactNumber"
                            placeholder="Phone"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-xl-12 px-xl-3">
                        <Select
                            id="gender"
                            options={[
                                { value: 'Male', label: 'Male' },
                                { value: 'Female', label: 'Female' },
                                { value: 'Other', label: 'Other' }
                            ]}
                            placeholder="Gender"
                            styles={placeholderStyles}
                            onChange={handleGenderChange}
                        />
                    </div>

                    <div className="col-xl-12 px-xl-3">
                        <Select
                            id="country"
                            options={countryOptions}
                            onChange={handleCountryChange}
                            placeholder="Country"
                            styles={placeholderStyles}
                        />
                    </div>

                    <div className="col-xl-12 px-xl-3">

                        <input
                            type="text"
                            className="form-control"
                            id="state"
                            placeholder="State"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-xl-12 px-xl-3">

                        <input
                            type="text"
                            className="form-control"
                            id="city"
                            placeholder="city"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-xl-12 mb-xl-4">
                        <button type="button" id="signUp" style={{background:"#5D87FF"}} className="btn text-white mb-3" onClick={handleNavigateSignIn}>Confirm Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default SignUp;
