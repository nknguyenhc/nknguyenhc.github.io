import { Dispatch, SetStateAction, useCallback, useRef, useState } from "react";


type DropdownItem = {
    text: string,
    set: Dispatch<SetStateAction<number>>,
}

export default function HoverDropdown({ text, items }: {
    text: string,
    items: Array<DropdownItem>,
}): JSX.Element {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const hoveringTimeout = useRef<number>(-1);
    const timeout = 200;

    const setHovering = useCallback<() => void>(() => {
        setIsHovering(true);
        clearTimeout(hoveringTimeout.current);
    }, []);

    const setNotHovering = useCallback<() => void>(() => {
        clearTimeout(hoveringTimeout.current!);
        hoveringTimeout.current = window.setTimeout(() => {
            setIsHovering(false);
        }, timeout);
    }, []);

    return <div 
        className="dropdown-hover"
        onMouseEnter={setHovering}
        onMouseLeave={setNotHovering}
    >
        <div className="dropdown-hover-button">{text}</div>
        {isHovering && <div className="dropdown-hover-items">
            {items.map((item, itemIndex) => (
                <div 
                    className="dropdown-hover-item"
                    onClick={() => item.set(itemIndex)}
                >
                    {item.text}
                </div>
            ))}
        </div>}
    </div>;
}