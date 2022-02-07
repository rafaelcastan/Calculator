import Buttons from './components/Buttons';
import Toggle from './components/Toggle';
import { ThemeProvider } from 'styled-components';
import { CalcDiv, CalcHeader, ThemeNames, ThemeSelector, 
         ThemeSelectorDiv, CalcScreen, CalcScreenOperation, Background } from './styles';
import {GlobalStyle} from './styles/global';
import firstTheme from './styles/themes/firstTheme';
import secondTheme from './styles/themes/secondTheme';
import thirdTheme from './styles/themes/thirdTheme';
import usePersistedState from './utils/usePersistedState';
import { useState } from 'react';

function App() {

  const [selectedTheme, setSelectedTheme] = usePersistedState('theme', firstTheme);
  const [creatingNumber, setCreatingNumber] = useState('')
  const [numbersToCalc, setNumbersToCalc] = useState([] as number[])
  const [operators, setOperators] = useState([] as string[])
  const themes = ['1','2','3'];

  const NumberOutputFormat = new Intl.NumberFormat('pt-BR',{
    maximumFractionDigits: 9
  });

  const handleThemeChange = (val:string) => {
      switch(val) {
        case '1': 
          setSelectedTheme(firstTheme)
        break;
        case '2': 
          setSelectedTheme(secondTheme)
        break;
        case '3': 
          setSelectedTheme(thirdTheme)
        break;

      }  
  }

  const createNumber = (value:string) => {

    if(creatingNumber.length <10){
      if(value === '.' && creatingNumber.indexOf('.') === -1){
        const newNumber = creatingNumber+value;
        setCreatingNumber(newNumber);
      }
      else if (value!=='.') {
        const newNumber = creatingNumber+value;
        setCreatingNumber(newNumber);
      }    
    } 
  }

  const addOperator = (value:string) => {
    if(creatingNumber !== '') {
      setNumbersToCalc([...numbersToCalc, Number(creatingNumber)]);
      setCreatingNumber('');
      setOperators([...operators, value]);
    }
    if (creatingNumber === '' && numbersToCalc.length >= 1) {
      if(operators.length === 0) {
        setOperators([...operators, value]);
      }
      else {
        const replaceOperator = operators.map((operator, id)=>{
          if (id === (operators.length -1 )) {
            return value
          }
          else {
            return operator
          }
        });
        setOperators(replaceOperator)
      }
    }
  }

  const deleteValue = () =>{
    if (operators.length > 0 && creatingNumber === '') {
      const newOperators = operators.slice(0, operators.length - 1);
      const newNumbers = numbersToCalc.slice(0, numbersToCalc.length - 1)
      setOperators(newOperators);
      setNumbersToCalc(newNumbers);
      setCreatingNumber(numbersToCalc[numbersToCalc.length - 1].toString());
    }
    if (creatingNumber !== '') {
      const newValue = creatingNumber.slice(0, -1);
      setCreatingNumber(newValue)
    }
    if (creatingNumber === '' && operators.length===0 && numbersToCalc.length !== 0) {
      const newNumbers = numbersToCalc.slice(0, numbersToCalc.length - 1)
      const deletedLastNumber = numbersToCalc[numbersToCalc.length - 1].toString().slice(0, -1);
      setNumbersToCalc(newNumbers);
      setCreatingNumber(deletedLastNumber);
    }
  }

  const resetCalculator = () => {
      setOperators([]);
      setNumbersToCalc([]);
      setCreatingNumber('');
  }
  
  const calcResult = () => {
    if (operators.length > 0) {
    let numbersToBeCalc = [...numbersToCalc, Number(creatingNumber)];
    let operationsToBeDone = [...operators];
    if(creatingNumber === '' ) {
      numbersToBeCalc = numbersToBeCalc.slice(0,-1)
      operationsToBeDone = operationsToBeDone.slice(0,-1)
    }
    do {
      if (operationsToBeDone.indexOf('*') > -1 || operationsToBeDone.indexOf('/') > -1){ //verify if exists one multiplication or division operation and what come first
        if( operationsToBeDone.indexOf('*') > operationsToBeDone.indexOf('/') ) {
          const result = numbersToBeCalc[operationsToBeDone.indexOf('*')] * numbersToBeCalc[operationsToBeDone.indexOf('*') + 1] //calc the multiplication using the numbers before and after the operator
          numbersToBeCalc.splice( operationsToBeDone.indexOf('*') + 1, 1) //remove the number that comes after the operator
          // eslint-disable-next-line no-loop-func
          numbersToBeCalc = numbersToBeCalc.map((number, id)=>{ //replace the number that comes before the operator with the result
            if (id === operationsToBeDone.indexOf('*')) {
              return result
            }
            return number
          });
          operationsToBeDone.splice(operationsToBeDone.indexOf('*'), 1);
        }
        else {
          if(numbersToBeCalc[operationsToBeDone.indexOf('/') + 1] === 0) { //can't do division by zero so we verify it here
            alert('Não é possível dividir por zero')
            operationsToBeDone = []
            numbersToBeCalc = []
            resetCalculator();
          }
          else{
            const result = numbersToBeCalc[operationsToBeDone.indexOf('/')] / numbersToBeCalc[operationsToBeDone.indexOf('/') + 1]
            numbersToBeCalc.splice( operationsToBeDone.indexOf('/') + 1, 1)
            // eslint-disable-next-line no-loop-func
            numbersToBeCalc = numbersToBeCalc.map((number, id)=>{
              if (id === operationsToBeDone.indexOf('/')) {
                return result
              }
              return number
            });
            operationsToBeDone.splice(operationsToBeDone.indexOf('/'), 1);
          }
        }
      }
      else {
        if( operationsToBeDone.indexOf('+') > operationsToBeDone.indexOf('-') ) {
          const result = numbersToBeCalc[operationsToBeDone.indexOf('+')] + numbersToBeCalc[operationsToBeDone.indexOf('+') + 1]
          numbersToBeCalc.splice( operationsToBeDone.indexOf('+') + 1, 1)
          // eslint-disable-next-line no-loop-func
          numbersToBeCalc = numbersToBeCalc.map((number, id)=>{
            if (id === operationsToBeDone.indexOf('+')) {
              return result
            }
            return number
          });
          operationsToBeDone.splice(operationsToBeDone.indexOf('+'), 1);
        }
        else {
          const result = numbersToBeCalc[operationsToBeDone.indexOf('-')] - numbersToBeCalc[operationsToBeDone.indexOf('-') + 1]
          numbersToBeCalc.splice( operationsToBeDone.indexOf('-') + 1, 1)
          // eslint-disable-next-line no-loop-func
          numbersToBeCalc = numbersToBeCalc.map((number, id)=>{
            if (id === operationsToBeDone.indexOf('-')) {
              return result
            }
            return number
          });
          operationsToBeDone.splice(operationsToBeDone.indexOf('-'), 1);
        }
      }
    }
      while (operationsToBeDone.length > 0)
      setNumbersToCalc(numbersToBeCalc)
      setOperators([]);
      setCreatingNumber('');
    }
  }


  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <Background>
        <CalcDiv>
          <CalcHeader>
            <h3>calc</h3>
            <ThemeSelectorDiv>
              <h3>THEME</h3>
              <ThemeSelector>
                <ThemeNames>
                  <p onClick={()=>handleThemeChange('1')}>1</p>
                  <p onClick={()=>handleThemeChange('2')}>2</p>
                  <p onClick={()=>handleThemeChange('3')}>3</p>
                </ThemeNames>
                <Toggle themes={themes} selectedTheme={selectedTheme.title} handleThemeChange={handleThemeChange}/>
              </ThemeSelector>
            </ThemeSelectorDiv>
          </CalcHeader>
          <CalcScreen>
            <CalcScreenOperation>
              {numbersToCalc.length >= 1 && (
                numbersToCalc.map((number, id) => {
                    if (operators[id] !== null) {
                      return(
                        <span key={id}>
                          {NumberOutputFormat.format(number)} 
                          {operators[id] !== undefined && operators[id].replace('*', 'x').replace('/', '÷')} 
                        </span>
                      ) 
                    }
                    else {
                      return(
                        <span key={id}>{NumberOutputFormat.format(number)}</span>
                      ) 
                    }
                })
              )}
              {creatingNumber.indexOf('.')> -1 ? (
                <span>
                {NumberOutputFormat.format(Number(creatingNumber.slice(0, creatingNumber.indexOf('.'))))}
                {creatingNumber.slice(creatingNumber.indexOf('.'), creatingNumber.length).replace('.', ',')}
                </span>
              ):(
                <span>
                  { creatingNumber !== '' && NumberOutputFormat.format(Number(creatingNumber))}
                </span>
              )}
            </CalcScreenOperation>
          </CalcScreen>
          <Buttons  createNumber={createNumber} 
                    addOperator={addOperator} 
                    deleteValue={deleteValue} 
                    resetCalculator={resetCalculator} 
                    calcResult = {calcResult}
                    />
        </CalcDiv>
      </Background>
    </ThemeProvider>
  );
}

export default App;
