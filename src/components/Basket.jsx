import { BasketItem } from "./Basketitem"

export const Basket=({cart,addCount,removeProduct,reduceCount,total})=>{
    return <div className="col-md-5">
                <h3>subtotal:{total}</h3>

      <BasketItem
        cart={cart}
        addCount={addCount}
        removeProduct={removeProduct}
        reduceCount={reduceCount}
      />
    </div>
}