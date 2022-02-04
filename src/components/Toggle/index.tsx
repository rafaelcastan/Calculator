import { Switch, SwitchLabel, SwitchSelection } from "./styles";

interface SwitchProps {
    themes: string[];
    selectedTheme: string;
    handleThemeChange: (value:string)=>void;
    
}

export default function Toggle ({themes, selectedTheme, handleThemeChange}:SwitchProps) {

    const selectionStyle = () => {
        return {
        left: `${themes.indexOf(selectedTheme) / 3 * 100}%`,
        };
    }; 
    
    return (
        <Switch>
            {themes.map(value => {
                return (
                    <span key={value}>      
                    <SwitchLabel onClick={()=>handleThemeChange(value)} />
                    </span>
                );
            })}
            <SwitchSelection style={selectionStyle()} />
        </Switch>
    )

}