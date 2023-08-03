import { useState, useCallback, useRef, MouseEvent, useEffect } from 'react';
import { scrollToId } from '../../utils/scroll';

export type StepperStep = {
    displayText: string,
    id: string,
}

const Stepper = ({ steps, scrollOffset }: {
    steps: Array<StepperStep>,
    scrollOffset: number,
}): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState(-1);

    useEffect(() => {
        const callback = () => {
            const elements: Array<HTMLElement> = steps.map(step => document.querySelector(`#${step.id}`)!);
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].offsetTop - 2 * scrollOffset >= window.scrollY) {
                    setActiveIndex(i - 1);
                    return;
                }
            }
            setActiveIndex(elements.length - 1);
        }
        window.addEventListener('scroll', callback);
        return () => window.removeEventListener('scroll', callback);
    }, []);

    return <div className="stepper">
        {steps.map((step, stepIndex) => (
            <StepperStepDiv 
                key={stepIndex} 
                isActive={stepIndex === activeIndex} 
                text={step.displayText} 
                targetId={step.id}
                scrollOffset={scrollOffset}
            />
        ))}
    </div>;
}

const StepperStepDiv = ({ isActive, text, targetId, scrollOffset }: {
    isActive: boolean,
    text: string,
    targetId: string,
    scrollOffset: number,
}): JSX.Element => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const circle = useRef<HTMLSpanElement>(null);

    const handleClickOnParent = useCallback((event: MouseEvent): void => {
        if (isHover || isActive || (event.target as HTMLElement).contains(circle.current)) {
            scrollToId(targetId, scrollOffset);
        }
    }, [isHover]);

    return (
        <div 
            className={"stepper-step" + (isActive ? " stepper-step-active" : "") + (isHover ? " stepper-step-hover" : "")}
            onMouseLeave={() => setIsHover(false)}
            onClick={handleClickOnParent}
        >
            <span 
                className="stepper-step-circle" 
                onMouseEnter={() => setIsHover(true)}
                ref={circle}
            />
            <div className="stepper-step-text">{text}</div>
        </div>
    )
}

export default Stepper;