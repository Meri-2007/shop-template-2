export const BasketItem=({cart,removeProduct,reduceCount,addCount})=>{
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
                   <td>{item.count * item.price}</td>
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