import { Greeting } from '@react-module-federation/shared-components';
import styles from './cart-main.module.css';

/* eslint-disable-next-line */
export interface CartMainProps {}

export function CartMain(props: CartMainProps) {
  return (
   <Greeting title='cart' />
  );
}

export default CartMain;
