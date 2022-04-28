import { Avocado } from '@components/SVGIcons/Avocado';
import { DieAvocado } from '@components/SVGIcons/DieAvocado';
import { useState } from 'react';

export const Header = () => {
  const [isAlive, setIsAlive] = useState(true);
  const [clickCount, setClickCount] = useState(0);

  const onClick = () => {
    setClickCount(clickCount + 1);
    if (clickCount >= 3) setIsAlive(false);
  }

  return (
    <header
      className={`text-center mt-8 mb-12 flex items-center justify-center`}
    >
      <h1
        className={`text-5xl font-semibold`}
      >
        Avo
      </h1>
      {
        (isAlive)
          ? <Avocado
              size={'100px'}
              className={`hover:animate-wiggle active:animate-bounce-slow cursor-pointer`}
              onClick={onClick}
          />
          : <DieAvocado size={'100px'} />
      }
      <h1
        className={`text-5xl font-semibold`}
      >
        Store
      </h1>
    </header>
  )
}
