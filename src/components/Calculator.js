import { Button, Container} from "./Styled";
import { Screen, Previous, Current } from "./Styled";

import { useState } from "react";

export default function Calculator() {
    const [current, setCurrent] = useState("")
    const [previus, setPrevius] = useState("")
    const [operation, setOperation] = useState("")

    const handleValue = (e) => {
        const valueBtn = e.target.getAttribute('data')
        if(valueBtn === '.' && current.includes('.')) return;
        setCurrent(current + valueBtn)
    }

    const deletHandle = () => {
        setCurrent(String(current).slice(0, -1))
    }

    const deletAll = () => {
        setCurrent("");
        setPrevius("");
        setOperation("");
    }

    const operationHandle = (e) => {
        if(current === "") return;
        if(previus !== "") {
            let val = compute()
            setPrevius(val)
        }else{
            setPrevius(current)
        }

        setCurrent("")
        setOperation(e.target.getAttribute("data"))
    }

    const equalsHandle = () => {
        let val = compute()
        if(val === undefined || val === null) return;

        setCurrent(val)
        setOperation("")
        setPrevius("")
    }

    const compute = () => {
        let result;
        let previousNumber = parseFloat(previus)
        let currentNumber = parseFloat(current)

        if(isNaN(previousNumber) || isNaN(currentNumber)) return;

        switch(operation) {
            case "÷" :
                result = previousNumber / currentNumber;
                break;
            case "x" :
                result = previousNumber * currentNumber;
                break;
            case "+" :
                result = previousNumber + currentNumber;
                break;
            case "-" :
                result = previousNumber - currentNumber;
                break;
            default :
                return;
        }

        return result
    }

    return(
        <Container>
            <Screen>
                <Previous>{previus} {operation}</Previous>
                <Current>{current}</Current>
            </Screen>
            <Button gridSpan={2} onClick={deletAll}>AC</Button>
            <Button control onClick={deletHandle}>DEL</Button>
            <Button data={"÷"} onClick={operationHandle} operation>÷</Button>
            <Button data={"7"} onClick={handleValue}>7</Button>
            <Button data={"8"} onClick={handleValue}>8</Button>
            <Button data={"9"} onClick={handleValue}>9</Button>
            <Button data={"x"} onClick={operationHandle} operation>x</Button>
            <Button data={"4"} onClick={handleValue}>4</Button>
            <Button data={"5"} onClick={handleValue}>5</Button>
              <Button data={"6"} onClick={handleValue}>6</Button>
            <Button data={"+"} onClick={operationHandle} operation>+</Button>
            <Button data={"1"} onClick={handleValue}>1</Button>
            <Button data={"2"} onClick={handleValue}>2</Button>
            <Button data={"3"} onClick={handleValue}>3</Button>
            <Button data={"-"} onClick={operationHandle} operation>-</Button>
            <Button data={'.'} period onClick={handleValue}>.</Button>
            <Button data={"0"} onClick={handleValue}>0</Button>
            <Button data={"="} onClick={equalsHandle} equal={2}>=</Button>
        </Container>
    )
}