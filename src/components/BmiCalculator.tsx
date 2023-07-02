import { useMemo, useState } from 'react';
import Slider from './Slider'
import NumberInput from './NumberInput';

const minHeight = 120;
const minWeight = 20;
const maxHeight = 230;
const maxWeight = 200;

const BmiCalculator = () => {

    const [weight, setWeight] = useState<number>(minWeight);
    const [height, setHeight] = useState<number>(minHeight);

    function onWeightChange(val: number) {
        console.log(val);
        setWeight(val);
    }

    function onHeightChange(val: number) {
        setHeight(val);
    }

    function calculateBmi(weight: number, height: number): number {
        const calculatedHeight = height / 100;
        const bmi = (weight / (calculatedHeight * calculatedHeight));
        return Math.round(bmi);
    }

    const bmi = useMemo(() => calculateBmi(weight, height), [weight, height]);



    return (
        <>
            <div>
                <div>
                    <label>Weight: </label>
                    <strong>{weight} kg</strong>
                </div>
                <div>
                    <NumberInput isFocus={true} defaultValue={weight} changeFunction={onWeightChange} max={maxWeight} min={minWeight}></NumberInput>
                    <Slider key="weight" defaultValue={weight} changeFunction={onWeightChange} max={maxWeight} min={minWeight}></Slider>
                </div>
            </div>
            <div>
                <div>
                    <label>Height: </label>
                    <strong>{height} cm</strong>
                </div>
                <NumberInput defaultValue={height} changeFunction={onHeightChange} max={maxHeight} min={minHeight}></NumberInput>
                <Slider key="height" defaultValue={height} changeFunction={onHeightChange} max={maxHeight} min={minHeight}></Slider>
            </div>
            <strong>BMI: {bmi}</strong>
        </>
    )
}

export default BmiCalculator