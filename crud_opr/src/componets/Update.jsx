import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';

const Update = ({formData,setFormData}) => {
  const navigate = useNavigate();
  

const [name, setName] = useState("");
const [gender, setGender] = useState("");
const [eid, setEid] = useState();
const [phone, setPhone] = useState();

const location = useLocation();
const id = location.state.id;

useEffect(() => {
  if(location.state) {
    console.log(location.state,"location.state");
    setName(location.state.name);
    setGender(location.state.gender);
    setEid(location.state.eid);
    setPhone(location.state.phone);
  }
}, [location.state])

const handleSubmit = (e) => {
  e.preventDefault();
  let data = {
    id: id,
    name: name,
    gender: gender,
    eid: eid,
    phone: phone,
    // date: date,
  };
  let result = formData?.map((items) => {
    if (items.id === id) {
      return {
        ...items,
        ...data,
      };
    } else {
      return items;
    }
  });
  setFormData(result);
    
    navigate("/");

    
  
  }
  return (
  <>
  <div>
    <h1>Form</h1>
    <form onSubmit={handleSubmit}>
      <label> Employee_Name: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <label> Gender: </label>
      <input
        type="text"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      />
      <br />
      <br />
      <label> Employee_Id: </label>
      <input
        type="number"
        value={eid}
        onChange={(e) => setEid(e.target.value)}
      />
      <br />
      <br />
      <label> Mobile_No: </label>
      <input
        type="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <br />
      

      <button type='submit'>click here to submit</button>
    </form>
    

  </div>
  </>
  );
}

export default Update
