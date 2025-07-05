import React, { useEffect, useState } from 'react';
import './list.css';
import axios from 'axios';
import ListCard from "../../components/ListCard/ListCard.jsx";
import api from "../../config/axiosInterceptor.js";
import {toast} from "react-toastify";

function List() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await api.get('store');
    console.log(res);
    setItems(res.data);
  };

  const handleDelete = async (id) => {
    const res = await api.delete(`store/${id}`);
    if(res.status === 200){
      toast.success("Deleted successfully");
      fetchItems();
    }

  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
      <div className='list-wrapper'>
        <div className='list-title'>
          <p className='list-item-title'>Image</p>
          <p className='list-item-title'>Title</p>
          <p className='list-item-title'>Features</p>
          <p className='list-item-title'>Stock</p>
          <p className='list-item-title'>Price</p>
          <p className='list-item-title'>Remove</p>
          <p>Edit</p>
        </div>

        {items.map(item => (
            <ListCard
                key={item._id}
                id={item._id}
                Name={item.name}
                ProductImg={item.image}
                FeaturesList={item.features}
                Amount={item.stock}
                Price={item.price}
                onDelete={handleDelete}
            />
        ))}
      </div>
  );
}

export default List;
