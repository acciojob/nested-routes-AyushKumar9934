import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({category}) => {
  return (
    <div>
        <nav>{
        category.map((category)=>{
          return  <Link key={category.id} to={`/category/${category.id}`} >
                {category.name}
            </Link>
        })
        
        
        
        
        }<br></br></nav>
        </div>
  )
}

export default Layout
