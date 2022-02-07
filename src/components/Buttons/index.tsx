import { ButtonsGrid, EqualButton, NumberSymbolButton, TextButton } from "./styles";

interface ButtonsProps {
  createNumber : (value:string)=>void;
  addOperator : (value:string) => void;
  deleteValue : () => void;
  resetCalculator: () => void;
  calcResult: () => void;
}

export default function Buttons ({createNumber, addOperator, deleteValue, resetCalculator, calcResult}:ButtonsProps) {
    return (
        <ButtonsGrid>
          <NumberSymbolButton onClick={()=>createNumber('7')}>7</NumberSymbolButton>
          <NumberSymbolButton onClick={()=>createNumber('8')}>8</NumberSymbolButton>
          <NumberSymbolButton onClick={()=>createNumber('9')}>9</NumberSymbolButton>
          <TextButton onClick={deleteValue}>DEL</TextButton>
          <NumberSymbolButton onClick={()=>createNumber('4')}>4</NumberSymbolButton>
          <NumberSymbolButton onClick={()=>createNumber('5')}>5</NumberSymbolButton>
          <NumberSymbolButton onClick={()=>createNumber('6')}>6</NumberSymbolButton>
          <NumberSymbolButton onClick={()=>addOperator('+')}>+</NumberSymbolButton>
          <NumberSymbolButton onClick={()=>createNumber('1')}>1</NumberSymbolButton>
          <NumberSymbolButton onClick={()=>createNumber('2')}>2</NumberSymbolButton>
          <NumberSymbolButton onClick={()=>createNumber('3')}>3</NumberSymbolButton>
          <NumberSymbolButton onClick={()=>addOperator('-')}>-</NumberSymbolButton>
          <NumberSymbolButton onClick={()=>createNumber('.')}>.</NumberSymbolButton>
          <NumberSymbolButton onClick={()=>createNumber('0')}>0</NumberSymbolButton>
          <NumberSymbolButton onClick={()=>addOperator('/')}>/</NumberSymbolButton>
          <NumberSymbolButton onClick={()=>addOperator('*')}>x</NumberSymbolButton>
          <TextButton onClick={resetCalculator}>RESET</TextButton>
          <EqualButton onClick={calcResult}> = </EqualButton>
        </ButtonsGrid>
    )
}