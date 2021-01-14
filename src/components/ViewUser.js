import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context'
import { useParams } from 'react-router-dom'

export default function ViewUser() {
   let { id } = useParams();
   const { jsonServer } = useContext(DataContext);
   const [user, setUser] = useState({
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
      setUser(res.data);
   }

   return (
      <section>
         <div className="card">
            <div className="card-body">
               <p className="card-text">
                  <span className="text-bold text-uppercase">Name: </span>
                  {user.name}
               </p>
               <p className="card-text">
                  <span className="text-bold text-uppercase">Username: </span>
                  {user.username}
               </p>
               <p className="card-text">
                  <span className="text-bold text-uppercase">E-mail: </span>
                  {user.email}
               </p>
               <p className="card-text">
                  <span className="text-bold text-uppercase">Phone: </span>
                  {user.phone}
               </p>
               <p className="card-text">
                  <span className="text-bold text-uppercase">Website: </span>
                  {user.website}
               </p>
            </div>
         </div>
      </section>
   )
}
