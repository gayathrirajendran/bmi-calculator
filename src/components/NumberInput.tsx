import { memo, useEffect, useRef } from "react";

type Props = {
    min: number;
    max: number;
    changeFunction: any;
    defaultValue: number;
    isFocus?: boolean;
}

const NumberInput = ({ min, max, changeFunction, defaultValue, isFocus}: Props) => {
    
    const inputRef = useRef<any>(null);

    useEffect(() => {
        if(isFocus) { inputRef.current?.focus(); }
    }, []);

    return (
        <input ref={inputRef} type="number" step={1} min={min} max={max} value={defaultValue} onChange={(e) => changeFunction(e.target.value)} />
    )
}

export default memo(NumberInput);