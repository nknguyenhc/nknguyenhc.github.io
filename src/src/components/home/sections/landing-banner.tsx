import landing1 from '../../../assets/home/landing-1.jpeg';
import landing2 from '../../../assets/home/landing-2.jpeg';
import landing3 from '../../../assets/home/landing-3.jpeg';
import { useState, useEffect } from 'react';

type Image = {
    src: string,
    circleCrop: boolean
}

const images: Array<Image> = [
    {
        src: landing1,
        circleCrop: true,
    },
    {
        src: landing2,
        circleCrop: false,
    },
    {
        src: landing3,
        circleCrop: true,
    },
];

export default function LandingBanner(): JSX.Element {
    const [showOrder, setShowOrder] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowOrder(curr => (curr + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return <div className='landing-banner'>
        <div className="landing-banner-images" onClick={() => setShowOrder(curr => (curr + 1) % images.length)}>
            {images.map((img, srcIndex) => (
                <img 
                    src={img.src} 
                    alt={`landing image ${srcIndex}`} 
                    key={srcIndex} 
                    className={"landing-banner-image" + (img.circleCrop ? "" : " landing-banner-image-not-circle") + (showOrder === srcIndex ? " landing-banner-image-show" : "")}
                />
            ))}
        </div>
        <div className="landing-banner-text">
            <div className="landing-banner-text-top">Hello, I'm</div>
            <div className="landing-banner-text-bottom">Nguyen Khoi Nguyen</div>
        </div>
    </div>
}