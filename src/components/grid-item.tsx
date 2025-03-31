import { ReactNode, useState, useRef, useEffect } from 'react';

interface Props {
  children: ReactNode;
}

export const GridItem = ({ children }: Props) => {
  const [mouseDownPosition, setMouseDownPosition] = useState<{ x: number; y: number } | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;

    if (mouseDownPosition == null || element == null) return;

    const handleDrag = (e: MouseEvent) => {
      const diff = {
        x: e.clientX - mouseDownPosition.x,
        y: e.clientY - mouseDownPosition.y,
      };

      element.style.transform = `translate(${diff.x}px, ${diff.y}px)`;
    };

    document.addEventListener('mousemove', handleDrag);

    return () => {
      document.removeEventListener('mousemove', handleDrag);
    };
  }, [mouseDownPosition]);

  return (
    <div
      ref={elementRef}
      style={{ width: 'fit-content', height: 'fit-content' }}
      onMouseDown={(e) => {
        setMouseDownPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      onMouseUp={() => {
        setMouseDownPosition(null);
        elementRef.current?.style.removeProperty('transform');
      }}
    >
      {children}
    </div>
  );
};

