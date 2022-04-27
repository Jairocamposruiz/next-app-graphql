import Link from 'next/link';

export const Footer = () => {
  return (
    <footer
      className={`border-t-2 border-gray-200 py-8 flex flex-col items-center justify-center`}
    >
      <div className={`grid grid-cols-3 w-full max-w-5xl`}>
        <div>
          <p className={`font-bold mb-2`}>About</p>
          <Link
            href={`http://localhost:3000/about`}
          >
            <a
              className={`text-blue-500`}
            >About us</a>
          </Link>
        </div>
        <div>
          <p className={`font-bold mb-2`}>Services</p>
          <Link
            href={`http://localhost:3000`}
          >
            <a
              className={`text-blue-500`}
            >All products</a>
          </Link>
        </div>
        <div>
          <p className={`font-bold mb-2`}>Made by</p>
          <p>
            <a
              href={`https://blog.jcoder.es`}
              target={`_blank`}
              className={`text-blue-500`}
            >blog.JCodeR.es </a>
            this project is a example of Next.js with TypeScript, TailwindCSS and GraphQL.
          </p>
        </div>
      </div>
      <div
        className={`mt-8 text-gray-400 text-sm text-center`}
      >
        <p>
          Icons made by
          <a
            className={`text-blue-500`}
            href={`https://www.flaticon.com/authors/freepik`}
            target={`_blank`}
          > Freepik </a>
          from
          <a
            className={`text-blue-500`}
            href={`https://www.flaticon.com/`}
            target={`_blank`}
          > www.flaticon.com</a>
        </p>
        <p>
          Avocado images taken from
          <a
            className={`text-blue-500`}
            href={`https://californiaavocado.com/avocado101/avocado-varieties/`}
            target={`_blank`}
          > Avocado 101 </a>
          at
          <a
            className={`text-blue-500`}
            href={`https://californiaavocado.com/`}
            target={`_blank`}
          > California Avocado</a>
        </p>
      </div>
    </footer>
  );
}
