import { useState, useEffect } from 'react';

export default function useViewportWidth() {
    const [isDesktop, setIsDesktop] = useState<boolean>(false);
    const desktopCutoff: number = 968;

    useEffect(() => {
        const callback = () => setIsDesktop(window.innerWidth >= desktopCutoff);
        callback();
        window.addEventListener('resize', callback);
        return () => window.removeEventListener('resize', callback);
    }, []);

    return isDesktop;
}

export const useWindowDimensions = () => {
    const [windowHeight, setHeight] = useState<number>(0);
    const [windowWidth, setWidth] = useState<number>(0);

    useEffect(() => {
        const callback = () => {
            setHeight(window.innerHeight);
            setWidth(window.innerWidth);
        };
        callback();
        window.addEventListener("resize", callback);
        return () => window.removeEventListener("resize", callback);
    }, []);

    return {
        windowHeight,
        windowWidth,
    }
}