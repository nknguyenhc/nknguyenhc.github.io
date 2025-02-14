import { useState, useEffect, useMemo, useRef } from 'react';
import Arrow, { ArrowDirection } from './arrow';

type MousePosition = {
  top: number;
  left: number;
};

type Dimension = {
  height: number;
  width: number;
};

export default function TooltipDesktop({
  height,
  width,
  text,
  place,
}: {
  height?: number;
  width?: number;
  text: string;
  place: 'top' | 'bottom' | 'left' | 'right';
}): JSX.Element {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    top: -500,
    left: -500,
  });
  const [actualDimension, setActualDimension] = useState<Dimension>({
    height: 0,
    width: 0,
  });
  const textDiv = useRef<HTMLDivElement>(null);
  const offset = 20;
  const topStyle = useMemo<number>(() => {
    switch (place) {
      case 'top':
        return mousePosition.top - actualDimension.height - offset;
      case 'bottom':
        return mousePosition.top + offset;
      default:
        return mousePosition.top - actualDimension.height / 2;
    }
  }, [actualDimension, mousePosition, place]);
  const leftStyle = useMemo<number>(() => {
    switch (place) {
      case 'left':
        return mousePosition.left - actualDimension.width - offset;
      case 'right':
        return mousePosition.left + offset;
      default:
        return mousePosition.left - actualDimension.width / 2;
    }
  }, [actualDimension, mousePosition, place]);
  const arrowDirection = useMemo<ArrowDirection>(() => {
    switch (place) {
      case 'left':
        return 'right';
      case 'right':
        return 'left';
      case 'top':
        return 'down';
      case 'bottom':
        return 'up';
    }
  }, [place]);

  useEffect(() => {
    const callback = (event: MouseEvent) => {
      setMousePosition({
        top: event.clientY,
        left: event.clientX,
      });
    };
    window.addEventListener('mousemove', callback);
    return () => window.removeEventListener('mousemove', callback);
  }, []);

  useEffect(() => {
    setActualDimension({
      height: textDiv.current!.clientHeight,
      width: textDiv.current!.clientWidth,
    });
  }, []);

  return (
    <>
      <Arrow
        direction={arrowDirection}
        position={{
          top: mousePosition.top,
          left: mousePosition.left,
        }}
      />
      <div
        className="tooltip"
        style={{
          top: topStyle,
          left: leftStyle,
          height: height ? height : '',
          width: width ? width : '',
        }}
        ref={textDiv}
      >
        {text}
      </div>
    </>
  );
}
