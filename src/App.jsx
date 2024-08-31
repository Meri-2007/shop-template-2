
import { useEffect, useState } from 'react'
import './App.css'
import { Basket } from './components/Basket'
import { ProductList } from './components/ProductList'

function App() {
  const[products,setProducts]=useState([
    {id: 101, name:"Puma Rs-X1", price:42, photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/393161/01/sv01/fnd/PHL/fmt/png/RS-X-Games-Sneakers"},
    {id: 102, name:"Puma Rs-X2", price:42, photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380462/01/fnd/PNA/fmt/png/RS-X-Mix-Men's-Sneakers"},
    {id: 103, name:"Puma Rs-X3", price:35, photo:"https://i.ebayimg.com/images/g/bYoAAOSwoFlmNCUN/s-l1200.jpg"},
    {id: 104, name:"Puma Rs-X4", price:65, photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/393161/01/sv01/fnd/PHL/fmt/png/RS-X-Games-Sneakers"},
    {id: 107, name:"Puma Rs-X7", price:120, photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/395551/06/sv01/fnd/EEA/fmt/png"},
    {id: 108, name:"Puma Rs-X8", price:75, photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/371860/01/sv01/fnd/PNA/fmt/png/RS-X-Subvert-Men's-Sneakers"},
    {id: 109, name:"Puma Rs-X8", price:225, photo:"https://images.footlocker.com/is/image/EBFL2/38989601?wid=250&hei=250"},
  ])
  const[basket,setBasket]=useState([])
  const moveToCart = prod =>{
    let found = basket.find(elm=>elm.id == prod.id)
    if(found){
      found.count++
      setBasket([...basket])
    }else{
      setBasket([...basket , {...prod,count:1}])
    }
  }
  const addCount= id=>{
    const bask=basket.map(item=>{
      if(item.id===id){
        item.count+=1
      }
      return item
    })
    setBasket(bask)
  }
  const reduceCount=id=>{
    const bask=basket.map(item=>{
      if(item.id===id&&item.count>1){
        item.count-=1
      }
      return item
    })
    setBasket(bask)
  }
  const removeProduct=id=>{
    const bask=basket.filter(item=>item.id!=id)
      setBasket(bask)
  }
  const [total,setTotal]=useState(0)
  useEffect(()=>{
    const subtotal=basket.reduce((total,item)=>total+item.price*item.count,0)
    console.log("subtotal is updated",subtotal);
    
    setTotal(subtotal)

  },[basket])
 return (
    <>
      <h1>Online Shop</h1>
      <div className='row'>
        <ProductList
          items={products}
          onMove={moveToCart}
        />
        <Basket
          cart={basket}
          addCount={addCount}
          reduceCount={reduceCount}
          removeProduct={removeProduct}
          total={total}
        />
      </div>
    </>
  )
}

export default App
