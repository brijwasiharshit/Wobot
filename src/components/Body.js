import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from './utils/constants';
import RecCard from './RecCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
import SearchBar from './SearchBar';

const Body = () => {
 
    const [ListOfItems, setListOfItems] = useState([]);
    useEffect(() => {
        fetchData();
    },[]);
    console.log(ListOfItems);
    const fetchData = async () => {
        const respose = await fetch(`${API_URL}/complexSearch?apiKey=${API_KEY}&number=50`);
        const data = await respose.json();
        setListOfItems(data.results);
    }
  return (
    ListOfItems.length === 0 ? <Shimmer /> :
    <div >
    <SearchBar  setListOfItems={setListOfItems}/>
    <div className='flex flex-wrap'>
    {ListOfItems.map((item)=>{
        return(
            <Link key = {item.id} to={`./recipe/${item.id}`}>
           <RecCard recData = {item}/>
           </Link>

        )
      })}
    </div>
     
    </div>
  )
}

export default Body;
