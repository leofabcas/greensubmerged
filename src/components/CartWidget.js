import { RiShoppingCartLine } from 'react-icons/ri';
import '../App.css';
// import classes from '../../src/formatoCarrito.css'

export default function CartWidget() {
  return (
    <div>
      <h2 className='CartWidgetStyle'><RiShoppingCartLine/></h2>
    </div>
  )
}

// const CartWidget = () => {

//   return (
//     <div className={classes.formatoCarrito}>
//       <RiShoppingCartLine />
//     </div>
//   );
// }

// export default CartWidget;
