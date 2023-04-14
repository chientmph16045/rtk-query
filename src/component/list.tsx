import React from 'react'
import {Link}from "react-router-dom"
import { useDeleteProductMutation, useGetProductsQuery } from '../service'
import { Iproduct } from '../interfacr/product'
const Home = () => {

  const {data:product}=useGetProductsQuery()
  const [deleteProduct]=useDeleteProductMutation()
  const remove=(id:any)=>{
    deleteProduct(id)
  }
  return (
    <div>
        <a><Link to="/add">Add</Link></a>
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>name</td>
                    <td>price</td>
                    <td>description</td>
                    <td>action</td>
                </tr>
                </thead>
                <tbody>
                    {product?.map((item:Iproduct,index)=>(
                        <tr key={index}>
                           <td>{index+1}</td>
                           <td>{item.name}</td>
                           <td>{item.price}</td>
                           <td>{item.description}</td>
                           <td>
                              <button><Link to={`update/${item.id}`}>update</Link></button>
                              <button onClick={()=>remove(item.id)}>delete</button>
                           </td>
                        </tr>
                    ))}
                </tbody>
            
        </table>
    </div>
  )
}

export default Home