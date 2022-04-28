import { ItemCart } from '@components/Cards/ItemCart';
import { CartItemType } from '@store/Cart';

interface Props {
  items: CartItemType[];
}

export const ListCartItems = ({ items }: Props) => {

  return (
    <div className={`w-full max-w-5xl`}>
      {items.map((item) => (
        <ItemCart item={item} key={item.id} />
      ))}
    </div>
  )
}
