// // import Container from 'postcss/lib/container';
// import React from "react";
// import { Form, Nav, FormControl, Row, Col, Button } from "react-bootstrap";
// import { Link, NavLink } from "react-router-dom";
// import './secondaryNavBar.css'



// const CategotyNavbar = () => {

//   return (
//     <Nav className="secondaryNavBar d-flex gap-0 justify-content-between flex-wrap"
//     style={{
//         "@media screen and (min-width: 841px) {
//             .secondaryNavBar {
//              flex-direction: column;
//              gap:10px;
//             }}"
//     }}
//     >
//    <div className="pl-1 pr-1 ">
//             <Link to="business"><Button>Business</Button></Link>
//         </div>
//     <div className="pl-1 pr-1">
//             <Link to="entertainment"><Button>Entertainment</Button></Link>
//         </div>
//         <div className="pl-1 pr-1">
//             <Link to="general"><Button>General</Button></Link>
//         </div>
//         <div className="pl-4 pr-4">
//             <Link to="health"><Button>health</Button></Link>
//         </div>
//         <div className="pl-4 pr-4">
//             <Link to="science"><Button>Science</Button></Link>
//         </div>
//         <div className="pl-4 pr-4">
//             <Link to="sports"><Button>Sport</Button></Link>
//         </div>
//         <div className="pl-4 pr-4">
//             <Link to="technology"><Button>Technology</Button></Link>
//         </div>
      
    

//       {/* </div> */}
//     </Nav>
//   );
// };

// export default  CategotyNavbar;



import React from "react";
import { Link, useLocation } from "react-router-dom";
// import { Nav, Button } from "react-bootstrap";
import "./secondaryNavBar.css";
import { Form, Nav, FormControl, Row, Col, Button } from "react-bootstrap";

const CategotyNavbar = () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    // const [location,setLocation] = React.useState("");
    let getLocation = useLocation().pathname.slice(1);
    // getLocation = getLocation.pathname.slice(1);
    // setLocation(getLocation);


    
  return (
    <Nav
      className="secondaryNavBar d-grid gap-0 justify-content-between flex-wrap"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <div className="pl-1 pr-1">
        <Link to="business">
          <Button>Business</Button>
        </Link>
      </div>
      <div className="pl-1 pr-1">
        <Link to="entertainment">
          <Button>Entertainment</Button>
        </Link>
      </div>
      <div className="pl-1 pr-1">
        <Link to="general">
          <Button>General</Button>
        </Link>
      </div>
      <div className="pl-1 pr-1">
        <Link to="health">
          <Button>health</Button>
        </Link>
      </div>
      <div className="pl-1 pr-1">
        <Link to="science">
          <Button>Science</Button>
        </Link>
      </div>
      <div className="pl-1 pr-1">
        <Link to="sports">
          <Button>Sport</Button>
        </Link>
      </div>
      <div className="pl-1   pr-1">
        <Link to="technology">
          <Button>Technology</Button>
        </Link>
      </div>
      <br></br>
      <br></br>
      <div inline className="mr-0 px-0">  
          <Col xs="auto">
            <input
              type="text"
              placeholder="Search in Category"
              className=" mr-sm-2 py-1.5"
              onChange={(e) => {
                setSearchTerm("/search/" + e.target.value+"&category="+getLocation);
              }}
            />
          </Col>
          <br></br>
          <Col xs="auto">
            <Link to={searchTerm}>
              <Button> Search </Button>
            </Link>
          </Col>
      </div>
    </Nav>
  );
};

export default CategotyNavbar;

