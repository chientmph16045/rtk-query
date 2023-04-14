import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { Iproduct } from "./interfacr/product"
export const productApi =createApi({
    reducerPath:"productApi",
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3000/"}),
    tagTypes:['product'],
    endpoints:(builder)=>({
        getProducts:builder.query<Iproduct,void>({
            query:()=>`products`,
            providesTags:['product']
        }),
        getProduct:builder.query<Iproduct,any>({
            query:(id)=>`products/${id}`,
            providesTags:['product']
        }),
        addProduct:builder.mutation<Iproduct,Partial<Iproduct>>({
            query:(product)=>{
                return{
                    url:`products`,
                    method:"POST",
                    body:product
                }
            },
            invalidatesTags:['product']
        }),
        updateProduct:builder.mutation<Iproduct,Partial<Iproduct>>({
            query:(product)=>{
                return{
                    url:`products/${product.id}`,
                    method:"PUT",
                    body:product
                }
            },
            invalidatesTags:['product']
        }),
        deleteProduct:builder.mutation<Iproduct,Partial<Iproduct>>({
            query:(id)=>{
                return{
                    url:`products/${id}`,
                    method:"DELETE",
                    
                }
            },
            invalidatesTags:['product']
        })
    })
})

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useUpdateProductMutation,
    useAddProductMutation,
    useDeleteProductMutation
}=productApi