import { Dispatch, SetStateAction, useCallback } from 'react';
import Arrow from './arrow';

export default function Pagination({
    leftPositionClass,
    rightPositionClass,
    indicatorPositionClass,
    setIndex,
    currIndex,
    numOfItems,
}: {
    leftPositionClass: string,
    rightPositionClass: string,
    indicatorPositionClass: string,
    setIndex: Dispatch<SetStateAction<number>>,
    currIndex: number,
    numOfItems: number,
}): JSX.Element {
    const handleLeft = useCallback<() => void>(() => {
        if (currIndex > 0) {
            setIndex(currIndex - 1);
        }
    }, [currIndex, setIndex]);

    const handleRight = useCallback<() => void>(() => {
        if (currIndex < numOfItems - 1) {
            setIndex(currIndex + 1);
        }
    }, [currIndex, numOfItems, setIndex]);

    return <>
        <Arrow 
            isLeft={true} 
            isDisabled={currIndex === 0} 
            positionClass={leftPositionClass} 
            click={handleLeft}
        />
        <Arrow 
            isLeft={false} 
            isDisabled={currIndex === numOfItems - 1} 
            positionClass={rightPositionClass} 
            click={handleRight}
        />
    </>;
}