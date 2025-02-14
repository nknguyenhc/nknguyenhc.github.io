import { createRef, useCallback, useEffect, useMemo, useState } from "react";
import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { cpp } from "@codemirror/lang-cpp";
import { foldGutter } from "@codemirror/language";
import { CopyIcon, DownloadIcon, FoldGutter, ShowHideIcon } from "./icons";
import { useAppDispatch } from "../../../redux/store";
import { setText } from "../../../redux/modalSlice";
import { renderToStaticMarkup } from "react-dom/server";

export default function CodingSchemeSimulation(): JSX.Element {
    return <div className="css">
        <div className="css-title">Coding Scheme Simulation</div>
        <Description />
        <WebPage />
        <SourceCode />
    </div>;
}

const Description = (): JSX.Element => {
    return <div className="css-description">
        When transmitting data, how do you know if the trasmitted data is corrupted?
        The idea is, instead of transmitting raw data, we transmitted encoded data,
        so that upon receival, in the case that there are slight errors,
        the data can still be decoded to give the correct raw data.
        We explore 3 different schemes of coding:
        <ul className="css-description-code-listing">
            <li>Convolutional code</li>
            <li>Hamming code</li>
            <li>Reed-Solomon code</li>
        </ul>
        The webpage frame below is best viewed on desktop.
    </div>;
};

const WebPage = (): JSX.Element => {
    return <iframe
        src="https://coding-scheme-simulation.nknguyenhc.net/"
        title="CSS page"
        className="css-page"
    />
};

const SourceCode = (): JSX.Element => {
    const codes = useMemo<Array<string>>(() => ['hamming_code.cpp', 'convolutional.cpp', 'RC_929.cpp'], []);

    return <div className="css-source">
        <div className="css-source-description">
            <div>
                We programmed the code in C++, which is the backbone of our APIs.
                The code is responsible for encoding and decoding each type of coding scheme.
            </div>
            <div>
                Our Nodejs backend interacts with the cpp code through stdin and stdout.
            </div>
            <div>
                Our frontend makes use of the APIs for encoding and decoding.
                For stepwise calculation, we coded the coding scheme logic to frontend.
            </div>
            <div>
                Below is our source code in C++:
            </div>
        </div>
        <div className="css-source-block">
            {codes.map((code) => (
                <CodeContent name={code} key={code} />
            ))}
        </div>
    </div>
};

const useCssCodeContent = (filename: string) => {
    const [content, setContent] = useState<string>('');
    
    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/tranvietkhoa/Coding-Schemes-Simulation/main/${filename}`)
            .then(res => res.text())
            .then(res => setContent(res));
    }, [filename]);

    return content;
};

const CodeContent = ({ name }: {
    name: string,
}): JSX.Element => {
    const content = useCssCodeContent(name);
    const dispatch = useAppDispatch();
    const [isShow, setIsShow] = useState<boolean>(true);
    const codeRef = createRef<ReactCodeMirrorRef>();
    const [editorHeight, setEditorHeight] = useState<number | undefined>(undefined);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(content);
        dispatch(setText({
            text: 'Code copied to clipboard!',
        }));
    }, [content, dispatch]);

    const handleDownload = useCallback(() => {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
        element.setAttribute('download', name);
        element.click();
    }, [name, content]);

    const handleShowHide = useCallback(() => {
        setIsShow(isShow => !isShow);
        setIsTransitioning(true);
    }, []);

    const updateHeight = useCallback(() => {
        const possibleHeight = codeRef.current?.editor?.children[0].clientHeight;
        if (possibleHeight && !isTransitioning) {
            setEditorHeight(possibleHeight);
        }
    }, [codeRef, isTransitioning]);

    const foldGutterExtension = useMemo(() => foldGutter({
        markerDOM: (isOpen) => {
            const div = document.createElement('div');
            div.onclick = () => setTimeout(updateHeight, 100);
            div.innerHTML = renderToStaticMarkup(<FoldGutter isShow={isOpen} />);
            return div;
        }
    }), [updateHeight]);

    useEffect(() => {
        if (content === '') {
            return;
        }
        updateHeight();
    }, [content, updateHeight]);

    return <div className="css-source-code">
        <div className="css-source-code-header">
            <div className="css-source-code-header-name">
                <ShowHideIcon onClick={handleShowHide} isShow={isShow} />
                <div>{name}</div>
            </div>
            <div className="css-source-code-header-control">
                <CopyIcon onClick={handleCopy} />
                <DownloadIcon onClick={handleDownload} />
            </div>
        </div>
        <CodeMirror
            extensions={[cpp(), foldGutterExtension]}
            value={content}
            readOnly
            className={"css-source-code-content" + (isShow ? "" : " css-source-code-content-hidden")}
            ref={codeRef}
            style={{
                height: isShow ? editorHeight ? editorHeight : "" : 0,
            }}
            onTransitionEnd={() => setIsTransitioning(false)}
            basicSetup={{ foldGutter: false }}
        />
    </div>
};
