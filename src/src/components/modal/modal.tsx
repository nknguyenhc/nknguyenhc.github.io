import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setImage } from "../../redux/modalSlice";
import { useWindowDimensions } from "../../utils/viewport";

type Dimensions = {
    height?: number,
    width?: number,
    left?: number,
    top?: number,
};

export default function ImageModal(): JSX.Element {
    const imageElem = useRef<HTMLImageElement>(null);
    const modalInfo = useAppSelector(state => state.modal);
    const [isShow, setIsShow] = useState<boolean>(false);
    const [dimensions, setDimensions] = useState<Dimensions>({});
    const dispatch = useAppDispatch();
    const { windowHeight, windowWidth } = useWindowDimensions();

    useEffect(() => {
        if (modalInfo.image !== '') {
            document.body.style.overflow = 'hidden';
            setDimensions({});
            window.setTimeout(() => {
                const rect = imageElem.current!.getBoundingClientRect();
                setDimensions({
                    height: modalInfo.height,
                    width: modalInfo.width,
                    left: modalInfo.left,
                    top: modalInfo.top,
                });
                window.setTimeout(() => {
                    setDimensions({
                        height: rect.height,
                        width: rect.width,
                        top: windowHeight / 2 - rect.height / 2,
                        left: windowWidth / 2 - rect.width / 2,
                    });
                    setIsShow(true);
                }, 10);
            }, 200);
        } else {
            document.body.style.overflow = '';
            setIsShow(false);
        }
    }, [modalInfo, windowHeight, windowWidth]);

    const handleClick = useCallback((e: MouseEvent) => {
        if (e.target !== imageElem.current) {
            dispatch(setImage({
                image: '',
                height: 0,
                width: 0,
                top: 0,
                left: 0,
            }));
            setDimensions({});
        }
    }, [dispatch]);

    return <div className="modal" onClick={handleClick}
        style={{
            zIndex: isShow ? 1000 : -1,
            opacity: isShow ? 1 : 0,
            backgroundColor: isShow ? "rgba(119, 119, 119, 0.86)" : "",
        }}
    >
        <img src={modalInfo.image} alt="" ref={imageElem}
            style={dimensions}
        />
    </div>;
}
