import { MouseEvent, useCallback, useEffect, useRef, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setImage } from "../../redux/modalSlice";

export default function ImageModal(): JSX.Element {
    const imageElem = useRef<HTMLImageElement>(null);
    const image: string = useAppSelector(state => state.modal.image);
    const isShow = useMemo(() => image !== '', [image]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isShow) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isShow]);

    const handleClick = useCallback((e: MouseEvent) => {
        if (e.target !== imageElem.current) {
            dispatch(setImage(''));
        }
    }, []);

    return <div className={"modal" + (isShow ? " modal-show" : "")} onClick={handleClick}>
        <img src={image} alt="" ref={imageElem} />
    </div>;
}
