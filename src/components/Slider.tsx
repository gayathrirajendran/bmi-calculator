import { memo } from "react";

type Props = {
    min: number;
    max: number;
    changeFunction: any;
    value?: number;
    defaultValue: number;
}

const Slider = ({ min, max, changeFunction, defaultValue }: Props) => {
    return (
        <input step={1} type="range" min={min} max={max} value={defaultValue} onChange={(e) => changeFunction(e.target.value) } />

        // <input type="number" step={1} min={min} max={max} value={defaultValue} onChange={(e) => changeFunction(e.target.value)} />
    )
}

export default memo(Slider);