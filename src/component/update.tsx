import React, { useEffect } from 'react'
import {useForm,SubmitHandler} from "react-hook-form"
import {useNavigate,useParams} from "react-router-dom"
import { Iproduct } from '../interfacr/product'
import { useGetProductQuery, useUpdateProductMutation } from '../service'
const Updateproduct = () => {
    const {
        register,
        handleSubmit,
        formState:{errors}
    }=useForm<Iproduct>()
    const {id}=useParams()
    const navigate=useNavigate()
    const {data:item}=useGetProductQuery(id)
    const [updateProdut]=useUpdateProductMutation()
    const onUpdate:SubmitHandler<Iproduct>=(data)=>{
        console.log({id:id,...data})
        updateProdut({id:id,...data}).then(()=>{
            navigate("/")
        })
    }
  return (
    <form onSubmit={handleSubmit(onUpdate)}>
        <label>name</label>
        <input  type='text' defaultValue={item?.name} {...register("name",{required:true})}/>
        {errors.name && <span>khong duoc de trong</span>}
        <label>price</label>
        <input  type='text' defaultValue={item?.price} {...register("price",{required:true})}/>
        {errors.price && <span>khong duoc de trong</span>}
        <label>description</label>
        <input  type='text' defaultValue={item?.description} {...register("description",{required:true})}/>
        {errors.description && <span>khong duoc de trong</span>}
        <button>update</button>
    </form> 
  )
}

export default Updateproduct