import React, {useState} from 'react';
import '../view-profile/ViewProfile.css';
import Select from "react-select";
import {countries} from "countries-list";
import {useNavigate} from "react-router";

const countryOptions = Object.keys(countries).map((code) => ({
    value: code,
    label: countries[code].name
}));


const ViewProfile = () => {

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

    const [isEditMode, setEditMode] = useState(false);
    const [isDeleteMode, setDeleteMode] = useState(false);

    const handleEditIcon = () => {
        setEditMode(!isEditMode);
    }

    const handleDeleteIcon = () => {
        setDeleteMode(!isDeleteMode);
    }


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
            color:'gray'
        }),
    };

    const clearText = () => {
        const ids = ["firstName", "lastName", "userName", "email", "contactNumber", "gender", "country", "state", "city"];

        ids.forEach(id => {
            document.getElementById(id).value = "";
        });
    }

    const handleUpdate = () => {

        const countryValue = typeof country === 'object' ? country.label : country;
        const genderValue = typeof gender === 'object' ? gender.label : gender;
        const alertMessage = `First Name: ${firstName}\nLast Name: ${lastName}\nUser Name: ${userName}\nEmail: ${email}\nPhone: ${contactNumber}\nGender: ${genderValue}\nCountry: ${countryValue}\nState: ${state}\nCity: ${city}`;

        localStorage.setItem('IRASUserName',userName)
        localStorage.setItem('IRASEmail', email);
        clearText();
        alert("successful updated");
    };

    const handleDelete = () => {
        localStorage.setItem('IRASUserName',"null")
        localStorage.setItem('IRASEmail', "null");
        clearText();
        alert("successful deleted");
        navigate("/");
    }


    return (
        <div className="text-center">
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
                                        <i className="bi bi-instagram " style={{ fontSize: "500%" }}> </i>
                                    </div>
                                    <div className="col-xl-1">
                                        <div className="col-xl-12">
                                            <i className="bi bi-pencil-square" style={{ fontSize: "120%" }} onClick={handleEditIcon}> </i>
                                        </div>
                                        <div className="col-xl-12">
                                            <i className="bi bi-trash" style={{ fontSize: "120%" }} onClick={handleDeleteIcon}> </i>
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
                                        // placeholder="First Name"
                                        placeholder="Dakshina"
                                        disabled={!isEditMode}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="col-xl-2"> </div>

                                <div className="col-xl-5 px-xl-1">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="lastName"
                                        // placeholder="Last Name"
                                        placeholder="Rajapaksha"
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
                                        // placeholder="User Name"
                                        placeholder="dtharuka"
                                        disabled={!isEditMode}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="col-xl-2"> </div>

                                <div className="col-xl-5 px-xl-1">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        // placeholder="Email"
                                        placeholder="dakshina@gmail.com"
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
                                        // placeholder="Phone"
                                        placeholder="0713953595"
                                        disabled={!isEditMode}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="col-xl-2"> </div>

                                <div className="col-xl-5 px-xl-1">
                                    <Select
                                        id="gender"
                                        options={[
                                            { value: 'Male', label: 'Male' },
                                            { value: 'Female', label: 'Female' },
                                            { value: 'Other', label: 'Other' }
                                        ]}
                                        // placeholder="Gender"
                                        placeholder="Male"
                                        styles={placeholderStyles}
                                        onChange={handleGenderChange}
                                        isDisabled={!isEditMode}
                                    />
                                </div>
                            </div>

                            <div className="row mb-xl-3">
                                <div className="col-xl-5 px-xl-1">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="state"
                                        // placeholder="State"
                                        placeholder="Galle"
                                        disabled={!isEditMode}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                <div className="col-xl-2"> </div>

                                <div className="col-xl-5 px-xl-1">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="city"
                                        // placeholder="City"
                                        placeholder="Balapitiya"
                                        disabled={!isEditMode}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="row mb-xl-4">
                                <div className="col-xl-5 px-xl-1">
                                    <Select
                                        id="country"
                                        options={countryOptions}
                                        onChange={handleCountryChange}
                                        // placeholder="Country"
                                        placeholder="Sri Lanka"
                                        styles={placeholderStyles}
                                        isDisabled={!isEditMode}
                                    />
                                </div>

                                <div className="col-xl-2"> </div>

                                <div className="col-xl-5 px-xl-1">
                                    <div className="text-center">
                                        <div className="row">
                                            <div className="col-xl-9 d-flex justify-content-start">
                                                <button type="button" className="btn text-sm-start bg-warning text-white mb-3" onClick={handleUpdate} disabled={!isEditMode} style={{ fontSize: "12px" }} >Update Profile</button>
                                                <button type="button" className="btn bg-danger text-white mb-3" disabled={!isDeleteMode} onClick={handleDelete} style={{ fontSize: "12px" }}>Delete Profile</button>
                                            </div>
                                            <div className="col-xl-3 d-flex justify-content-start">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*<div className="col-xl-12 px-xl-3">*/}

                            {/*    <input*/}
                            {/*        type="text"*/}
                            {/*        className="form-control"*/}
                            {/*        id="inputPassword2"*/}
                            {/*        placeholder="Country"*/}
                            {/*        disabled={!isEditMode}*/}
                            {/*    />*/}
                            {/*</div>*/}

                            {/*<div className="col-xl-12 mb-xl-4">*/}
                            {/*    <div className="text-center">*/}
                            {/*        <div className="row">*/}
                            {/*            <div className="col-xl-6 d-flex justify-content-end">*/}
                            {/*                <button type="button" className="btn bg-warning text-white mb-3" disabled={!isEditMode}>Update Profile</button>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-xl-6 d-flex justify-content-start">*/}
                            {/*                <button type="button" className="btn bg-danger text-white mb-3" disabled={!isDeleteMode}>Delete Profile</button>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </form>
                    </div>
                </div>
                <div className="col-xl-1 ">

                </div>
            </div>
        </div>
    );
};

export default ViewProfile;
