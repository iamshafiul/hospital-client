import React from 'react';
// import OrderForm from '../OrderForm/OrderForm';
// import Sidebar from '../Sidebar/Sidebar';

import { Col, Nav, Row } from "react-bootstrap";

const Order = () => {
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
          
          </div>
        </div>
      </Col>
    </Row>
    );
};

export default Order;