import headerItems, { HeaderItemWithLink, DropdownItem } from './header-items';
import { Link } from 'react-router-dom';
import { useState, useCallback, useRef, useEffect } from 'react';
import { MenuIcon, ArrowRightIcon, LinkIcon, CloseIcon } from './menu-icon';
import { useScrollDirection } from '../../utils/scroll';

export default function HeaderMobile(): JSX.Element {
  const scrollDirection = useScrollDirection(false);
  const [dropdown, setDropdown] = useState<Array<DropdownItem>>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [numOfLinesShown, setNumOfLinesShown] = useState<number>(0);
  const currTimeout = useRef<number>(-1);
  const currInterval = useRef<number>(-1);

  useEffect(() => {
    document.body.style.overflow = showMenu ? 'hidden' : '';
  }, [showMenu]);

  const showItems = useCallback((dropdown: Array<DropdownItem>) => {
    setDropdown(dropdown);
    setShowDropdown(true);
  }, []);

  const hideItems = useCallback(() => {
    setShowDropdown(false);
  }, []);

  const openMenu = useCallback(() => {
    setShowMenu(true);
    setShowDropdown(false);
    clearTimeout(currTimeout.current);
    clearInterval(currInterval.current);
    currTimeout.current = window.setTimeout(() => {
      currInterval.current = window.setInterval(() => {
        setNumOfLinesShown((num) => num + 1);
      }, 300);
    }, 500);
  }, []);

  const closeMenu = useCallback((scrollToTop: boolean) => {
    setShowMenu(false);
    clearTimeout(currTimeout.current);
    clearInterval(currInterval.current);
    setNumOfLinesShown(0);
    if (scrollToTop) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <header>
      <div
        className={
          'header-icon-container' +
          (scrollDirection === 'down' ? ' header-icon-container-hide' : '')
        }
      >
        <div className="header-icon" onClick={openMenu}>
          <MenuIcon />
        </div>
      </div>

      <div
        className={
          'header-menu-container' +
          (showMenu ? '' : ' header-menu-container-hide')
        }
      ></div>
      <div className={'header-menu' + (showMenu ? '' : ' header-menu-hide')}>
        <div
          className={
            'header-menu-main' +
            (showDropdown ? ' header-menu-main-shifted' : '')
          }
        >
          {headerItems.map((item, i) =>
            item instanceof HeaderItemWithLink ? (
              <Link to={item.url} key={i}>
                <div
                  className={
                    'header-menu-item' +
                    (i >= numOfLinesShown ? ' header-menu-item-hide' : '')
                  }
                  onClick={() => closeMenu(true)}
                >
                  <div
                    className={
                      'header-menu-item-text' +
                      (i >= numOfLinesShown
                        ? ' header-menu-item-text-hide'
                        : '')
                    }
                  >
                    {item.text}
                  </div>
                  <LinkIcon />
                </div>
              </Link>
            ) : (
              <div
                className={
                  'header-menu-item' +
                  (i >= numOfLinesShown ? ' header-menu-item-hide' : '')
                }
                key={i}
                onClick={() => showItems(item.dropdown)}
              >
                <div
                  className={
                    'header-menu-item-text' +
                    (i >= numOfLinesShown ? ' header-menu-item-text-hide' : '')
                  }
                >
                  {item.text}
                </div>
                <ArrowRightIcon />
              </div>
            )
          )}
        </div>
        <SecondaryMenu
          dropdown={dropdown}
          show={showDropdown}
          closeMenu={() => closeMenu(true)}
        />
        {showDropdown && (
          <div className="header-menu-back" onClick={hideItems}>
            <ArrowRightIcon />
          </div>
        )}
        <div
          className={
            'header-menu-close' +
            (numOfLinesShown === 0 ? ' header-menu-close-hide' : '')
          }
          onClick={() => closeMenu(false)}
        >
          <CloseIcon />
        </div>
      </div>
    </header>
  );
}

const SecondaryMenu = ({
  dropdown,
  show,
  closeMenu,
}: {
  dropdown: Array<DropdownItem>;
  show: boolean;
  closeMenu: () => void;
}): JSX.Element => {
  return (
    <div
      className={
        'header-menu-secondary' + (show ? ' header-menu-secondary-show' : '')
      }
    >
      {dropdown.map((item, i) => (
        <Link to={item.url} key={i}>
          <div className="header-menu-item" onClick={closeMenu}>
            <div className="header-menu-item-text">{item.text}</div>
            <LinkIcon />
          </div>
        </Link>
      ))}
    </div>
  );
};
