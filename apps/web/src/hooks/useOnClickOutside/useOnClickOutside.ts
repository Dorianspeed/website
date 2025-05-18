import { type RefObject, useEffect } from 'react';

const useOnClickOutside = (
  ref: RefObject<HTMLElement | null>,
  handler: (event: MouseEvent | TouchEvent) => void
) => {
  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      handler(event);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handler, ref]);
};

export default useOnClickOutside;
