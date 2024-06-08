import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({category}) => {
  return (
    <div>
        <nav> <Link to="/">Home</Link>{
           
        category.map((category)=>{
          return <div> <Link key={category.id} to={`/category/${category.id}`} >
                {category.name}
            </Link><br></br></div>
        })
        
        
        
        
        }<br></br></nav>
        </div>
  )
}

export default Layout
