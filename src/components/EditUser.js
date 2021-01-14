import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context'
import { useHistory, useParams } from 'react-router-dom'

export default function EditUser() {
   let { id } = useParams();
   let history = useHistory();
   const { jsonServer } = useContext(DataContext);
   const [editUser, setEditUser] = useState({
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
   });

   useEffect(() => {
      first();
   }, []);

   const first = async () => {
      const res = await axios.get(`${jsonServer}${id}`);
      setEditUser(res.data);
   }


   const submit = async e => {
      e.preventDefault();
      await axios.put(`${jsonServer}${id}`, editUser);
      history.push("/");
   }

   const inputEvent = (e) => {
      setEditUser({ ...editUser, [e.target.name]: e.target.value });
   }

   return (
      <section>
         <div className="container py-4">
            <form onSubmit={submit}>
               <div className="form-group mb-3 row">
                  <div className="col-sm-1-12">
                     <input value={editUser.name} onChange={inputEvent} type="text" className="form-control" name="name" id="inputName" placeholder="Enter your name" />
                  </div>
               </div>
               <div className="form-group mb-3 row">
                  <div className="col-sm-1-12">
                     <input value={editUser.username} onChange={inputEvent} type="text" className="form-control" name="username" id="inputName" placeholder="Enter your Username" />
                  </div>
               </div>
               <div className="form-group mb-3 row">
                  <div className="col-sm-1-12">
                     <input value={editUser.email} onChange={inputEvent} type="text" className="form-control" name="email" id="inputName" placeholder="Enter your E-mail address" />
                  </div>
               </div><div className="form-group mb-3 row">
                  <div className="col-sm-1-12">
                     <input value={editUser.phone} onChange={inputEvent} type="text" className="form-control" name="phone" id="inputName" placeholder="Enter your Phone number" />
                  </div>
               </div>
               <div className="form-group mb-3 row">
                  <div className="col-sm-1-12">
                     <input value={editUser.website} onChange={inputEvent} type="text" className="form-control" name="website" id="inputName" placeholder="Enter your Website name" />
                  </div>
               </div>
               <button type="submit" className="btn btn-warning">Update User Details</button>
            </form>
         </div>
      </section>
   )
}
