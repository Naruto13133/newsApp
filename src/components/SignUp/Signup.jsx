import React from 'react';

import './Signup.css';
import data from './countrycodewithname';
function Signup() {

    const [firstname,setFirstname] = React.useState("");
    const [lastname,setLastname] = React.useState("");
    const [nameinitialized,setNameinitialized] = React.useState("");
    const [occupation,setOccupation] = React.useState("Other");
    const [email,setEmail] = React.useState("");
    const [country,setCountry] = React.useState("Country");
    const [dialCode,setDialCode] = React.useState("Code +");
    const [adress,setAdress] = React.useState("");
    const [phone,setPhone] = React.useState("");
    const [bussinessName,setBussinessName] = React.useState("");
    const [formerror, setFormerror] = React.useState([]);
    const [zipcode,setZipCode] = React.useState("");
    

    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }

  const handelPhone=(e)=>{
    setPhone(e.target.value)
  }

  const handelBussinessName=(e)=>{
    setBussinessName(e.target.value)
  }

  const handleAdress=(e)=>{
    setAdress(e.target.value)
  }


    const handleInitials=(e)=>{
        setNameinitialized(e.target.value);
    }

    const handelFirstName =(e)=>{
        setFirstname(e.target.value);
    }

    const handelLastName =(e)=>{
        setLastname(e.target.value);
      }

    const handelOccupation=(e)=>{
        setOccupation(e.target.value)
    }

    const handelCountryEntry=(e)=>{
      setCountry(e.target.value)
    }

    const handelDialCode=(e)=>{
      setDialCode(e.target.value)
    }

    const handelEmail=(e)=>{
      setEmail(e.target.value)
    }

    const handelZipcode=(e)=>{
        setZipCode(e.target.value);
      }
  //   const showError=(e)=>{
  //     switch (e.target.name)
  //     {
  //       case "title":{
  //         setFormerror((prev) => ([...prev, "title"]));
  //         break;
  //       }
  //       case "firstname":{
  //         setFormerror((prev) => ([...prev, "firstname"]));
  //         break;
  //       }
  //        case "lastname":{
  //         setFormerror((prev) => ([...prev, "lastname"]));
  //         break;
  //       }
  //       case "occupation":{
  //         setFormerror((prev) => ([...prev, "occupation"]));
  //         break;
  //       }
  //       case "moreabout":{
  //         // setFormerror((prev) => ({ ...prev, occupation: "Please E Valid Occupation!" }));
  //         // break;
  //       }
  //       case "companyname":{
        
        
  //         setFormerror((prev) => ([...prev, "cpmpanyname"]));
  //         break;
        
  //     }
  //       case "zipcode":
  //         {
  //           // setFormerror((prev)=>({})
  //             setFormerror((prev) => ([...prev, "zipcode"]));
  //           break;
  //         }
  //         case "phonenumber":{
  //          setFormerror((prev) => ([...prev, "phonenumber"]));
  //           break;
          
  //       }
  //         case "dialcode":{
  //           if(e.target.value === "code +" )
  //         {
  //           setFormerror((prev) => ([...prev, "dialcode"]));
  //           break;
  //         }else{
  //           break;
  //         }
  //       }
  //       case "email":{
  //         if(e.target.value === "" )
  //       {
  //         setFormerror((prev) => ([...prev, "email"]));
  //         break;
  //       }else{
  //         break;
  //       }
  //     }
  //     case "country":{
  //       setFormerror((prev) => ([...prev, "country"]));
  //       break;
  //   }

  //   }
  // }

    const handelSubmit =(e)=>{
      e.preventDefault(); // Prevents the default form submission and page reload
      setFormerror([])
      if(!validateEmail(email))
      {
        setFormerror((prev) => ([...prev, "email"]));
      }
      if(phone ===  "" || phone.length < 10  ){
        setFormerror((prev)=>([...prev, "phonenumber"]))
      }
      if(zipcode.length < 5){
        setFormerror((prev)=>([...prev, "zipcode"]))
      }
      if(firstname.length < 3){
        setFormerror((prev)=>([...prev, "firstname"]))
      }
      if(lastname.length < 3){
        setFormerror((prev)=>([...prev, "lastname"]))
      }
      if(country === "Country"){
        setFormerror((prev)=>([...prev,"country"]))
      }
      if(nameinitialized === ""){
        setFormerror((prev)=>([...prev,"title"]))
      }
      if(occupation == "Other"){
        setFormerror((prev)=>([...prev,"occupation"]))
      }
      if(dialCode == "Code +"){
        setFormerror((prev)=>([...prev,"dialcode"]))
      }
      if(bussinessName == ""){
        setFormerror((prev)=>([...prev,"companyname"]))
      }
     

    } 


  


  return (
    <section
    className="w-100 p-5 gradient-custom-2"
    style={{ borderRadius: ".5rem .5rem 0 0" }}
  >
   
    <div className="row">
      <div className="col-12">
        <div
          className="card card-registration card-registration-2"
          style={{ borderRadius: 15 }}
        >
          <div className="card-body p-0">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="p-5">
                  <h3 className="fw-normal mb-5" style={{ color: "#4835d4" }}>
                    General Infomation
                  </h3>
                  <div className="mb-4 pb-2">
                    <div id="select-wrapper-778564" className="select-wrapper">
                      <div className="form-outline">
                        <input
                        value={nameinitialized}
                        style={{
                          borderColor: formerror.includes("title")  ? "red" : "black",
                          borderWidth: formerror.includes("title") ? "7px" : "1px"
                        }}
                          className="form-control select-input placeholder-active active"
                          type="text"
                          role="listbox"
                          aria-multiselectable="false"
                          aria-disabled="false"
                          aria-haspopup="true"
                          aria-expanded="false"
                          readOnly="true"
                          name="title"
                          
                        />
                        <span className="select-arrow" />
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: 9 }}
                          />
                          <div
                            className="form-notch-middle"
                            style={{ width: 0 }}
                          />
                          <div className="form-notch-trailing" />
                        </div>
                        <div className="form-label select-fake-value">Title</div>
                      </div>
                      <select className="select select-initialized" onChange={handleInitials}
                     >
                        <option key={"Mr"} value={"Mr"}>Mr</option>
                        <option key={"Mrs"} value={"Mrs"}>Msr</option>
                        
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                        name="firstname"
                          type="text"
                          id="form3Examplev2"
                          className="form-control form-control-lg"
                          value={firstname}
                          onChange={handelFirstName}
                          placeholder='Required*'
                          required
                          style={{
                            borderColor: formerror.includes("firstname") ? "red" : "black",
                            borderWidth: formerror.includes("firstname") ? "7px" : "1px"
                          }}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Examplev2"
                          style={{ marginLeft: 0 }}
                        >
                          First name
                        </label>
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: 9 }}
                          />
                          <div
                            className="form-notch-middle"
                            style={{ width: "68.8px" }}
                          />
                          <div className="form-notch-trailing" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 pb-2">
                      <div className="form-outline">
                        <input
                         style={{
                          borderColor: formerror.includes("lastname") ? "red" : "black",
                          borderWidth: formerror.includes("lastname") ? "7px" : "1px"
                        }}
                        name="lastname"
                          type="text"
                          id="form3Examplev3"
                          className="form-control form-control-lg"
                          value={lastname}
                          onChange={handelLastName}
                          placeholder='Required*'
                          required
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Examplev3"
                          style={{ marginLeft: 0 }}
                        >
                          Last name
                        </label>
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: 9 }}
                          />
                          <div
                            className="form-notch-middle"
                            style={{ width: 68 }}
                          />
                          <div className="form-notch-trailing" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 pb-2">
                    <div id="select-wrapper-923614" className="select-wrapper">
                      <div className="form-outline">
                        <input
                         style={{
                          borderColor: formerror.includes("occupation") ? 'red' : "black",
                          borderWidth: formerror.includes("occupation") ? "7px" : "1px"
                        }}
                        name="occupation"
                          className="form-control select-input placeholder-active active"
                          type="text"
                          role="listbox"
                          aria-multiselectable="false"
                          aria-disabled="false"
                          aria-haspopup="true"
                          aria-expanded="false"
                          readOnly="true"
                          value={occupation}
                          onChange={handelOccupation}
                        />
                        <span className="select-arrow" />
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: 9 }}
                          />
                          <div
                            className="form-notch-middle"
                            style={{ width: 0 }}
                          />
                          <div className="form-notch-trailing" />
                        </div>
                        <div className="form-label select-fake-value">
                          Ocupation
                        </div>
                      </div>
                      <select className="select select-initialized" onChange={handelOccupation}
                      value={occupation}
                       style={{
                        borderColor: formerror.includes("occupation") ? "red" : "black",
                        borderWidth: formerror.includes("occupation") ? "7px" : "1px"
                      }}
                      name="occupation"
                      placeholder="Required*"
                      required>
                        <option value={"Other"}>Other</option>
                        <option value={"Bussiness"}>Bussiness</option>
                        <option value={"Student"}>Student</option>
                        <option value={"Developer"}>Developer</option>
                        <option value={"Analyst"}>Analyst</option>
                        
                      </select>
                    </div>
                  </div>
                  <div className="mb-4 pb-2">
                    <div className="form-outline">
                      <input
                      name="moreabout"
                        type="text"
                        id="form3Examplev4"
                        className="form-control form-control-lg"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Examplev4"
                        style={{ marginLeft: 0 }}
                      >
                        Tell Us More About you!
                      </label>
                      <div className="form-notch">
                        <div
                          className="form-notch-leading"
                          style={{ width: 9 }}
                        />
                        <div
                          className="form-notch-middle"
                          style={{ width: "53.6px" }}
                        />
                        <div className="form-notch-trailing" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                      <div className="form-outline">
                        <input
                        name="companyname"
                          type="text"
                          id="form3Examplev5"
                          className="form-control form-control-lg"
                          readOnly={occupation !== "Bussiness"}
                          onChange={handelBussinessName}
                          placeholder={ "your company Name"}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Examplev5"
                          style={{ marginLeft: 0 ,
                            color:occupation !== "Bussiness" ? "grey" : "black"
                          }}
                        >
                          Bussines Name
                        </label>
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: 9 }}
                          />
                          <div
                            className="form-notch-middle"
                            style={{ width: "96.8px" }}
                          />
                          <div className="form-notch-trailing" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div id="select-wrapper-722256" className="select-wrapper">
                        <div className="form-outline">
                          <input
                          className="form-control select-input placeholder-active active"
                            type="text"
                            role="listbox"
                            aria-multiselectable="false"
                            aria-disabled="false"
                            aria-haspopup="true"
                            aria-expanded="false"
                            readOnly="true"
                          />
                          <span className="select-arrow" />
                          <div className="form-notch">
                            <div
                              className="form-notch-leading"
                              style={{ width: 9 }}
                            />
                            <div
                              className="form-notch-middle"
                              style={{ width: 0 }}
                            />
                            <div className="form-notch-trailing" />
                          </div>
                          <div className="form-label select-fake-value"
                          style={{
                          color : occupation !== "Bussiness" ? "grey" : "black"
                          }}
                          >
                            Employees
                          </div>
                        </div>
                        <select className="select select-initialized"
                         style={{
                          color : occupation !== "Bussiness" ? "grey" : "black"
                          }}
                          disabled={occupation !== "Bussiness"}
                          >
                          <option value={1}>Employees</option>
                          <option value={2}>Two</option>
                          <option value={3}>Three</option>
                          <option value={4}>More Than Three</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 bg-indigo text-white">
                <div className="p-5">
                  <h3 className="fw-normal mb-5">Contact Details</h3>
                  <div className="mb-4 pb-2">
                    <div className="form-outline form-white">
                      <input
                        type="text"
                        id="form3Examplea2"
                        className="form-control form-control-lg"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Examplea2"
                        style={{ marginLeft: 0 }}
                      >
                        Street + Nr
                      </label>
                      <div className="form-notch">
                        <div
                          className="form-notch-leading"
                          style={{ width: 9 }}
                        />
                        <div
                          className="form-notch-middle"
                          style={{ width: "70.4px" }}
                        />
                        <div className="form-notch-trailing" />
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 pb-2">
                    <div className="form-outline form-white">
                      <input
                        type="text"
                        id="form3Examplea3"
                        className="form-control form-control-lg"
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Examplea3"
                        style={{ marginLeft: 0 }}
                      >
                        Additional Information
                      </label>
                      <div className="form-notch">
                        <div
                          className="form-notch-leading"
                          style={{ width: 9 }}
                        />
                        <div
                          className="form-notch-middle"
                          style={{ width: 132 }}
                        />
                        <div className="form-notch-trailing" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 mb-4 pb-2">
                      <div className="form-outline form-white">
                        <input
                        placeholder='Required*'
                        value = {zipcode}
                        style={{
                          borderColor: formerror.includes("zipcode") ? "red" : "black",
                          borderWidth: formerror.includes("zipcode") ? "7px" : "1px"
                        }}
                          type="text"
                          id="form3Examplea4"
                          className="form-control form-control-lg"
                          name="zipcode"
                          onChange={handelZipcode}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Examplea4"
                          style={{ marginLeft: 0 }}
                        >
                          Zip Code
                        </label>
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: 9 }}
                          />
                          <div
                            className="form-notch-middle"
                            style={{ width: 60 }}
                          />
                          <div className="form-notch-trailing" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 mb-4 pb-2">
                      <div className="form-outline form-white">
                        <input
                        onChange={handleAdress}
                          type="text"
                          id="form3Examplea5"
                          className="form-control form-control-lg"
                          value={adress}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Examplea5"
                          style={{ marginLeft: 0 }}
                        >
                          Place
                        </label>
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: 9 }}
                          />
                          <div
                            className="form-notch-middle"
                            style={{ width: 40 }}
                          />
                          <div className="form-notch-trailing" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 pb-2">
                    <div className="form-outline form-white">
                      <select
                      style={{
                        borderColor: formerror.includes("country")  ? "red" : "black",
                        borderWidth: formerror.includes("country") ? "7px" : "1px"
                      }}
                        type="text"
                        id="form3Examplea6"
                        className="form-control form-control-lg"
                        onChange={handelCountryEntry}
                        required
                      >
                        <option value="Country">Country</option>
                        {data.map(option => (
                            <option key={option.name} value={option.name}>
                            {option.name}
                        </option>
                        ))}
                      </select>
                      <label
                        className="form-label"
                        htmlFor="form3Examplea6"
                        style={{ marginLeft: 0 }}
                      >
                        Country
                      </label>
                      <div className="form-notch">
                        <div
                          className="form-notch-leading"
                          style={{ width: 9 }}
                        />
                        <div
                          className="form-notch-middle"
                          style={{ width: "52.8px" }}
                        />
                        <div className="form-notch-trailing" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-5 mb-4 pb-2">
                      <div className="form-outline form-white">


                        {/* <select
                          type="text"
                          id="form3Examplea7"
                          className="form-control form-control-lg"
                          required
                          >
                            <option value="test">Code</option>
                            {data.map(option=> {
                              console.log(1);
                              <option key={option.name} value={option.name}>
                                {option.name}
                                </option>
                            })}
                             
                           
                        </select> */}

                        <select
                        style={{
                          borderColor : formerror.includes("dialcode") ? "red" : "black",
                          borderWidth : formerror.includes("dialcode") ? "7px" : "1px"
                        }}
                        name="dialcode"
                        type="text"
                        id="form3Examplea6"
                        className="form-control form-control-lg"
                        required
                        onChange={handelDialCode}
                        value={dialCode}
                      >
                        <option value="Code +">Code +</option>
                        {data.map(option => (
                            <option key={option.name} value={option.dial_code}>
                            {option.name +" "+ option.dial_code}
                        </option>
                        ))}
                      </select>
                        <label
                          className="form-label"
                          htmlFor="form3Examplea7"
                          style={{ marginLeft: 0 }}
                        >
                          Code +
                        </label>
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: 9 }}
                          />
                          <div
                            className="form-notch-middle"
                            style={{ width: "49.6px" }}
                          />
                          <div className="form-notch-trailing" />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 mb-4 pb-2">
                      <div className="form-outline form-white">
                        <input
                        placeholder='Required*'
                        style={{
                          borderColor: formerror.includes("phonenumber") ? "red" : "black",
                          borderWidth: formerror.includes("phonenumber") ? "7px" : "1px",
                        }}
                          type="number"
                          id="form3Examplea8"
                          className="form-control form-control-lg"
                          onChange={handelPhone}
                          name="phonenumber"
                          value={phone}
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Examplea8"
                          style={{ marginLeft: 0 }}
                        >
                          Phone Number
                        </label>
                        <div className="form-notch">
                          <div
                            className="form-notch-leading"
                            style={{ width: 9 }}
                          />
                          <div
                            className="form-notch-middle"
                            style={{ width: "94.4px" }}
                          />
                          <div className="form-notch-trailing" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="form-outline form-white">
                      <input
                      placeholder='Required*'
                      style={{
                        borderColor: formerror.includes("email") ? "red" : "black",
                        borderWidth: formerror.includes("email") ? "7px" : "1px",
                      }}
                      value={email}
                      name="email"
                        type="text"
                        id="form3Examplea9"
                        className=" form-control form-control-lg invalid_input"
                        onChange={handelEmail}
                      //  formerror.email !== undefined ? formerror.errorStyle. : "black")
                      
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Examplea9"
                        style={{ marginLeft: 0 }}
                      >
                        Your Email
                      </label>
                      <div className="form-notch">
                        <div
                          className="form-notch-leading"
                          style={{ width: 9 }}
                        />
                        <div
                          className="form-notch-middle"
                          style={{ width: "69.6px" }}
                        />
                        <div className="form-notch-trailing" />
                      </div>
                    </div>
                  </div>
                  <div className="form-check d-flex justify-content-start mb-4 pb-3">
                    <input
                    name="termcheckbox"
                      className="form-check-input me-3"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3c"
                    />
                    <label
                      className="form-check-label text-white"
                      htmlFor="form2Example3"
                    >
                      {/* I do accept the{"  "}
                      <link href="#!" className="text-white">
                        <u>Terms and Conditions</u>
                      </link>{" "} */}
                      of your site.
                    </label>
                  </div>
                  <button
                  onClick={handelSubmit}
                    type="submit"
                    className="btn btn-light btn-lg"
                    data-mdb-ripple-color="dark"
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default Signup;