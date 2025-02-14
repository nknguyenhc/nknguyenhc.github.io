import headerItems, { HeaderItemWithLink, DropdownItem } from './header-items';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useScrollDirection } from '../../utils/scroll';

export default function Header(): JSX.Element {
  const scrollDirection = useScrollDirection(false);
  const [showHeader, setShowHeader] = useState<boolean>(true);

  useEffect(() => {
    setShowHeader(scrollDirection === 'up');
  }, [scrollDirection]);

  return (
    <header className={!showHeader ? 'header-hide' : ''}>
      {headerItems.map((item, i) =>
        item instanceof HeaderItemWithLink ? (
          <Link to={item.url} key={i}>
            <div className="header-item" onClick={() => window.scrollTo(0, 0)}>
              {item.text}
            </div>
          </Link>
        ) : (
          <HeaderDropdown text={item.text} dropdown={item.dropdown} key={i} />
        )
      )}
      <div className="header-close" onClick={() => setShowHeader(false)}>
        <HeaderClose />
      </div>
    </header>
  );
}

function HeaderDropdown({
  text,
  dropdown,
}: {
  text: string;
  dropdown: Array<DropdownItem>;
}): JSX.Element {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownDiv = useRef<HTMLDivElement>(null);
  const dropdownContainer = useRef<HTMLDivElement>(null);

  return (
    <div
      className="header-item-container"
      onMouseLeave={() => {
        setShowDropdown(false);
      }}
      onMouseOver={(event) => {
        if (!dropdownContainer.current!.contains(event.target as HTMLElement)) {
          setShowDropdown(true);
        }
      }}
    >
      <div className="header-item">{text}</div>
      <div className="header-dropdown-container" ref={dropdownContainer}>
        <div
          className={
            'header-dropdown' + (showDropdown ? ' header-dropdown-hover' : '')
          }
          style={{
            height: showDropdown
              ? `${dropdownDiv.current!.scrollHeight - 2 * Number(getComputedStyle(dropdownDiv.current!).padding.slice(0, -2))}px`
              : '',
          }}
          ref={dropdownDiv}
        >
          {dropdown.map((item, i) => (
            <Link to={item.url} key={i}>
              <div
                className="header-dropdown-item"
                onClick={() => {
                  setShowDropdown(false);
                  window.scrollTo(0, 0);
                }}
              >
                {item.text}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const HeaderClose = (): JSX.Element => (
  <svg height="20" width="20">
    <line x1="2" x2="18" y1="2" y2="18" />
    <line x1="2" x2="18" y1="18" y2="2" />
  </svg>
);
