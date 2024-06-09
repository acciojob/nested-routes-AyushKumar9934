import React from 'react'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';

const Layout = ({category}) => {
  const navigate = useNavigate();

  const handleClick = (e, path) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div>
        <nav>
            <a href="/" onClick={(e) => handleClick(e, '/')}>Home</a>
            {
                category.map((category) => {
                    return (
                        <a key={category.id} href={`/category/${category.id}`} onClick={(e) => handleClick(e, `/category/${category.id}`)}>
                            {category.name}
                        </a>
                    )
                })
            }
        </nav>
    </div>
  )
}
export default Layout
