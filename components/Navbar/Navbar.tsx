import { CartLink } from '@components/Link/CartLink';
import { NavLink } from '@components/Link/NavLink';

import { Avocado } from '../SVGIcons/Avocado';

export const Navbar = () => {
  return (
    <nav
      className={`flex w-full justify-start items-center bg-white border-b-2 border-gray-200`}
    >
      <div
        className={`flex items-center justify-start w-full mx-auto text-gray-800`}
      >
        <NavLink
          href="/"
          exact
          className={''}>
            <Avocado />
            <p>Avo Store</p>
        </NavLink>

        <NavLink
          href="/about"
          className={''}>
          <p>About</p>
        </NavLink>
      </div>

      <div>
        <CartLink />
      </div>
    </nav>
  );
}
