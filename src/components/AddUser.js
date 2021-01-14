import axios from 'axios';
import React, { useContext, useState } from 'react'
import { DataContext } from '../Context'
import { useHistory } from 'react-router-dom'

export default function AddUser() {
   let history = useHistory();
   const { jsonServer } = useContext(DataContext);
   const [newUser, setNewUser] = useState({
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
   });

   const submit = async e => {
      e.preventDefault();
      await axios.post(`${jsonServer}`, newUser);
      history.push("/");
   }

   const inputEvent = (e) => {
      setNewUser({ ...newUser, [e.target.name]: e.target.value });
   }


   return (
      <div>
         <div className="container py-4">
            <form onSubmit={submit}>
               <div className="form-group mb-3 row">
                  <div className="col-sm-1-12">
                     <input onChange={inputEvent} type="text" className="form-control" name="name" id="inputName" placeholder="Enter your name" />
                  </div>
               </div>
               <div className="form-group mb-3 row">
                  <div className="col-sm-1-12">
                     <input onChange={inputEvent} type="text" className="form-control" name="username" id="inputName" placeholder="Enter your Username" />
                  </div>
               </div>
               <div className="form-group mb-3 row">
                  <div className="col-sm-1-12">
                     <input onChange={inputEvent} type="text" className="form-control" name="email" id="inputName" placeholder="Enter your E-mail address" />
                  </div>
               </div><div className="form-group mb-3 row">
                  <div className="col-sm-1-12">
                     <input onChange={inputEvent} type="text" className="form-control" name="phone" id="inputName" placeholder="Enter your Phone number" />
                  </div>
               </div>
               <div className="form-group mb-3 row">
                  <div className="col-sm-1-12">
                     <input onChange={inputEvent} type="text" className="form-control" name="website" id="inputName" placeholder="Enter your Website name" />
                  </div>
               </div>
               <button type="submit" className="btn btn-primary">Add User</button>
            </form>
         </div>
      </div>
   )
}
