// import Container from 'postcss/lib/container';
import React from "react";
import { Form, Nav, FormControl, Row, Col, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
// import Searchnews from '../Searchnews/Searchnews';

const Navbr = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  // const SubmmitMyForm =(e) =>{
  //     e.preventDefault();
  // }
  console.log(searchTerm);
  return (
    <Nav className="d-flex justify-content-between"
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(370px, 1fr))",
      justifyContent: "center",
      justifyItems: "center",
    }}>
      {/* <div className='d-flex justify-content-between'> */}
      <div className="pl-6 pr-6">
       
        <Link to="/">News Application</Link>
      </div>
      <div className="d-flex justify-content-between">
        <div className="pl-6 pr-6">
          <Link to="/">Home</Link>
        </div>
        {/* <div className="pl-6 pr-6">
          <Link to="/user">User</Link>
        </div> */}
        <div className="pl-6 pr-6">
          <Link to="/about">About</Link>
        </div>
        {/* <div className="pl-6 pr-6">
          <Link to="/login">Login</Link>
        </div> */}
        {/* <div className="pl-6 pr-6">
          <Link to="/signup">SignUp</Link>
        </div> */}
        <div className="pl-6 pr-6">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="pl-6 pr-6 hidden">
          <Link to="/news">news</Link>
        </div>
      </div>

      <div inline className="mr-0 px-0">
        <Row>
          <Col xs="auto">
            <input
              type="text"
              placeholder="Search"
              className=" mr-sm-2 py-1.5"
              onChange={(e) => {
                setSearchTerm("/search/" + e.target.value);
              }}
            />
          </Col>
          <Col xs="auto">
            <Link to={searchTerm}>
              <Button> Search </Button>
            </Link>
          </Col>
        </Row>
      </div>

      {/* </div> */}
    </Nav>
  );
};

export default Navbr;
