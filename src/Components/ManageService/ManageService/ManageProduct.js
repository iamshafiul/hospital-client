import React, { useEffect, useState } from "react";
import { Col, Nav, Row } from "react-bootstrap";
// import Header from "../Header/Header";
// import Home from "../Home/Home";
import AllProduct from "../AllProduct/AllProduct";

const ManageProduct = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://intense-ravine-95706.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <Row>
      <Col md={3} sm={12} xs={12}>
        <Nav defaultActiveKey="/home" className="flex-column bg-dark  border border-white vh-100">
          <Nav.Link href="/manageProduct" className="nav-link" to="/manageProduct">
            Manage Product
          </Nav.Link>
          <Nav.Link href="/admin" className="nav-link" to="/admin">
            Add Product
          </Nav.Link>
          <Nav.Link href="/home" className="nav-link" to="/home">
            Edit Product
          </Nav.Link>
        </Nav>
      </Col>

      <Col md={9} sm={12} xs={12}>
      <div className="row">
        <div className="col-md-3"><h3>Name</h3></div>
        <div className="col-md-3"><h3>Quantity</h3></div>
        <div className="col-md-3"><h3>Price</h3></div>
        <div className="col-md-3"><h3>Action</h3></div>
      </div>
      <Row>
            {events.map((event) => (
              <Col md={12} sm={12} xs={12}>
                <AllProduct id={event._id} events={event}></AllProduct>
              </Col>
            ))}
          </Row>
      </Col>
    </Row>
  );
};

export default ManageProduct;
