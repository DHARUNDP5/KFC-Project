import React, { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {getKfcData} from './redux/kfcSlice';
import {getIdentifierData} from './redux/kfcIdentifierSlice';
import './App.css'

function App() {
  const dispatch = useDispatch();
  const {menu, loading} = useSelector((state) => state.kfc);
  useEffect(() => {
    dispatch(getKfcData());
    
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log();
    dispatch(getIdentifierData(e.target.elements[0].value));
  }
  return (
    <div className="menu-container">
      <p className='header'>KFC-MENU ITEMS</p>
      {
        <div className='titlebox'>
          <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Enter items' className='box'/>
          <div className='btn'>
          <button>Search</button>
          </div>
        </form>
        </div>
        
      }
      {loading && <div>Please wait Loading.....</div>}
      {
        !loading && menu.length > 0 && menu.map((data) => (
          <div className="menu-item--container" >
            <img src={data.img}/>
              <div className='menu-description'>
                <div>{data.name}</div>
                <div>${data.price}</div>
                <button>Add</button>
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default App