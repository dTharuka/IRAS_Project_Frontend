import React, {useEffect, useState} from 'react';
import '../view-profile/ViewProfile.css';
import {useNavigate} from "react-router";
import {fetchAllUsers} from "../../service/Service";
import axios from "axios";


const ViewProfile = () => {

    const navigate = useNavigate();


    const [firstName, firstNameChange] = useState("");
    const [lastName, lastNameChange] = useState("");
    const [userName, userNameChange] = useState("");
    const [email, emailChange] = useState("");
    const [contactNumber, contactNumberChange] = useState("");
    const [gender, setGender] = useState("");
    const [country, setCountry] = useState('');
    const [state, stateChange] = useState("");
    const [city, cityChange] = useState("");

    const [isEditMode, setEditMode] = useState(false);
    const [isDeleteMode, setDeleteMode] = useState(false);

    //
    useEffect(() => {
        fetchAllUsers()
            .then((result) => {
                let user_name = localStorage.getItem("IRASUserName");
                let e_mail = localStorage.getItem("IRASEmail");

                for (let resp of result.data) {
                    if (user_name === resp.username || e_mail === resp.email) {
                        console.log('hello', resp)

                        firstNameChange(resp.firstName);
                        lastNameChange(resp.lastName);
                        userNameChange(resp.userName);
                        emailChange(resp.email);
                        contactNumberChange(resp.contactNumber);
                        setGender(resp.gender);
                        setCountry(resp.country);
                        stateChange(resp.state);
                        cityChange(resp.city);

                        localStorage.setItem("mongoKey",resp.id);
                    }
                }


                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const handleEditIcon = () => {
        setEditMode(!isEditMode);
    }

    const handleDeleteIcon = () => {
        setDeleteMode(!isDeleteMode);
    }


    const handleInputChange = (event) => {
        const {id, value} = event.target;
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

    const handleUpdate = () => {

        // const countryValue = typeof country === 'object' ? country.label : country;
        // const genderValue = typeof gender === 'object' ? gender.label : gender;
        // const alertMessage = First Name: ${firstName}\nLast Name: ${lastName}\nUser Name: ${userName}\nEmail: ${email}\nPhone: ${contactNumber}\nGender: ${genderValue}\nCountry: ${countryValue}\nState: ${state}\nCity: ${city};


        const firstNameValue = document.getElementById('firstName')?.value;
        const lastNameValue = document.getElementById('lastName')?.value;
        const userNameValue = document.getElementById('userName')?.value;
        const emailValue = document.getElementById('email')?.value;
        const contactNumberValue = document.getElementById('contactNumber')?.value;
        const genderValue = document.getElementById('gender')?.value;
        const countryValue = document.getElementById('country')?.value;
        const stateValue = document.getElementById('state')?.value;
        const cityValue = document.getElementById('city')?.value;



        const reqastBody = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            userName: userNameValue,
            email: emailValue,
            contactNumber: contactNumberValue,
            gender: genderValue,
            country: countryValue,
            state: stateValue,
            city: cityValue,
        };

        let id=localStorage.getItem("mongoKey")

        axios.put(`http://127.0.0.1:8000/${id}`, reqastBody)
            .then((response) => {
                localStorage.setItem('IRASUserName', reqastBody.userName)
                localStorage.setItem('IRASEmail', reqastBody.email);
                alert("successful updated");
            })
            .catch((error) => {
                alert("Error");
            });

        // localStorage.setItem('IRASUserName', userName)
        // localStorage.setItem('IRASEmail', email);
        // clearText();
        // alert("successful updated");
    };

    const handleDelete = () => {
        localStorage.setItem('IRASUserName', "null")
        localStorage.setItem('IRASEmail', "null");
        clearText();
        alert("successful deleted");
        navigate("/");
    }


    return (<div className="text-center">
        <div className="row">
            <div className="col-xl-1">

            </div>
            <div className="col-xl-10">
                <div className="px-xl-5 py-xl-4">

                    <div className="shadow rounded-4 mb-xl-5 pt-xl-1 pb-xl-1">
                        <h1>Check Your Profile Deatils.</h1>
                    </div>

                    <form className="row d-flex justify-content-center g-3 pt-xl-4 mt-xl-0 shadow rounded-4">


                        <div className="container text-center">
                            <div className="row">
                                <div className="col-xl-11">
                                    <i className="bi bi-instagram " style={{fontSize: "500%"}}> </i>
                                </div>
                                <div className="col-xl-1">
                                    <div className="col-xl-12">
                                        <i className="bi bi-pencil-square" style={{fontSize: "120%"}}
                                           onClick={handleEditIcon}> </i>
                                    </div>
                                    <div className="col-xl-12">
                                        <i className="bi bi-trash" style={{fontSize: "120%"}}
                                           onClick={handleDeleteIcon}> </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className="mb-xl-4">Have a nice day my friend</h4>

                        <div className="row mb-xl-3">
                            <div className="col-xl-5 px-xl-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    value={firstName}
                                    disabled={!isEditMode}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="col-xl-2"></div>

                            <div className="col-xl-5 px-xl-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    value={lastName}
                                    disabled={!isEditMode}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="row mb-xl-3">
                            <div className="col-xl-5 px-xl-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="userName"
                                    value={userName}
                                    disabled={!isEditMode}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="col-xl-2"></div>

                            <div className="col-xl-5 px-xl-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    value={email}
                                    disabled={!isEditMode}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="row mb-xl-3">
                            <div className="col-xl-5 px-xl-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="contactNumber"
                                    value={contactNumber}
                                    disabled={!isEditMode}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="col-xl-2"></div>

                            <div className="col-xl-5 px-xl-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="gender"
                                    value={gender}
                                    disabled={!isEditMode}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="row mb-xl-3">
                            <div className="col-xl-5 px-xl-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="state"
                                    value={state}
                                    disabled={!isEditMode}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="col-xl-2"></div>

                            <div className="col-xl-5 px-xl-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    value={city}
                                    disabled={!isEditMode}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="row mb-xl-4">
                            <div className="col-xl-5 px-xl-1">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="country"
                                    value={country}
                                    disabled={!isEditMode}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="col-xl-2"></div>

                            <div className="col-xl-5 px-xl-1">
                                <div className="text-center">
                                    <div className="row">
                                        <div className="col-xl-9 d-flex justify-content-start">
                                            <button type="button"
                                                    className="btn text-sm-start bg-warning text-white mb-3"
                                                    onClick={handleUpdate} disabled={!isEditMode}
                                                    style={{fontSize: "12px"}}>Update Profile
                                            </button>
                                            <button type="button" className="btn bg-danger text-white mb-3"
                                                    disabled={!isDeleteMode} onClick={handleDelete}
                                                    style={{fontSize: "12px"}}>Delete Profile
                                            </button>
                                        </div>
                                        <div className="col-xl-3 d-flex justify-content-start">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-xl-1 ">

            </div>
        </div>
    </div>);
};

export default ViewProfile;