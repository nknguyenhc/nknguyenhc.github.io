import { useState, useEffect, useCallback } from 'react';
import useViewportWidth from './viewport';

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

export const useCheckAndScrollToId = (id: string, offset: number): void => {
    const scrollDirection = useScrollDirection(true);
    const [isScrolling, setIsScrolling] = useState<boolean>(false);
    const topOffset = 50;
    const isDesktop = useViewportWidth();

    const handleScroll = useCallback<() => void>(() => {
        if (isDesktop) {
            const div = document.querySelector(`#${id}`);
            if (!isScrolling && div) {
                const rect: DOMRect = div.getBoundingClientRect();
                if ((
                        (rect.top > offset && rect.top < window.innerHeight - offset && scrollDirection === 'down') || 
                        (rect.bottom > offset && rect.bottom < window.innerHeight - offset && scrollDirection === 'up')
                    ) && window.scrollY > topOffset) {
                    scrollToId(id, 0);
                    setIsScrolling(true);
                    setTimeout(() => setIsScrolling(false), 500);
                }
            }
        }
    }, [isScrolling, scrollDirection, isDesktop, offset, id]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);
}