import React from 'react'
import { Link, useParams,Routes,Route } from 'react-router-dom'
import ItemPage from './ItemPage';

const CategoryPage = ({allItem}) => {
    let {id}=useParams();
    let TempItems=allItem.filter((element)=>{
        return element.id==id;
    })
    let items=TempItems[0].categoryItem;
    let basePath=`/category/${id}`
  return (
    <div>
        {
            items.map((item)=> {
             return <ul><li> <div key={item}>  <Link key={item} to={`${basePath}/${item}`}>
                    {item}
                </Link>
                </div></li></ul>
            })
            

        }
        <Routes>
            <Route path=":itemId" element={<ItemPage />} />
                
                </Routes>
    </div>
  )
}

export default CategoryPage