import { BasketItem } from "./Basketitem"

export const Basket=({cart,addCount,removeProduct,reduceCount})=>{
    return <div className="col-md-5">
                <h3>items:{cart.length}</h3>

      <BasketItem
        cart={cart}
        addCount={addCount}
        removeProduct={removeProduct}
        reduceCount={reduceCount}
      />
    </div>
}