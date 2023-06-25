import React, { useState } from 'react';
import axios from 'axios';
import './CreateUser.css'

function CreatePO(props) {

  const [poData, setPoData] = useState({
    poNumber: '',
    clientName: '',
    startDate: '',
    endDate: '',
    totalValue: '',
    balValue: '',
    milestone: '',
    type: '',
    status: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPoData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const createdAt = new Date().toISOString();
    const newPO = { ...poData, createdAt };

    // Send purchase order data to the backend
    axios
      .post('http://localhost:8080/api/po/create', newPO)
      .then((response) => {
        console.log('Purchase order created successfully:', response.data);
        // Reset the form
        setPoData({
            clientName: '',
            poNumber: '',
            startDate: '',
            endDate: '',
            totalValue: '',
            balValue: '',
            milestone: '',
            type: '',
            status: ''
        });

        // Close the modal:
        props.closeModal();
        
      })
      .catch((error) => {
        console.error('Error creating purchase order:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='create-user-model'>
        <div>
          <label htmlFor="clientName">Client Name</label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={poData.clientName}
            onChange={handleChange}
            placeholder='Enter Client Name'
            className='form-control'
          />
        </div>
        <div>
          <label htmlFor="poNumber">Purchase Order Number</label>
          <input
            type="text"
            id="poNumber"
            name="poNumber"
            value={poData.poNumber}
            onChange={handleChange}
            placeholder='Enter Purchase Order Number'
            className='form-control'
          />
        </div>
        <div>
          <label htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={poData.startDate}
            onChange={handleChange}
            placeholder='Enter Start Date'
            className='form-control'
          />
        </div>
        <div>
          <label htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={poData.endDate}
            onChange={handleChange}
            className='form-control'
            placeholder='Enter End Date'
          />
        </div>
        <div>
          <label htmlFor="totalValue">Total Value</label>
          <input
            type="number"
            id="totalValue"
            name="totalValue"
            value={poData.totalValue}
            onChange={handleChange}
            className='form-control'
            placeholder='Enter Total Value'
          />
        </div>
        <div>
          <label htmlFor="totalValue">Balance Value</label>
          <input
            type="number"
            id="balValue"
            name="balValue"
            value={poData.balValue}
            onChange={handleChange}
            className='form-control'
            placeholder='Enter Balance Value'
          />
        </div>
        <div>
          <label htmlFor="milestone">Milestone</label>
          <input
            type="number"
            id="milestone"
            name="milestone"
            value={poData.milestone}
            onChange={handleChange}
            className='form-control'
            placeholder='Enter Milestone'
          />
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <select
            type="test"
            id="type"
            name="type"
            value={poData.type}
            onChange={handleChange}
            className='form-control'
          >
            <option value="" disabled>Select Type</option>
            <option value="Enterprise Service">Enterprise Service</option>
            <option value="Talent Service">Talent Service</option>
            <option value="Professional Service">Professional Service</option>
          </select>
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <input
            type="test"
            id="status"
            name="status"
            value={poData.status}
            onChange={handleChange}
            className='form-control'
            placeholder='Enter Status'
          />
        </div>
        
        <button type="submit" className='btn btn-primary'>Create Purchase Order</button>
      </form>
    </div>
  );
}

export default CreatePO;
