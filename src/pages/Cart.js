import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";
import {useSelector} from 'react-redux';

export const Cart = () => {
  useTitle("Cart");
  
  const products = useSelector(state=>state.cartState.cartList);
  const d = useSelector(state=>state.cartState);
  console.log(d);
  const total = useSelector(state=>state.cartState.total);

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {products.length}/${total}</h1>
        { products.map((product) => (
          <CartCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}
