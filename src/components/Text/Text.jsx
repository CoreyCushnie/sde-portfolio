import React from 'react';
import styled from 'styled-components';


export default function TextComponent ({ ...props})  {
    return <Text {...props}>{props.children}</Text>
    
};

const Text = styled.p`
    color: ${(props => props.color ? props.color : "#f8f8f8" )};
    font-family: montserrat, sans-serif;
    align-self: ${({ alignSelf }) => alignSelf ? alignSelf : "center"};
    font-size: ${({ size }) => size ? `${size}px`  : "12px"};
    font-weight: ${({ weight }) => weight ? weight : 400};
    margin: ${({ margin }) => margin ? margin : "0px"};
    line-height: ${({ lHeight }) => lHeight ? lHeight : "auto"};

    ${( {center, right} ) => {
        switch(true){
            case center:
                return `text-align: center`;

            case right:
                return `text-align: right`;
            
            default:
                return `text-align: left`;

        }
    }}

    ${ ( {bold, bolder, boldest} ) => {
        switch(true){
            case bold:
                return `font-weight: 200`;

            case bolder:
                return `font-weight: 400`;

            case boldest:
                return `font-weight: 800`;

            default:
                return `font-weight: 400`
        }


    }}

`;