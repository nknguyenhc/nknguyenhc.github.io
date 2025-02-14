import infoIcon from '../../assets/icons/info-icon.jpg';
import { useWindowDimensions } from '../../utils/viewport';
import Arrow, { ArrowDirection } from './arrow';
import { useState, useMemo, useRef, useEffect } from 'react';

type Dimension = {
  height: number;
  width: number;
};

type Position = {
  top: number;
  left: number;
};

export default function TooltipMobile({
  height,
  width,
  text,
  place,
}: {
  height?: number;
  width: number;
  text: string;
  place: 'top' | 'bottom' | 'left' | 'right';
}): JSX.Element {
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
  const iconContainer = useRef<HTMLDivElement>(null);
  const [arrowPosition, setArrowPosition] = useState<Position>({
    top: -500,
    left: -500,
  });
  const [iconContainerLeft, setIconContainerLeft] = useState<number>(0);
  const offset = 20;
  const horizontalOffset = 20;
  const { windowWidth } = useWindowDimensions();
  const tooltip = useRef<HTMLDivElement>(null);
  const [actualDimension, setActualDimension] = useState<Dimension>({
    height: -5000,
    width: -5000,
  });
  const topStyle = useMemo<number>(() => {
    switch (place) {
      case 'top':
        return arrowPosition.top - actualDimension.height - offset;
      case 'bottom':
        return arrowPosition.top + offset;
      default:
        return arrowPosition.top - actualDimension.height / 2;
    }
  }, [place, arrowPosition, actualDimension]);
  const leftStyle = useMemo<number>(() => {
    switch (place) {
      case 'left':
        return arrowPosition.left - actualDimension.width - offset;
      case 'right':
        return arrowPosition.left + offset;
      default:
        return Math.max(
          Math.min(
            arrowPosition.left - actualDimension.width / 2,
            windowWidth -
              iconContainerLeft -
              actualDimension.width -
              horizontalOffset
          ),
          -iconContainerLeft + horizontalOffset
        );
    }
  }, [place, arrowPosition, actualDimension, windowWidth, iconContainerLeft]);
  const root = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    const rect = iconContainer.current!.getBoundingClientRect();
    setArrowPosition({
      top: (rect.bottom - rect.top) / 2,
      left: (rect.right - rect.left) / 2,
    });
    const callback = () => setIconContainerLeft(rect.left);
    callback();
    window.addEventListener('resize', callback);
    return () => window.removeEventListener('resize', callback);
  }, []);

  useEffect(() => {
    setActualDimension({
      height: isShow ? tooltip.current!.clientHeight : 0,
      width: isShow ? tooltip.current!.clientWidth : 0,
    });
  }, [isShow]);

  useEffect(() => {
    const callback = (e: MouseEvent) => {
      if (root.current!.contains(e.target as HTMLElement)) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };
    document.addEventListener('click', callback);
    return () => document.removeEventListener('click', callback);
  }, []);

  return (
    <div className="tooltip-container" ref={root}>
      <div className="small-img-container" ref={iconContainer}>
        <img src={infoIcon} alt="more info" />
      </div>
      {isShow && (
        <>
          <Arrow direction={arrowDirection} position={arrowPosition} />
          <div
            className="tooltip"
            style={{
              top: topStyle,
              left: leftStyle,
              height: height ? height : '',
              width: width,
            }}
            ref={tooltip}
          >
            {text}
          </div>
        </>
      )}
    </div>
  );
}
