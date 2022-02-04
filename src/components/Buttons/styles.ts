import styled from 'styled-components';

export const ButtonsGrid = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 18px;
    padding: 25px;
    width: 100%;
    border-radius: 10px;
    background: ${props=> props.theme.backgroundColors.toggleAndKeypad};
    margin-top: 25px;
`

export const NumberSymbolButton = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top: 8px;
    height: 60px;
    border-radius: 4px;
    background:${props=> props.theme.backgroundColors.numbersAndOperators};
    box-shadow: 0px 4px ${props=> props.theme.shadowsColors.numbersAndOperators};
    color: ${props=> props.theme.textColors.primary};
    font-size: 32px;
    font-weight: bold;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    :hover {
        cursor:pointer;
        filter: brightness(85%);
    }

    :active {
        box-shadow: 0 2px ${props=> props.theme.shadowsColors.numbersAndOperators};
        transform: translateY(4px);
    }

`

export const TextButton = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top: 2px;
    height: 60px;
    border-radius: 4px;
    background:${props=> props.theme.backgroundColors.textButtons};
    box-shadow: 0px 4px ${props=> props.theme.shadowsColors.textButtons};
    color: white;
    font-size: 17px;
    font-weight: bold;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    :hover {
        cursor:pointer;
        filter: brightness(85%);
    }

    :active {
        box-shadow: 0 2px ${props=> props.theme.shadowsColors.textButtons};
        transform: translateY(4px);
    }

    :nth-last-child( -n + 2 )  {
	    grid-column: span 2;
    }
`
export const EqualButton = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding-top: 2px;
    height: 60px;
    border-radius: 4px;
    background:${props=> props.theme.backgroundColors.equalButtonAndToggle};
    box-shadow: 0px 4px ${props=> props.theme.shadowsColors.equalButton};
    color: ${props=> props.theme.title !== '3' ? ('white'):('black')};
    font-size: 18px;
    font-weight: bold;
	grid-column: span 2;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    :hover {
        cursor:pointer;
        filter: brightness(85%);
    }

    :active {
        box-shadow: 0 2px ${props=> props.theme.shadowsColors.equalButton};
        transform: translateY(4px);
    }
`
