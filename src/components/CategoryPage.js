import React from 'react'
import { Link, useParams,Routes,Route } from 'react-router-dom'
import ItemPage from './ItemPage';

import { useNavigate } from 'react-router-dom';

const CategoryPage = ({allItem}) => {
    let { id } = useParams();
    let navigate = useNavigate();
    let TempItems = allItem.filter((element) => {
        return element.id == id;
    })
    let items = TempItems[0].categoryItem;
    let basePath = `/category/${id}`;

    const handleClick = (e, path) => {
        e.preventDefault();
        navigate(path);
    };

    return (
        <div>
            {
                items.map((item) => {
                    return (
                        <ul>
                            <li>
                                <div key={item}>
                                    <a href={`${basePath}/${item}`} onClick={(e) => handleClick(e, `${basePath}/${item}`)}>
                                        {item}
                                    </a>
                                </div>
                            </li>
                        </ul>
                    )
                })
            }
            <Routes>
                <Route path=":itemId" element={<ItemPage />} />
            </Routes>
        </div>
    )
}

export default CategoryPage;