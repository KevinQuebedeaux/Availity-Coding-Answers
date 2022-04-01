import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
  if(event.reset) {
   return {
     firstName: '',
     lastName: '',
     npiNumber:'',
     address:'',
     phoneNumber: '',
     email: '',
   }
 }
 return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {
    count: 100,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
   event.preventDefault();
   setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
     setFormData({
       reset: true
     })
   }, 3000)
 }

 const handleChange = event => {
   const isCheckbox = event.target.type === 'checkbox';
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return (
    <div className="wrapper">
      <h1>Registration </h1>

      <form onSubmit={handleSubmit}>
      <fieldset disabled={submitting}>
         <label>
           <p>First Name: <input name="firstName" onChange={handleChange} value={formData.firstName || ''}/></p>
         </label>
         <label>
           <p>Last Name: <input name="lastName" onChange={handleChange} value={formData.lastName || ''}/></p>
         </label>
      </fieldset>
      <fieldset disabled={submitting}>
        <label>
          <p>NPI Number: <input name="npiNumber" onChange={handleChange} value={formData.npiNumber || ''}/></p>
        </label>
        <label>
          <p>Business Address: <input name="address" onChange={handleChange} value={formData.address || ''}/></p>
        </label>
        <label>
          <p>Phone Number: <input name="phoneNumber" onChange={handleChange} value={formData.phoneNumber || ''}/></p>
        </label>
        <label>
          <p>Email: <input name="email" onChange={handleChange} value={formData.email || ''}/></p>
        </label>
      </fieldset>
      <button type="submit" disabled={submitting}>Submit</button>
      </form>
      {submitting &&
       <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
            <li key={name}><strong>{name}</strong>:{value.toString()}</li>
            ))}
          </ul>
       </div>
     }
    </div>
  )
}

export default App;
