import headerItems, { HeaderItemWithLink, DropdownItem } from './header-items';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

type ScrollStatus = {
    direction: 'up' | 'down',
    scrollPos: number
}

export default function Header(): JSX.Element {
    const headerDiv = useRef<HTMLHeadElement>(null);
    const [headerHeight, setHeaderHeight] = useState<string>('');
    const [scrollStatus, setScrollStatus] = useState<ScrollStatus>({
        direction: 'up',
        scrollPos: 0
    });
    const top: number = 200;

    useEffect(() => {
        setHeaderHeight(getComputedStyle(headerDiv.current!).height);
    }, []);

    useEffect(() => {
        const callback = (): void => {
            setScrollStatus((state: ScrollStatus): ScrollStatus => ({
                direction: (window.scrollY > state.scrollPos && window.scrollY > top) ? 'down' : 'up',
                scrollPos: window.scrollY
            }))
        }
        window.addEventListener('scroll', callback);
        return () => window.removeEventListener('scroll', callback);
    }, []);

    return (
        <header 
            ref={headerDiv}
            style={{
                height: headerHeight
            }}
            className={scrollStatus.direction === 'down' ? 'header-hide' : ''}
        >
            {headerItems.map((item, i) => (
                item instanceof HeaderItemWithLink
                ? <Link to={item.url} key={i}>
                    <div className="header-item">{item.text}</div>
                </Link>
                : <HeaderDropdown text={item.text} dropdown={item.dropdown} key={i} />
            ))}
        </header>
    );
}

function HeaderDropdown({ 
    text, 
    dropdown, 
}: {
    text: string,
    dropdown: Array<DropdownItem>
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
                    className={"header-dropdown" + (showDropdown ? " header-dropdown-hover": "")}
                    style={{
                        height: showDropdown ? `${dropdownDiv.current!.scrollHeight - Number(getComputedStyle(dropdownDiv.current!).padding.slice(0, -2))}px` : ''
                    }}
                    ref={dropdownDiv}
                >
                    {dropdown.map((item, i) => (
                        <Link to={item.url} key={i}>
                            <div 
                                className="header-dropdown-item"
                                onClick={() => {
                                    setShowDropdown(false)
                                }}
                            >
                                {item.text}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}