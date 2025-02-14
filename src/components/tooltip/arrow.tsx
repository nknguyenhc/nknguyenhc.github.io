import { useMemo } from 'react';

export type ArrowDirection = 'left' | 'right' | 'up' | 'down';

export default function Arrow({
  direction,
  position,
}: {
  direction: ArrowDirection;
  position: {
    top: number;
    left: number;
  };
}): JSX.Element {
  const rotateStyle = useMemo<string>(() => {
    switch (direction) {
      case 'left':
        return '';
      case 'right':
        return 'rotate(180deg)';
      case 'down':
        return 'rotate(270deg)';
      case 'up':
        return 'rotate(90deg)';
    }
  }, [direction]);
  const tipOffset = 10;
  const topStyle = useMemo<number>(() => {
    switch (direction) {
      case 'up':
        return position.top - 10 + tipOffset;
      case 'down':
        return position.top - 10 - tipOffset;
      default:
        return position.top - 10;
    }
  }, [direction, position]);
  const leftStyle = useMemo<number>(() => {
    switch (direction) {
      case 'left':
        return position.left + tipOffset;
      case 'right':
        return position.left - tipOffset;
      default:
        return position.left;
    }
  }, [direction, position]);

  return (
    <svg
      height="20"
      width="10"
      className="tooltip-arrow"
      style={{
        top: topStyle,
        left: leftStyle,
        transform: rotateStyle,
      }}
    >
      <polygon points="10,0 0,10 10,20"></polygon>
    </svg>
  );
}
