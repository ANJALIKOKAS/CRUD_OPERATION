import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = ({formData, setFormData}) => {
    // const [formData, setFormData] = useState([]);
    
    const handleDelete = (id) => {
        let result = formData.filter((items) => items.id !== id);
        setFormData(result);
      };
    
    return (
    <div>
       <table >
        <tr>
          <th> Employee_Name</th>
          <th>Gender</th>
          <th>Employee_Id</th>
          <th>Mobile_No</th>
          <th>Action</th>
        </tr>

        {formData?.map((Item) => (
          <tr key={Item}>
            <td>{Item.name} </td>
            <td>{Item.gender}</td>
            <td>{Item.eid} </td>
            <td>{Item.phone} </td>
           

            <td>
              <Link to={'/edit'} state={Item}>Edit</Link>
              <button onClick={() => handleDelete(Item.id)} className='buttondelete'>Delete</button>
            </td>
          </tr>
        ))}
      </table>
      <Link to={'/add'}>click here to add data</Link>
    </div>
  )
}

export default Home
