import React, { useState, useEffect, useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'

export default function Home() {
   const { jsonServer } = useContext(DataContext);
   const [user, setUser] = useState([]);

   useEffect(() => {
      getData();
   }, []);

   const getData = async () => {
      const api = await axios.get(`${jsonServer}`);
      setUser(api.data);
   };

   const deleteUser = async (id) => {
      await axios.delete(`${jsonServer}${id}`);
      getData();
   }


   return (
      <section>
         <div className="container">
            <table className="table table-striped table-inverse table-responsive">
               <thead className="thead-inverse">
                  <tr>
                     <th>#</th>
                     <th>Name</th>
                     <th>Username</th>
                     <th>Email</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {user.map(item => {
                     return (
                        <tr key={item.id}>
                           <td>{item.id}</td>
                           <td>{item.name}</td>
                           <td>{item.username}</td>
                           <td>{item.email}</td>
                           <td>
                              <Link to={`/user/edit/${item.id}`} className="btn mr-1 btn-warning">edit</Link>
                              <Link to={`/user/view/${item.id}`} className="btn mr-1 btn-primary">view</Link>
                              <Link onClick={() => { deleteUser(item.id) }} className="btn mr-1 btn-danger">delete</Link>
                           </td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>
      </section>
   )
}
