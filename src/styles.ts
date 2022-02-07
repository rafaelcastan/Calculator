import styled  from 'styled-components';

export const Background = styled.div `
    display: flex;
    flex-direction: column;
    align-items:center;
    height:100vh;
    background: ${props=> props.theme.backgroundColors.main};
    color: ${props=> props.theme.textColors.tertiary};
`

export const CalcDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items : center;
    background: ${props=> props.theme.backgroundColors.main};
    padding: 28px 25px;
    color: ${props=> props.theme.textColors.tertiary};
    width:100%;
    max-width: 500px;

    @media (max-width:280px) {
        max-width: 100%;
        padding: 15px;
    }

    @media (min-width:768px) {
        margin-top: auto;
        margin-bottom: auto;
    }
`

export const CalcHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items:center;
    justify-content:space-between;

    h3 {
        font-size: 28px;
    }
`

export const ThemeSelectorDiv = styled.div `
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-around;

    h3 {
        font-size: 13px;
        letter-spacing: 1px;
        font-weight: bold;
        align-self: flex-end;
        margin-right: 20px;
        margin-bottom: 4px;
    }
`

export const ThemeSelector = styled.div`
    display: flex;
    flex-direction: column;
`

export const ThemeNames = styled.div`
    display: flex;
    flex-direction: row;
    min-width:50px;
    justify-content: space-between;
    padding:5px;

    p {
        font-size: 13px;
        font-weight:bold;
    }
`

export const CalcScreen = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    min-height: 85px;
    background: ${props=> props.theme.backgroundColors.screen};
    margin-top: 28px;
    border-radius: 10px;
`

export const CalcScreenOperation = styled.div`
    padding-top: 10px;
    padding-bottom: 15px;
    padding-right: 25px;
    padding-left: 10px;

    span {
        font-size: 35px;
        font-weight: bold;
    }
`

