import "./ProductCard.css";
import {add,remove} from '../store/cartSlice';
import { useDispatch,useSelector } from "react-redux";
import {useEffect, useState} from "react";


export const ProductCard = ({productValue}) => {
  const {name, price, image,id} = productValue;
  const dispatch = useDispatch();
  const values = useSelector(state=>state.cartState.cartList);
  const[btn,setBtn] = useState(false);
  
  useEffect(()=>{
   let data = values.find((elem)=>elem.id===id);
   if(data){
    setBtn(true);
   }
   else{
    setBtn(false);
   }
  },[values,id])

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {btn ? ( <button className="remove" onClick={()=>dispatch(remove(productValue))}>Remove</button>):
        (<button onClick={()=>dispatch(add(productValue))}>Add To Cart</button>)}
        
      </div>
    </div>
  )
}
