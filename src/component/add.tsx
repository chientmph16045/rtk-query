import React from 'react'
import {useForm,SubmitHandler} from "react-hook-form"
import {useNavigate} from "react-router-dom"
import { Iproduct } from '../interfacr/product'
import { useAddProductMutation } from '../service'

const Addproduct = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState:{errors}
    }=useForm<Iproduct>()
    const navigate=useNavigate()
    const [addProduct]=useAddProductMutation()
    const onAdd:SubmitHandler<Iproduct>=(data)=>{
        addProduct(data).then(()=>{
            navigate("/")
        })
    }
  return (
    <form onSubmit={handleSubmit(onAdd)}>
        <label>name</label>
        <input  type='text' {...register("name",{required:true})}/>
        {errors.name && <span>khong duoc de trong</span>}
        <label>price</label>
        <input  type='text' {...register("price",{required:true})}/>
        {errors.price && <span>khong duoc de trong</span>}
        <label>description</label>
        <input  type='text' {...register("description",{required:true})}/>
        {errors.description && <span>khong duoc de trong</span>}
        <button type='submit'>add</button>
    </form> 
  )
}

export default Addproduct