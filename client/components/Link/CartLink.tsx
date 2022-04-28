import { NavLink } from '@components/Link/NavLink';
import { Basket } from '@components/SVGIcons/Basket';
import { useCart } from '@store/Cart';

export const CartLink = () => {

  const { count } = useCart();

  return (
    <NavLink href={'/cart'}>
      <Basket />
      <p
        className={`ml-2`}
      >Cart ({count})</p>
    </NavLink>
  )
}
