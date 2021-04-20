import axios from 'axios';
import React, { useState } from 'react';
import { Col, Nav, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Admin = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState(null)

  const onSubmit = data => {
    const serviceData = {
      name: data.name,
      description: data.description,
      imageURL: imageURL
    };
    const url = `https://quiet-caverns-85312.herokuapp.com/addService`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    }).then((res) => console.log("server side res", res));
  };

  


  const handleImageUpload = event =>{
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key','10f4eabf2470f1da1842c8325e51e3e9');
    imageData.append('image',event.target.files[0]);

    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
      setImageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
    return (
      <Row className="no-gutters">
      <Col md={3} sm={12} xs={12}>
        <Nav defaultActiveKey="/home" className="flex-column bg-dark  border border-white vh-100">
          <Nav.Link href="/manageProduct" className="nav-link" to="/manageProduct">Manage Product</Nav.Link>
          <Nav.Link href="/admin" className="nav-link" to="/admin">Add Product</Nav.Link>
          <Nav.Link href="/home" className="nav-link" to="/home">Edit Product</Nav.Link>
        </Nav>
      </Col>

      <Col md={9} sm={12} xs={12}>
        <form onSubmit={handleSubmit(onSubmit)} className="bg-light  text-white p-5  m-auto border border-white shadow rounded vh-100">
          <Row>
            <Col md={12} sm={12} xs={12}>
          <input className="form-control mb-2" name="name" defaultValue="Service Name" type="text" ref={register} />
          </Col>
          <Col md={12} sm={12} xs={12}>
          <textarea className="form-control mb-2" name="description" defaultValue="Description" rows="5" cols="33" ref={register} />
          </Col>
          <Col md={12} sm={12} xs={12}>
          <input name="newproduct" type="file" onChange={handleImageUpload} />
          </Col>
          </Row>
          <input className="mt-3 btn btn-primary" type="submit" />
        </form>
      </Col>
    </Row>
    
    );
};

export default Admin;