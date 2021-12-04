import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState,useEffect } from 'react';
import axios from 'axios';
import './events.css'
function Event() {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  useEffect(async() =>{
    await axios.post('http://localhost:5000/getlocations',{}).then((response) =>{
      console.log('locs',response.data.results.bindings);
    });
    await axios.post('http://localhost:5000/getcategories',{}).then((response) =>{
      console.log('cats',response.data.results.bindings);
    })
  },[])
  return (
    <div>
      <h1 class="eventheading"> Find the Events near you!! </h1>
      <div>

        <Form>

          <Row>
            <Form.Group className="mb-3" controlId="selectLocation">
              <Form.Label>Select Location<label  className="text-danger">*</label></Form.Label>
              <Form.Select aria-label="available" required value={location}  >
                <option value="Select an option">Select an option</option>
                <option value="option 1">Location1</option>
                <option value="option 2">Location2</option>
                <option value="option 3">Location3</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group className="mb-3" controlId="selectCategory">
              <Form.Label>Select Category<label className="text-danger">*</label></Form.Label>
              <Form.Select aria-label="available" required value={category}  >
                <option value="Select an option">Select an option</option>
                <option value="option 1">Category1</option>
                <option value="option 2">Category2</option>
                <option value="option 3">Category3</option>
              </Form.Select>
            </Form.Group>
          </Row>
          



        </Form>



      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Event Name</th>
            <th>Event Category</th>
            <th>Event Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
export default Event