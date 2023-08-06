import data, { Paragraph, Image, Section } from './data';
import { autoHyperlink, highlightCodes } from '../../../utils/text-processing';
import { useState, useRef, useEffect, useCallback, CSSProperties, useMemo } from 'react';
import Stepper, { StepperStep } from '../../stepper/index';
import { textToId } from '../../../utils/text-processing';
import useViewportWidth from '../../../utils/viewport';

export default function DjangoHerokuGuide(): JSX.Element {
    const bodyDiv = useRef<HTMLDivElement>(null);
    const [bodyGap, setBodyGap] = useState<number>(0);
    const root = useRef<HTMLDivElement>(null);
    const [bodyWidth, setBodyWidth] = useState<number>(0);
    const isDesktop = useViewportWidth();

    const displayOffset = useMemo<number>(() => isDesktop ? 100 : 60, [isDesktop]);
    const stepperSteps: Array<StepperStep> = data.sections.map(section => ({
        displayText: section.header,
        id: textToId(section.header),
    }));
    const partial = 1;
    const scrollLag = 0.2;

    const setSectionStyle = useCallback<(sectionIndex: number) => (top: number, bottom: number) => CSSProperties>((sectionIndex) => (top, bottom) => {
        if (top > bodyGap * partial) {
            return sectionIndex > 0 ? {
                opacity: 0
            } : {};
        } else if (top <= bodyGap * partial && top > displayOffset) {
            return sectionIndex > 0 ? {
                opacity: (bodyGap * partial - top) / (bodyGap * partial),
                position: 'fixed',
                top: displayOffset,
                width: bodyWidth
            } : {} ;
        } else if (bottom > window.innerHeight - displayOffset) {
            return {};
        } else if (bottom <= window.innerHeight - displayOffset && bottom > window.innerHeight - bodyGap * partial) {
            return {
                opacity: (bottom - (window.innerHeight - bodyGap * partial)) / (bodyGap * partial),
                position: 'fixed',
                bottom: bottom - top > window.innerHeight ? displayOffset + (window.innerHeight - displayOffset - bottom) * scrollLag : '',
                top: bottom - top <= window.innerHeight ? displayOffset + (top - displayOffset) * scrollLag : '',
                width: bodyWidth
            };
        } else {
            return {
                opacity: 0
            };
        }
    }, [bodyGap, bodyWidth, displayOffset]);

    useEffect(() => {
        const styles = getComputedStyle(bodyDiv.current!);
        setBodyGap(Number(styles.gap.split(' ')[0].slice(0, -2)));
    }, []);

    useEffect(() => {
        const callback = () => {
            const rect = root.current!.getBoundingClientRect();
            setBodyWidth(rect.right - rect.left);
        }
        callback();
        window.addEventListener('resize', callback);
        return () => window.removeEventListener('resize', callback);
    }, []);

    return (
        <div className="central-body" ref={root}>
            <div className="django-heroku-header">{data.header}</div>
            <img className="django-heroku-banner" src={data.banner} alt="guide banner" />
            <div className="django-heroku-body" ref={bodyDiv}>
                {data.sections.map((section, sectionIndex) => (
                    <SectionDiv 
                        section={section} 
                        setSectionStyle={setSectionStyle(sectionIndex)}
                        key={sectionIndex} 
                    />
                ))}
                <div></div>
            </div>
            <Stepper steps={stepperSteps} scrollOffset={displayOffset} />
        </div>
    );
}

const SectionDiv = ({ section, setSectionStyle }: {
    section: Section,
    setSectionStyle: (top: number, bottom: number) => CSSProperties
}): JSX.Element => {
    const [top, setTop] = useState<number>(0);
    const [bottom, setBottom] = useState<number>(0);
    const sectionDiv = useRef<HTMLDivElement>(null);
    const containerDiv = useRef<HTMLDivElement>(null);
    const [containerHeight, setContainerHeight] = useState<number>(0);

    const resetDimensions = useCallback<() => void>(() => {
        const rect: DOMRect = sectionDiv.current!.getBoundingClientRect();
        setContainerHeight(rect.bottom - rect.top);
        const containerRect: DOMRect = containerDiv.current!.getBoundingClientRect();
        setTop(containerRect.top);
        setBottom(containerRect.bottom);
    }, []);

    useEffect(() => {
        resetDimensions();
        window.addEventListener('scroll', resetDimensions);
        window.addEventListener('resize', resetDimensions);
        return () => {
            window.removeEventListener('scroll', resetDimensions);
            window.removeEventListener('resize', resetDimensions);
        }
    }, [resetDimensions]);

    return (
        <div 
            className="django-heroku-section-container"
            style={{
                height: containerHeight
            }}
            ref={containerDiv}
            id={textToId(section.header)}
        >
            <div 
                className="django-heroku-section" 
                style={setSectionStyle(top, bottom)}
                onLoad={resetDimensions}
                ref={sectionDiv}
            >
                <div className="django-heroku-section-header">{section.header}</div>
                <div className="django-heroku-section-body">
                    {section.body.map((subsection, subsectionIndex) => (
                        subsection instanceof Paragraph
                        ? <p 
                            dangerouslySetInnerHTML={{
                                __html: autoHyperlink(highlightCodes(subsection.text))
                            }}
                            className="text-justify"
                            key={subsectionIndex}
                        />
                        : subsection instanceof Image
                        ? <div className="django-heroku-section-body-img" key={subsectionIndex}>
                            <img src={subsection.src} alt="" />
                            <p>{subsection.caption}</p>
                        </div>
                        : <ul key={subsectionIndex}>
                            {subsection.list.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </div>
    );
}