import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from '../Modal';
import styled from 'styled-components'
const Div = styled.div`
    display : flex;
    align-items : center;
    flex-direction : column;
    justify-content : center;
    margin-top : 2%;
`;

function Event() {
  const [modalOpen, setModalOpen] = useState(false);
  const [locations, setlocations] = useState(['NewYork', 'LosAngeles', 'Chicago', 'Miami', 'Dallas', 'Philadelphia', 'Houston', 'Atlanta', 'Washington', 'Boston', 'Phoenix', 'Seattle', 'SanFrancisco', 'Detroit', 'SanDiego', 'Minneapolis', 'Tampa', 'Denver', 'Brooklyn', 'Queens']);
  const [categories, setCategories] = useState(['Consert', 'Sports', 'CareerFair', 'Conference', 'Parties', 'Gettogether', 'Movie', 'Contest', 'Festival']);
  const [qlocation, setqlocation] = useState();
  const [qcategory, setqcategory] = useState();
  const [events, setevents] = useState();
  // useEffect(async () => {
  //   // await axios.post('http://localhost:5000/getlocations', {loc}).then((response) => {
  //   //   console.log('locs', response.data.results.bindings);
  //   //   setlocations(response.data.results.bindings);
  //   // })
  //   // await axios.post('http://localhost:5000/getcategories', {}).then((response) => {
  //   //   console.log('cats', response.data.results.bindings);
  //   //   setCategories(response.data.results.bindings);
  //   // })
  //   // await axios.post('http://localhost:5000/getevents', {}).then((response) => {
  //   //   console.log('eves', response.data.results.bindings)
  //   // })
  // }, [])
  const handleSearch = async () => {
    await axios.post('http://localhost:5000/getevents', { loc: qlocation, cat: qcategory }).then((response) => {
      console.log('eves', response.data)
    })
  }
  return (
    <Div>
      <Div>
        <div>
          <h1> Find the Events near you!! </h1>
          <label>Select Location<label className="text-danger">*</label></label>
          <select aria-label="available" required value={qlocation} onChange={e => setqlocation(e.target.value)} >
            <option value="Select an option">Select an option</option>
            {locations.map(loc => (
              <option value={loc}>{loc}</option>
            ))}
          </select>


          <label>Select Category<label className="text-danger">*</label></label>
          <select aria-label="available" required value={qcategory} onChange={e => setqcategory(e.target.value)} >
            <option value="Select an option">Select an option</option>

            {categories.map(cat => (
              <option value={cat}>{cat}</option>
            ))}
          </select>
          <button onClick={handleSearch}> Search </button>
        </div>
      </Div>
      {modalOpen && <Modal data={locations} setOpenModal={setModalOpen} />}
      <table>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Event Location</th>
            <th>Registeration Link</th>
            <th> Show More </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>   <button
              className="openModalBtn"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Show More
            </button> </td>
          </tr>
        </tbody>
      </table>



    </Div>
  )
}
export default Event