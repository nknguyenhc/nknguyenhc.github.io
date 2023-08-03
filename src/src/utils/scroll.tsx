import { useState, useEffect } from 'react';

export const scrollToId = (id: string, offset: number): void => {
    const div = document.querySelector(`#${id}`);
    if (div) {
        window.scrollTo({
            top: (div as HTMLElement).offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

type ScrollStatus = {
    direction: 'up' | 'down',
    scrollPos: number
}

export function useScrollDirection(excludeTop: boolean) {
    const [scrollStatus, setScrollStatus] = useState<ScrollStatus>({
        direction: 'up',
        scrollPos: 0
    });
    const top: number = 200;

    useEffect(() => {
        const callback = (): void => {
            setScrollStatus((state: ScrollStatus): ScrollStatus => ({
                direction: (window.scrollY > state.scrollPos && (excludeTop || window.scrollY > top)) ? 'down' : 'up',
                scrollPos: window.scrollY
            }));
        }
        window.addEventListener('scroll', callback);
        return () => window.removeEventListener('scroll', callback);
    }, [excludeTop]);

    return scrollStatus.direction;
}