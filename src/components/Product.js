import React, { useState } from 'react'

function Product() {

    const[name,setName]=useState('');
    const[price,setPrice]=useState('');
    const[quantity,setQuantity]=useState('');
    const[brand,setBrand]=useState('');

    const AddProduct = async()=>{
        let result = await fetch('http://localhost:8080/products',{
            method:"post",
            body:JSON.stringify({name,price,quantity,brand}),
            headers:{
                "Content-Type":"application/json"
        }
        });
        result = await result.json();
        console.log(result);
    }

  return (
    <div>
        
        <h1>Product Details</h1>
        <form>
            <label>Name</label>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} placeholder="Enter Product Name"/><br/>
            <label>Price</label>
            <input type="text" onChange={(e)=>{setPrice(e.target.value)}} value={price} placeholder="Enter Price"/><br/>
            <label>Quantity</label>
            <input type="text" onChange={(e)=>{setQuantity(e.target.value)}} value={quantity} placeholder="Enter Quantity"/><br/>
            <label>Brand</label>
            <input type="text"onChange={(e)=>{setBrand(e.target.value)}} value={brand} placeholder="Enter Brand Name"/><br/>
            <button onClick={AddProduct}>Submit</button>
        </form>
    </div>
  )
}

export default Product