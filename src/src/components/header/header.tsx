import headerItems, { HeaderItemWithLink, DropdownItem } from './header-items';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useScrollDirection } from '../../utils/scroll';

export default function Header(): JSX.Element {
    const headerDiv = useRef<HTMLHeadElement>(null);
    const [headerHeight, setHeaderHeight] = useState<string>('');
    const scrollDirection = useScrollDirection(false);

    useEffect(() => {
        setHeaderHeight(getComputedStyle(headerDiv.current!).height);
    }, []);

    return (
        <header 
            ref={headerDiv}
            style={{
                height: headerHeight
            }}
            className={scrollDirection === 'down' ? 'header-hide' : ''}
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
                        height: showDropdown ? `${dropdownDiv.current!.scrollHeight - 2 * Number(getComputedStyle(dropdownDiv.current!).padding.slice(0, -2))}px` : ''
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