import { useLayoutEffect, useEffect, useState } from 'react';

export function useWindowSize() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const resize = () => {
    setWidth(window.innerWidth - 50);
    setHeight(window.innerHeight - 50);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', resize);
    resize();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return [width, height];
}
