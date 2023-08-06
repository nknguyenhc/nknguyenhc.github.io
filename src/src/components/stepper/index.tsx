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
    const justClickedTimeout = 800;
    const [justClicked, setJustClicked] = useState<boolean>(false);
    const [showWords, setShowWords] = useState<boolean>(true);
    const scrollDirection = useScrollDirection(false);
    const [isOverflow, setIsOverflow] = useState<boolean>(false);

    const scrollToStep = useCallback((left: number): void => {
        rootDiv.current!.scrollTo({
            left: left - rootDiv.current!.clientWidth / 2,
            behavior: "smooth"
        });
    }, []);

    useEffect(() => {
        const callback = () => {
            if (!justClicked) {
                setShowWords(scrollDirection === 'up');
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
    }, [scrollOffset, steps, scrollDirection, justClicked]);

    useEffect(() => {
        const callback = () => setIsOverflow(rootDiv.current!.scrollWidth > rootDiv.current!.clientWidth);
        callback();
        window.addEventListener('resize', callback);
        return () => window.removeEventListener('resize', callback);
    }, []);

    return <div 
        className={"stepper" + (isOverflow ? " stepper-overflow" : "") + ((isScrolled && showWords) ? " stepper-scrolled" : "")} 
        ref={rootDiv}
        onScroll={() => {
            setIsScrolled(rootDiv.current!.scrollLeft > 10);
            setShowWords(true);
        }}
        onClick={() => {
            setShowWords(true);
            setJustClicked(true);
            setTimeout(() => setJustClicked(false), justClickedTimeout);
        }}
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

    const scrollToSelf = useCallback<() => void>(() => {
        scroll(stepDiv.current!.offsetLeft + stepDiv.current!.clientWidth / 2);
    }, [scroll]);

    const handleClickOnParent = useCallback((event: MouseEvent): void => {
        if (isHover || isActive || !isDesktop || (event.target as HTMLElement).contains(circle.current)) {
            scrollToId(targetId, scrollOffset);
            if (!isDesktop) {
                scrollToSelf();
            }
        }
    }, [isHover, isActive, targetId, scrollOffset, isDesktop, scrollToSelf]);

    useEffect(() => {
        if (isActive) {
            scrollToSelf();
        }
    }, [isActive, scrollToSelf]);

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