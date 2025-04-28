import { type RefObject, useEffect, useState } from 'react';

type ElementRectPosition = Extract<keyof DOMRectReadOnly, 'bottom' | 'left' | 'right' | 'top'>;

type ElementPositionHookProps = {
  elementRef: RefObject<HTMLElement | null>;
  rectPosition: ElementRectPosition;
};

const useElementPosition = ({ elementRef, rectPosition }: ElementPositionHookProps) => {
  const [elementPosition, setElementPosition] = useState<number>(0);

  const handleScroll = () => {
    const currentPosition = elementRef.current?.getBoundingClientRect()[rectPosition] || 0;

    //* Avoid renders when not in this range
    if (currentPosition > -200 && currentPosition < 200) {
      setElementPosition(currentPosition);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return elementPosition;
};

export default useElementPosition;
