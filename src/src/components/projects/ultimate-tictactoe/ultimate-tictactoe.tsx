import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import { bytecoder } from "../../../external/bytecoderclasses";

export default function UltimateTictactoe(): JSX.Element {
    return <div className="ultimate-tictactoe">
        <div className="ultimate-tictactoe-title">Ultimate Tictactoe</div>
        <Terminal />
    </div>;
};

type BytecoderString = {
    nativeObject: string,
};

type Agent = {
    getResponse: (input?: BytecoderString) => {
        nativeObject: string,
    },
};

type ToBytecoderString = (input: string) => BytecoderString;

const agent: Agent = bytecoder.exports as Agent;

const toBytecoderString: ToBytecoderString = (bytecoder.toBytecoderString as unknown) as ToBytecoderString;

const Terminal = (): JSX.Element => {
    const [dialog, setDialog] = useState<Array<string>>([]);
    const isStarted = useRef<boolean>(false);
    const [inputValue, setInputValue] = useState<string>('');
    const logRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = useCallback(() => {
        setTimeout(() => {
            logRef.current!.scrollTo({
                top: logRef.current!.scrollHeight,
                behavior: "smooth",
            });
        }, 10);
    }, []);

    const updateDialog = useCallback(() => {
        const response = agent.getResponse().nativeObject;
        setDialog(dialog => [
            ...dialog,
            response,
        ]);
        scrollToBottom();
    }, [scrollToBottom]);

    const getResponse = useCallback(() => {
        const response = agent.getResponse(toBytecoderString(inputValue)).nativeObject;
        setDialog(dialog => [
            ...dialog,
            `> ${inputValue}`,
            response,
        ]);
        setInputValue('');
        if (response[response.length - 1] !== ':') {
            setTimeout(updateDialog, 400);
        }
        scrollToBottom();
    }, [inputValue, updateDialog, scrollToBottom]);

    const handleKeyUp = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            getResponse();;
        }
    }, [getResponse]);

    useEffect(() => {
        if (!isStarted.current) {
            updateDialog();
            isStarted.current = true;
        }
    }, [updateDialog]);

    return <div className="ultimate-tictactoe-terminal">
        <div className="ultimate-tictactoe-terminal-log" ref={logRef}>
            {dialog.map((text, i) => (
                <div className="ultimate-tictactoe-terminal-text" key={i}>{text}</div>
            ))}
        </div>
        <div className="ultimate-tictactoe-terminal-input">
            <div className="ultimate-tictactoe-terminal-input-indicator">&gt;</div>
            <input
                type="text"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyUp={handleKeyUp}
                value={inputValue}
                autoFocus
            />
        </div>
    </div>;
};
