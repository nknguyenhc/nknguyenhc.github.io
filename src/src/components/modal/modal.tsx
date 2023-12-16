import { MouseEvent, useCallback, useEffect, useRef, useState, WheelEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setImage, setText } from "../../redux/modalSlice";
import useViewportWidth, { useWindowDimensions } from "../../utils/viewport";

type Dimensions = {
    height?: number,
    width?: number,
    left?: number,
    top?: number,
    scale?: number,
};

type MousePosition = {
    top: number,
    left: number,
}

export const ImageModal = (): JSX.Element => {
    const imageElem = useRef<HTMLImageElement>(null);
    const modalInfo = useAppSelector(state => state.imageModal);
    const [isShow, setIsShow] = useState<boolean>(false);
    const [dimensions, setDimensions] = useState<Dimensions>({});
    const dispatch = useAppDispatch();
    const { windowHeight, windowWidth } = useWindowDimensions();
    const [isHolding, setIsHolding] = useState<boolean>(false);
    const [mousePosition, setMousePosition] = useState<MousePosition>({
        top: 0,
        left: 0,
    });
    const isDesktop = useViewportWidth();

    const handleMouseDown = useCallback((e: MouseEvent) => {
        if (!isDesktop) {
            return;
        }
        setIsHolding(true);
        setMousePosition({
            top: e.clientY - dimensions.top!,
            left: e.clientX - dimensions.left!,
        });
    }, [dimensions, isDesktop]);

    const handleMouseUp = useCallback(() => {
        if (!isDesktop) {
            return;
        }
        setIsHolding(false);
    }, [isDesktop]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDesktop) {
            return;
        }
        if (isHolding) {
            setDimensions(dimensions => ({
                ...dimensions,
                top: e.clientY - mousePosition.top,
                left: e.clientX - mousePosition.left,
            }));
        }
    }, [isHolding, mousePosition, isDesktop]);

    const handleWheel = useCallback((e: WheelEvent) => {
        if (!isDesktop) {
            return;
        }
        if (e.deltaY < 0) {
            setDimensions(dimensions => ({
                ...dimensions,
                scale: dimensions.scale! + 0.1
            }));
        } else {
            setDimensions(dimensions => ({
                ...dimensions,
                scale: dimensions.scale! - 0.1
            }));
        }
    }, [isDesktop]);

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
                    scale: 1,
                });
                window.setTimeout(() => {
                    setDimensions({
                        height: rect.height,
                        width: rect.width,
                        top: windowHeight / 2 - rect.height / 2,
                        left: windowWidth / 2 - rect.width / 2,
                        scale: 1,
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

    return <div className="image-modal" onClick={handleClick}
        style={{
            zIndex: isShow ? 1000 : -1,
            opacity: isShow ? 1 : 0,
            backgroundColor: isShow ? "rgba(119, 119, 119, 0.86)" : "",
        }}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
    >
        <img src={modalInfo.image} alt="" ref={imageElem}
            style={{
                ...dimensions,
                transform: dimensions.scale ? `scale(${dimensions.scale})` : "",
                cursor: isHolding ? "grabbing" : "grab",
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            draggable="false"
        />
    </div>;
}

export const TextModal = (): JSX.Element => {
    const modalInfo = useAppSelector(state => state.textModal);
    const [isShow, setIsShow] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const windowRef = useRef<HTMLDivElement>(null);

    const handleClose = useCallback(() => {
        dispatch(setText({
            text: '',
        }));
    }, [dispatch]);

    useEffect(() => {
        if (modalInfo.text !== '') {
            document.body.style.overflow = 'hidden';
            setIsShow(true);
            windowRef.current!.animate([
                {
                    scale: 0,
                },
                {
                    scale: 1,
                },
            ], {
                duration: 300,
            })
        } else {
            document.body.style.overflow = '';
            setIsShow(false);
        }
    }, [modalInfo]);

    return <div className="text-modal"
        style={{
            zIndex: isShow ? 1000 : -1,
            opacity: isShow ? 1 : 0,
            backgroundColor: isShow ? "rgba(119, 119, 119, 0.86)" : "",
        }}
    >
        <div className="text-modal-window" ref={windowRef}>
            <div>{modalInfo.text}</div>
            <div className="text-modal-close" onClick={handleClose}>
                <ModalClose />
            </div>
        </div>
    </div>
};

const ModalClose = (): JSX.Element => (
    <svg height="16" width="16">
        <line x1="1" x2="15" y1="1" y2="15" />
        <line x1="1" x2="15" y1="15" y2="1" />
    </svg>
);
