import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Form = ({formData, setFormData}) => {
    const navigate = useNavigate();
    // const [formData, setFormData] = useState([]);

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [eid, setEid] = useState();
  const [phone, setPhone] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
      let data = {
        id: formData?.length + 1,
        name: name,
        gender: gender,
        eid: eid,
        phone: phone,
        
      };
      setFormData([...formData, data]);
      
      navigate("/");

      setName("");
      setGender("");
      setEid("");
      setPhone("");
    
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
export default Form

