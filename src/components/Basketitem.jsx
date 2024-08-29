import { useEffect, useState } from "react"

export const BasketItem=({cart,removeProduct,reduceCount,addCount})=>{
    const [subtotal,setSubtotal]=useState(0)
    useEffect(()=>{
        const total=cart.map(item => item.count * item.price);
        setSubtotal(total)
    console.log("done ", total);
    
    },[cart])
    return<>
    <p>BasketItem</p>
    <table className="table table-dark table-bordered">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Count</th>
                    <th>Subtotal</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                 cart.map(item => <tr key={item.id}>
                   <td>{item.name}</td>
                   <td>{item.price}</td>
                   <td> {item.count}</td>
                   <td>{subtotal}</td>
                   <td>
                   <button className="btn btn-success"onClick={() => addCount(item.id)}>+</button>
                   <button className="btn btn-warning" onClick={() => reduceCount(item.id)}>-</button>
                   <button className="btn btn-danger" onClick={() =>removeProduct(item.id)}>x</button>
                   </td>
                   </tr>)
            }
            </tbody>
        </table>
    </>
}