import Buttons from './components/Buttons';
import Toggle from './components/Toggle';
import { ThemeProvider } from 'styled-components';
import { CalcDiv, CalcHeader, ThemeNames, ThemeSelector, 
         ThemeSelectorDiv, CalcScreen, CalcScreenOperation } from './styles';
import {GlobalStyle} from './styles/global';
import firstTheme from './styles/themes/firstTheme';
import secondTheme from './styles/themes/secondTheme';
import thirdTheme from './styles/themes/thirdTheme';
import usePersistedState from './utils/usePersistedState';
import { useState } from 'react';

function App() {

  const [selectedTheme, setSelectedTheme] = usePersistedState('theme', firstTheme);
  const [number, setNumber] = useState('')
  const themes = ['1','2','3'];


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

    if(number.length <10 ){
      const newNumber = number+value;
      setNumber(newNumber)
    }
    
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
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
            <span>
              {Intl.NumberFormat().format(Number(number))}
            </span>
          </CalcScreenOperation>
        </CalcScreen>
        <Buttons createNumber={createNumber}/>
      </CalcDiv>
    </ThemeProvider>
  );
}

export default App;
