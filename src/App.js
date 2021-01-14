import React from 'react'
import Navbar from './components/Navbar'
import './components/css/main.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import AddUser from './components/AddUser'
import ViewUser from './components/ViewUser'
import EditUser from './components/EditUser'
import DataProvider from './Context'

export default function App() {
   return (
      <DataProvider>
         <div className="app">
            <BrowserRouter>
               <Navbar />
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/user/add" component={AddUser} />
                  <Route exact path="/user/view/:id" component={ViewUser} />
                  <Route exact path="/user/edit/:id" component={EditUser} />
                  <Route component={NotFound} />
               </Switch>
            </BrowserRouter>
         </div>
      </DataProvider>
   )
}
