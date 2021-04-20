import React, { useEffect, useState } from "react";
import { Col, Nav, Row } from "react-bootstrap";
import { useParams } from "react-router";

const OrderList = () => {
  const { serviceId } = useParams();
  const [service, setServices] = useState({});
  useEffect(() => {
    const url = `https://quiet-caverns-85312.herokuapp.com/service/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data[0]));
  }, [serviceId]);

  return (
    <Row className="no-gutters">
      <Col md={3} sm={12} xs={12}>
        <Nav defaultActiveKey="/home" className="flex-column bg-dark  border border-white vh-100">
          <Nav.Link href="/order" className="nav-link" to="/order">
            Order
          </Nav.Link>
          <Nav.Link href="/orderlist" className="nav-link" to="/orderlist">
            Order List
          </Nav.Link>
          <Nav.Link href="/home" className="nav-link" to="/home">
            Reveiw
          </Nav.Link>
        </Nav>
      </Col>

      <Col md={9} sm={12} xs={12}>
        <div className="row">
          <div className="col-md-6 col-sm-12">
           <div className="content bg-light p-5 text-center">
           <img style={{ height: "60px" }} src={service.imageURL} alt="service" />
            <h5 className="my-4">{service.name}</h5>
            <p>{service.description}</p>
           </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default OrderList;
