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