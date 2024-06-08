
import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom"
import Layout from "./Layout";
import CategoryPage from "./CategoryPage";

const App = () => {
  const category=[{id:"1",name:"PrJi"},{id:"2",name:"Women"}]
  const allItem=[{id:"1",categoryItem:["Dhoti","Kurta","Tilak","BeadBag"]},{id:"2",categoryItem:["Sari","BeadBag","Tilak","Prasadam"]}]
  return (
    <div>
       <Router>
        <Layout category={category} allItem={allItem} />
        <Routes>
          
         
          <Route path='/category/:id/*' element={ <CategoryPage allItem={allItem} /> } />
        </Routes>
       </Router>
    </div>
  )
}

export default App
