import { Layout } from '@components/Layout/Layout';
import { ListCartItems } from '@components/ListCards/ListCartItems';
import { useCart } from '@store/Cart';

const Cart = () => {
  const { subTotal, items } = useCart();

  return (
    <Layout>
      {
        (items.length === 0)
          ? (
            <div className={ `border-yellow-300 border-2 rounded-lg bg-yellow-100 p-4 w-full max-w-5xl` }>
              <h2 className={ `text-lg font-semibold` }>Your cart is empty</h2>
              <p>You will need to add some items to the cart before you can checkout.</p>
            </div>
          )
          : <ListCartItems items={items} />
      }


      <div
        className={ `border-b-2 border-gray-200 my-8 w-full max-w-5xl` }
      />

      <div
        className={ `border-2 border-gray-200 w-full max-w-5xl rounded-lg p-4 flex items-center justify-between` }
      >
        <div className={ `flex gap-4 items-center` }>
          <p
            className={ `text-lg font-semibold` }
          >Sub total:
          </p>
          <p>{ subTotal.toFixed(2) } $</p>
        </div>
        <button
          className={ `bg-green-400 text-white p-2 rounded font-semibold hover:bg-green-500 active:bg-green-600` }
        >Check out
        </button>
      </div>
    </Layout>
  );
};

export default Cart;
