import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props {
  href: string;
  exact?: boolean;
  children: ReactNode;
  className?: string;
}

export const NavLink = ({ href, exact, children, className }: Props) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  return (
    <Link href={ href }>
      <a>
        <div
          className={ `relative flex justify-center` }
        >
          <div
            className={ `${ className } ${ (isActive) ? 'bg-green-200 hover:bg-green-200' : 'hover:bg-green-100' } z-10 px-6 w-40 duration-300 transition h-14 flex items-center justify-center text-gray-700 hover:text-gray-900 font-bold` }
          >
            { children }
          </div>
          {
            (isActive) && (
              <div
                className={ `${ className } ${ (isActive) ? 'bg-green-200 hover:bg-green-200' : 'hover:bg-green-100' } w-4 h-4 absolute top-12 rotate-45 bg-green-200 border-b-2 border-gray-200` }
              />
            )
          }
        </div>
      </a>
    </Link>
  );
};
