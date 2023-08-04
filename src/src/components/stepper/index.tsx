import { useState, useCallback, useRef, MouseEvent, useEffect } from 'react';
import { scrollToId } from '../../utils/scroll';
import useViewportWidth from '../../utils/viewport';
import { useScrollDirection } from '../../utils/scroll';

export type StepperStep = {
    displayText: string,
    id: string,
}

const Stepper = ({ steps, scrollOffset }: {
    steps: Array<StepperStep>,
    scrollOffset: number,
}): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const rootDiv = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const justScrolledTimeout = 800;
    const [justScrolled, setJustScrolled] = useState<boolean>(false);
    const [showWords, setShowWords] = useState<boolean>(true);
    const scrollDirection = useScrollDirection(false);

    const scrollToStep = useCallback((left: number): void => {
        rootDiv.current!.scrollTo({
            left: left - rootDiv.current!.clientWidth / 2,
            behavior: "smooth"
        });
    }, []);

    useEffect(() => {
        const callback = () => {
            if (!justScrolled) {
                setJustScrolled(true);
                setShowWords(scrollDirection === 'up');
                setTimeout(() => {
                    setJustScrolled(false);
                }, justScrolledTimeout);
            }
            const elements: Array<HTMLElement> = steps.map(step => document.querySelector(`#${step.id}`)!);
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].offsetTop - scrollOffset - 300 >= window.scrollY) {
                    setActiveIndex(i - 1);
                    return;
                }
            }
            setActiveIndex(elements.length - 1);
        }
        window.addEventListener('scroll', callback);
        return () => window.removeEventListener('scroll', callback);
    }, [scrollOffset, steps, scrollDirection, justScrolled, justScrolledTimeout]);

    return <div 
        className={"stepper" + ((isScrolled && showWords) ? " stepper-scrolled" : "")} 
        ref={rootDiv}
        onScroll={() => {
            setIsScrolled(rootDiv.current!.scrollLeft > 10);
            setShowWords(true);
        }}
        onClick={() => setShowWords(true)}
    >
        {steps.map((step, stepIndex) => (
            <StepperStepDiv 
                key={stepIndex} 
                isActive={stepIndex === activeIndex} 
                text={step.displayText} 
                targetId={step.id}
                scrollOffset={scrollOffset}
                scroll={left => scrollToStep(left)}
                showWords={showWords}
            />
        ))}
    </div>;
}

const StepperStepDiv = ({ isActive, text, targetId, scrollOffset, scroll, showWords }: {
    isActive: boolean,
    text: string,
    targetId: string,
    scrollOffset: number,
    scroll: (left: number) => void,
    showWords: boolean,
}): JSX.Element => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const circle = useRef<HTMLSpanElement>(null);
    const isDesktop = useViewportWidth();
    const stepDiv = useRef<HTMLDivElement>(null);

    const handleClickOnParent = useCallback((event: MouseEvent): void => {
        if (isHover || isActive || !isDesktop || (event.target as HTMLElement).contains(circle.current)) {
            scrollToId(targetId, scrollOffset);
            if (!isDesktop) {
                scroll(stepDiv.current!.offsetLeft + stepDiv.current!.clientWidth / 2);
            }
        }
    }, [isHover, isActive, targetId, scrollOffset, isDesktop, scroll]);

    return (
        <div 
            className={"stepper-step" + (isActive ? " stepper-step-active" : "") + (isHover ? " stepper-step-hover" : "")}
            onMouseLeave={() => setIsHover(false)}
            onClick={handleClickOnParent}
            ref={stepDiv}
        >
            <span 
                className="stepper-step-circle" 
                onMouseEnter={() => setIsHover(true)}
                ref={circle}
            />
            <div className={"stepper-step-text" + (showWords ? "" : " stepper-step-text-hide")}>{text}</div>
        </div>
    )
}

export default Stepper;