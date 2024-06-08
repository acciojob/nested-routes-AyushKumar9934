import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({category}) => {
  return (
    <div>
        <nav> <Link to="/">Home</Link>{
           
        category.map((category)=>{
          return<ul> <li><div> <Link key={category.id} to={`/category/${category.id}`} >
                {category.name}
            </Link><br></br></div></li></ul>
        })
        
        
        
        
        }<br></br></nav>
        </div>
  )
}

export default Layout
