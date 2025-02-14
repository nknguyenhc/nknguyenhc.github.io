import { useEffect, useRef, useState } from 'react';
import { DropdownItem } from './hover-dropdown';

export default function ClickDropdown({
  text,
  items,
}: {
  text: string;
  items: Array<DropdownItem>;
}): JSX.Element {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(-1);
  const itemsDiv = useRef<HTMLDivElement>(null);
  const buttonDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeight(Number(getComputedStyle(itemsDiv.current!).height.slice(0, -2)));
    const callback = (e: MouseEvent) => {
      if (
        !itemsDiv.current!.contains(e.target as HTMLElement) &&
        !buttonDiv.current!.contains(e.target as HTMLElement)
      ) {
        setIsShow(false);
      }
    };
    document.addEventListener('click', callback);
    return () => document.removeEventListener('click', callback);
  }, []);

  return (
    <div className="dropdown-click">
      <div
        className="dropdown-click-button"
        ref={buttonDiv}
        onClick={() => setIsShow((state) => !state)}
      >
        <div className="dropdown-click-button-text">{text}</div>
        <ArrowDown isInverted={isShow} />
      </div>
      <div className="dropdown-click-items-container">
        <div
          className={
            'dropdown-click-items' +
            (isShow ? '' : ' dropdown-click-items-hide')
          }
          style={{
            height: height >= 0 ? (isShow ? height : 0) : '',
          }}
          ref={itemsDiv}
        >
          {items.map((item, itemIndex) => (
            <div
              className="dropdown-click-item"
              onClick={() => {
                setIsShow(false);
                item.set(itemIndex);
              }}
              key={itemIndex}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const ArrowDown = ({ isInverted }: { isInverted: boolean }): JSX.Element => {
  return (
    <svg
      className={
        'dropdown-click-arrow' +
        (isInverted ? ' dropdown-click-arrow-inverted' : '')
      }
      height="10"
      width="18"
    >
      <line x1="1" x2="9" y1="1" y2="9" />
      <line x1="9" x2="17" y1="9" y2="1" />
    </svg>
  );
};
